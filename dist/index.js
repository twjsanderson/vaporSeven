"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const httpHandlers_1 = require("./src/middleware/httpHandlers");
// import { request } from "./src/models/password";
const routes_1 = __importDefault(require("./src/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(httpHandlers_1.initalRequestHandler);
app.use("/api", routes_1.default);
// const searchAdditionalJSONDomains = (domain: string, file: any) => {
//   const json1 = JSON.stringify(file, null, "\t");
//   const chunkBody = json1.split(":");
//   const domainsString = chunkBody[0].split('"')[1];
//   const arr = domainsString.split("\\n");
//   const formattedDomains = arr.map((domainStr) => {
//     if (domainStr[domainStr.length - 1] === ",") {
//       let formattedDomainStart = domainStr.slice(1);
//       let formattedDomainArr = formattedDomainStart.split("");
//       // remove last ' & ,
//       formattedDomainArr.pop();
//       formattedDomainArr.pop();
//       return formattedDomainArr.join("");
//     }
//     return domainStr;
//   });
//   if (formattedDomains.includes(domain)) return true;
//   return false;
// };
// const searchJSONDomainsStream = (domain: string, domainsStream: any) => {
//   return new Promise((resolve) => {
//     for (const domains of domainsStream) {
//       const len = domainsStream.length - 1;
//       const stringifyStream = json.createStringifyStream({ body: domains });
//       stringifyStream.on("data", (strChunk: any) => {
//         const chunkBody = strChunk.split(":");
//         const domainsString = chunkBody[0].split('"')[1];
//         if (domainsString) {
//           const domainsArray = domainsString.split("\\n");
//           if (domainsArray.includes(domain)) return resolve(true);
//           if (
//             !domainsArray.includes(domain) &&
//             domainsStream.indexOf(domains) === len
//           ) {
//             return resolve(false);
//           }
//         }
//       });
//     }
//   });
// };
// const searchDomains = (domain: string, domainsArray: string[][]) => {
//   for (const domains of domainsArray) {
//     if (domains.includes(domain)) return true;
//   }
//   return false;
// };
// app.get("/url", (req: Request, res: Response) => {
//   let val = "www.schmuckshow.ch";
//   // let val = 'huongbuoiquan.com';
//   // let val = '202w2y.asia';
//   const formattedUrl = formatUrl(val);
//   const simplifiedUrl: any =
//     formattedUrl.length > 1
//       ? searchJSONDomainsStream(formattedUrl[1], JSONDomains)
//       : false;
//   Promise.all([
//     searchJSONDomainsStream(formattedUrl[0], JSONDomains),
//     simplifiedUrl,
//     searchDomains(formattedUrl[0], domains),
//     searchAdditionalJSONDomains(formattedUrl[0], additionalDomains),
//   ])
//     .then((data) => {
//       let result: string = "Url not found.";
//       const isUrlBlackListed = data.includes(true);
//       if (isUrlBlackListed) {
//         result = "Url is known to serve malware.";
//       }
//       if (discordPhishing.includes(val)) {
//         result =
//           "Url is a known as a phishing website commonly found on discord.";
//       }
//       return httpSuccess(res, result);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });
// app.get("/email", (req: Request, res: Response) => {
//   let val = "user@mysending32.com";
//   // let val = '0845.ru';
//   const formattedEmails = formatEmail(val);
//   let result = false;
//   for (const emailArr of emails) {
//     for (const formattedEmail of formattedEmails) {
//       if (emailArr.includes(formattedEmail)) {
//         result = true;
//         // return res.send(true);
//       }
//       if (disposableEmails.includes(formattedEmail)) {
//         result = true;
//         // return res.send('From known disposable email provider');
//       }
//     }
//   }
//   return res.send(result);
// });
// app.get("/password", (req: Request, res: Response) => {
//   const { body } = req;
//   console.log(body);
//   // console.log(request(body));
//   // console.log(request(reqBody));
//   return httpSuccess(res, "dfgsdf");
// });
// app.get('/error', (req: Request, res: Response, next: NextFunction) => {
//   httpBadRequest('test')
// });
app.use(httpHandlers_1.errorHandler);
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
