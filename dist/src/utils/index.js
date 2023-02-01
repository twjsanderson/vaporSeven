"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatEmail = exports.formatUrl = void 0;
const formatUrl = (url) => {
    url = url.toLocaleLowerCase().trim();
    // remove protocol if present
    if (url.includes('https://'))
        url = url.slice(8);
    if (url.includes('http://'))
        url = url.slice(7);
    // return url and simplifiedUrl if www prefix present
    if (url.includes('www.')) {
        const simplifiedUrl = url.slice(4);
        return [url, simplifiedUrl];
    }
    return [url];
};
exports.formatUrl = formatUrl;
const formatEmail = (email) => {
    let formattedEmails = [];
    formattedEmails.push(email);
    if (email.includes('@')) {
        let emailArr = email.split('@');
        formattedEmails.push(emailArr[1]);
        formattedEmails.push(`@${emailArr[1]}`);
    }
    // [complete email, domain without @ prefix, domain with @ prefix]
    return formattedEmails;
};
exports.formatEmail = formatEmail;
