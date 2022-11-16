import { GetObjectCommand } from "@aws-sdk/client-s3";
import MyS3Client from "../components/MyS3Client";

export default async function GetS3Object(bucket, key) {

    return MyS3Client.send(new GetObjectCommand({
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Key: "test/resume.pdf"
    }))

}