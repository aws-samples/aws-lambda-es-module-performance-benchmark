/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/

console.log("AWS_LAMBDA_INITIALIZATION_TYPE: " + process.env.AWS_LAMBDA_INITIALIZATION_TYPE); // provisioned concurrency or on-demand

import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES module import
const ssmClient = new SSMClient();
const input = { "Name": "/configItem" }
const command = new GetParameterCommand(input);
const parameter = await ssmClient.send(command); // top-level await

export async function handler() {
    
    // In commonjs, require is defined. In ES it is not.
    if (typeof require == "function") {
        console.log("I am a CommonJS module");
    } else {
        console.log("I am a ES module");
    };

    const response = {
        statusCode: 200,
        "body": parameter.Parameter.Value
    };
    return response;
};
