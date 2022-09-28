import React , {useEffect, useState} from 'react';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import MyS3Client from '../components/MyS3Client';

// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html

export default function UploadToS3Button({targetDirectory, setObjectKey}) {

    const [objectContent, setObjectContent] = useState();

    useEffect(() => {
        console.log(objectContent);
    }, [objectContent])

    const onSubmit = () => {
        if (objectContent === undefined) {
            console.log("no objectContent");
            return;
        }

        MyS3Client.send(new PutObjectCommand({
            Bucket: process.env.REACT_APP_BUCKET_NAME,
            Key: crypto.randomUUID(),
            Body: objectContent
        }))
    }

    return <div>
        <input type="file" name="myImage"  accept="image/*" onChange={(e) => setObjectContent(e.target.files[0])}/>
        <br></br>
        <button onClick={onSubmit}>Submit</button>
    </div>
}