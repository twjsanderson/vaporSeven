"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const big_json_1 = __importDefault(require("big-json"));
const dotenv_1 = __importDefault(require("dotenv"));
const utils_1 = require("./src/utils");
const domains_1 = require("./src/resources/domains");
const JSONDomains_1 = require("./src/resources/JSONDomains");
const emails_1 = require("./src/resources/emails");
const handlers_1 = require("./src/utils/httpResponses/handlers");
const httpResponses_1 = require("./src/utils/httpResponses");
const password_1 = require("./src/models/password");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
const searchAdditionalJSONDomains = (domain, file) => {
    const json1 = JSON.stringify(file, null, "\t");
    const chunkBody = json1.split(':');
    const domainsString = chunkBody[0].split('"')[1];
    const arr = domainsString.split('\\n');
    const formattedDomains = arr.map(domainStr => {
        if (domainStr[domainStr.length - 1] === ",") {
            let formattedDomainStart = domainStr.slice(1);
            let formattedDomainArr = formattedDomainStart.split('');
            // remove last ' & ,
            formattedDomainArr.pop();
            formattedDomainArr.pop();
            return formattedDomainArr.join('');
        }
        return domainStr;
    });
    if (formattedDomains.includes(domain))
        return true;
    return false;
};
const searchJSONDomainsStream = (domain, domainsStream) => {
    return new Promise((resolve) => {
        for (const domains of domainsStream) {
            const len = domainsStream.length - 1;
            const stringifyStream = big_json_1.default.createStringifyStream({ body: domains });
            stringifyStream.on('data', (strChunk) => {
                const chunkBody = strChunk.split(':');
                const domainsString = chunkBody[0].split('"')[1];
                if (domainsString) {
                    const domainsArray = domainsString.split('\\n');
                    if (domainsArray.includes(domain))
                        return resolve(true);
                    if (!domainsArray.includes(domain) &&
                        domainsStream.indexOf(domains) === len) {
                        return resolve(false);
                    }
                }
            });
        }
    });
};
const searchDomains = (domain, domainsArray) => {
    for (const domains of domainsArray) {
        if (domains.includes(domain))
            return true;
    }
    return false;
};
app.get('/url', (req, res) => {
    let val = 'www.schmuckshow.ch';
    // let val = 'huongbuoiquan.com';
    // let val = '202w2y.asia';
    const formattedUrl = (0, utils_1.formatUrl)(val);
    const simplifiedUrl = formattedUrl.length > 1 ? searchJSONDomainsStream(formattedUrl[1], JSONDomains_1.JSONDomains) : false;
    Promise.all([
        searchJSONDomainsStream(formattedUrl[0], JSONDomains_1.JSONDomains),
        simplifiedUrl,
        searchDomains(formattedUrl[0], domains_1.domains),
        searchAdditionalJSONDomains(formattedUrl[0], JSONDomains_1.additionalDomains)
    ])
        .then(data => {
        let result = 'Url not found.';
        const isUrlBlackListed = data.includes(true);
        if (isUrlBlackListed) {
            result = 'Url is known to serve malware.';
        }
        if (domains_1.discordPhishing.includes(val)) {
            result = 'Url is a known as a phishing website commonly found on discord.';
        }
        return (0, httpResponses_1.httpSuccess)(res, result);
    })
        .catch(err => {
        console.error(err);
    });
});
app.get('/email', (req, res) => {
    let val = 'user@mysending32.com';
    // let val = '0845.ru';
    const formattedEmails = (0, utils_1.formatEmail)(val);
    let result = false;
    for (const emailArr of emails_1.emails) {
        for (const formattedEmail of formattedEmails) {
            if (emailArr.includes(formattedEmail)) {
                result = true;
                // return res.send(true);
            }
            if (emails_1.disposableEmails.includes(formattedEmail)) {
                result = true;
                // return res.send('From known disposable email provider');
            }
        }
    }
    return res.send(result);
});
app.get('/password', (req, res) => {
    const reqBody = JSON.parse(req.body);
    if (reqBody) {
        return true;
    }
    console.log((0, password_1.request)(reqBody));
    // return httpSuccess(res, 'dfgsdf');
});
// app.get('/error', (req: Request, res: Response, next: NextFunction) => { 
//   httpBadRequest('test')
// });
app.use(handlers_1.errorHandler);
// Printing process signal acknowledged
const displayInfo = () => {
    console.log('Receiving SIGINT signal in nodeJS.');
};
process.on('SIGINT', displayInfo);
setTimeout(() => {
    console.log('Exiting.');
    process.exit(0);
}, 100);
// kill the process with pid and signal = 'SIGINT'     
process.kill(process.pid, 'SIGINT');
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
