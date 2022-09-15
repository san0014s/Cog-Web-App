import React , {useEffect, useState} from 'react';
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import MyS3Client from '../components/MyS3Client';
import GetS3Object from './GetS3Object';

// base functionality pulled from example program here: https://github.com/Namyalg/Upload-to-S3-from-React/blob/main/src/Upload.js

// a React functional component, used to create a simple upload input and button

const Upload = () => {

    const thing = async () => {
        var thing = await GetS3Object("", "");
        console.log(thing);
    }

    useEffect(() => {

        thing()
        
        // MyS3Client.send(
        //     new ListObjectsCommand({ Delimiter: "/", Bucket: process.env.REACT_APP_BUCKET_NAME })
        // ).then((response) => {
        //     console.log(response)
        // }).catch((error) => {
        //     console.error(error)
        // })
    }, []);

    return <div>
    </div>
}

export default Upload;