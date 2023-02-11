"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_s3_1 = require("@aws-sdk/client-s3");
// Set the AWS Region.
const REGION = "us-east-2";
// Create an Amazon S3 service client object.
const s3Client = new client_s3_1.S3Client({ region: REGION });
// Import required AWS SDK clients and commands for Node.js.
const client_s3_2 = require("@aws-sdk/client-s3");
// Set the parameters
const params = {
    Bucket: "BUCKET_NAME",
    Key: "KEY",
    Body: "BODY", // The content of the object. For example, 'Hello world!".
};
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create an Amazon S3 bucket.
    try {
        const data = yield s3Client.send(new client_s3_2.CreateBucketCommand({ Bucket: params.Bucket }));
        console.log(data);
        console.log("Successfully created a bucket called ", data.Location);
        return data; // For unit tests.
    }
    catch (err) {
        console.log("Error", err);
    }
    // Create an object and upload it to the Amazon S3 bucket.
    try {
        const results = yield s3Client.send(new client_s3_2.PutObjectCommand(params));
        console.log("Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key);
        return results; // For unit tests.
    }
    catch (err) {
        console.log("Error", err);
    }
});
