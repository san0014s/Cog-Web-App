import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SessionState from "../components/SessionState";
import UploadToS3Button from "../s3/UploadToS3Button";

export default function ProfileEdit() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [profile, setProfile] = useState({})
    useEffect(() => {
        if (state !== null) {
            setProfile(state.profile);
        }
    }, [state]); // Set profile based on passed state 

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(profile);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile)
        })
        .then((response) => {
            console.log(response);
        })
    };

    const onImageUpload = () => {
        setProfile({
            ...profile,
            picture: `https://cog-web-app-public-assets.s3.amazonaws.com/profileImages/${SessionState.getId()}.png`
        })
    }

    if (profile) {
        return <Fragment>
            <h1>Edit profile</h1>
            <form onSubmit={(e) => { onSubmit(e) }}>
                <label>Preferred Name:</label>
                <br />
                <input
                    type="text"
                    value={profile.name}
                    required
                    onChange={(e)=> setProfile({...profile, name: e.target.value})} 
                />
                <br />

                <label>Date of Birth:</label>
                <br />
                <input 
                    type="date" 
                    value={profile.birthDate} 
                    min="1900-01-01" 
                    required 
                    onChange={(e) => setProfile({...profile, birthDate: e.target.value})}
                />
                <br />
                
                <label>Interests:</label>
                <br />
                <input 
                    type="text" 
                    value={profile.interests} 
                    onChange={(e) => setProfile({...profile, interests: e.target.value})}
                />
                <br />

                <UploadToS3Button
                    directory={'profileImages'}
                    objectKey={`${SessionState.getId()}.png`}
                    onUpload={() => onImageUpload()}
                />
                
                <input type="submit" value="Submit" />
            </form>
        </Fragment>
    }

    return <></>
}