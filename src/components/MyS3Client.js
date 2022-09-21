import { S3Client } from "@aws-sdk/client-s3";

// how to use: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html

var MyS3Client = new S3Client({
    region: process.env.REACT_APP_REGION,
    credentials: {
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
    }
  });

export default MyS3Client;