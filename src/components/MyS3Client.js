import { S3Client } from "@aws-sdk/client-s3";

var MyS3Client = new S3Client({
    region: process.env.REACT_APP_REGION,
    credentials: {
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
    }
  });

export default MyS3Client;