import express, { Express, Request, Response, NextFunction } from "express";
import json from "big-json";
import dotenv from "dotenv";

import { formatUrl, formatEmail } from "./src/utils";
import { domains, discordPhishing } from "./src/resources/domains";
import { JSONDomains, additionalDomains } from "./src/resources/JSONDomains";
import { emails, disposableEmails } from "./src/resources/emails";

import { errorHandler } from "./src/middleware/httpHandlers";
import { httpBadRequest, httpSuccess } from "./src/utils/httpResponses";

import { request } from "./src/models/password";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const searchAdditionalJSONDomains = (domain: string, file: any) => {
  const json1 = JSON.stringify(file, null, "\t");
  const chunkBody = json1.split(":");
  const domainsString = chunkBody[0].split('"')[1];
  const arr = domainsString.split("\\n");
  const formattedDomains = arr.map((domainStr) => {
    if (domainStr[domainStr.length - 1] === ",") {
      let formattedDomainStart = domainStr.slice(1);
      let formattedDomainArr = formattedDomainStart.split("");
      // remove last ' & ,
      formattedDomainArr.pop();
      formattedDomainArr.pop();
      return formattedDomainArr.join("");
    }
    return domainStr;
  });
  if (formattedDomains.includes(domain)) return true;
  return false;
};

const searchJSONDomainsStream = (domain: string, domainsStream: any) => {
  return new Promise((resolve) => {
    for (const domains of domainsStream) {
      const len = domainsStream.length - 1;
      const stringifyStream = json.createStringifyStream({ body: domains });

      stringifyStream.on("data", (strChunk: any) => {
        const chunkBody = strChunk.split(":");
        const domainsString = chunkBody[0].split('"')[1];
        if (domainsString) {
          const domainsArray = domainsString.split("\\n");
          if (domainsArray.includes(domain)) return resolve(true);
          if (
            !domainsArray.includes(domain) &&
            domainsStream.indexOf(domains) === len
          ) {
            return resolve(false);
          }
        }
      });
    }
  });
};

const searchDomains = (domain: string, domainsArray: string[][]) => {
  for (const domains of domainsArray) {
    if (domains.includes(domain)) return true;
  }
  return false;
};

app.get("/url", (req: Request, res: Response) => {
  let val = "www.schmuckshow.ch";
  // let val = 'huongbuoiquan.com';
  // let val = '202w2y.asia';

  const formattedUrl = formatUrl(val);
  const simplifiedUrl: any =
    formattedUrl.length > 1
      ? searchJSONDomainsStream(formattedUrl[1], JSONDomains)
      : false;

  Promise.all([
    searchJSONDomainsStream(formattedUrl[0], JSONDomains),
    simplifiedUrl,
    searchDomains(formattedUrl[0], domains),
    searchAdditionalJSONDomains(formattedUrl[0], additionalDomains),
  ])
    .then((data) => {
      let result: string = "Url not found.";
      const isUrlBlackListed = data.includes(true);
      if (isUrlBlackListed) {
        result = "Url is known to serve malware.";
      }
      if (discordPhishing.includes(val)) {
        result =
          "Url is a known as a phishing website commonly found on discord.";
      }
      return httpSuccess(res, result);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/email", (req: Request, res: Response) => {
  let val = "user@mysending32.com";
  // let val = '0845.ru';

  const formattedEmails = formatEmail(val);
  let result = false;
  for (const emailArr of emails) {
    for (const formattedEmail of formattedEmails) {
      if (emailArr.includes(formattedEmail)) {
        result = true;
        // return res.send(true);
      }
      if (disposableEmails.includes(formattedEmail)) {
        result = true;
        // return res.send('From known disposable email provider');
      }
    }
  }
  return res.send(result);
});

app.get("/password", (req: Request, res: Response) => {
  let reqBody: any;
  if (req.body.length > 1) {
    reqBody = JSON.parse(req.body);
    console.log(reqBody);
  }
  // console.log(request(reqBody));
  return httpSuccess(res, "dfgsdf");
});

// app.get('/error', (req: Request, res: Response, next: NextFunction) => {
//   httpBadRequest('test')
// });

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
