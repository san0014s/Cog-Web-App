import React , {useEffect, useState} from 'react';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import MyS3Client from '../components/MyS3Client';

// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html

export default function UploadToS3Button({directory, objectKey, onUpload}) {

    const uploadContent = (objectContent) => {
        if (
            objectContent === undefined
            || directory === undefined
            || objectKey === undefined
        ) {
            return;
        }

        MyS3Client.send(new PutObjectCommand({
            Bucket: process.env.REACT_APP_BUCKET_NAME,
            Key: `${directory}/${objectKey}`,
            Body: objectContent
        })).then((response) => {
            console.log(response)
            if (onUpload) {
                onUpload();
            }
        });
    }

    return <div>
        <input
            type="file"
            name="myImage" 
            accept="image/*"
            onChange={(e) => uploadContent(e.target.files[0])}
        />
    </div>
}