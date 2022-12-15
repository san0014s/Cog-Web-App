import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
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
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile)
        })
        .then(() => {
            navigate("/profile")
        })
    };

    const onImageUpload = () => {
        setProfile({
            ...profile,
            picture: `https://cog-web-app-public-assets.s3.amazonaws.com/profileImages/${SessionState.getId()}.png`
        })
    }

    if (profile) {
        return <div style={{backgroundColor: '#fdf5df', paddingBottom: '100vh'}}>
            <Container style={{paddingTop: '10px', maxWidth: '95vw'}}>
                <h1>Edit profile</h1>
                <br /><br />

                <form onSubmit={(e) => { onSubmit(e) }}>
                    <label>Preferred Name:</label>
                    <br />
                    <input
                        type="text"
                        value={profile.name}
                        required
                        onChange={(e)=> setProfile({...profile, name: e.target.value})} 
                    />
                    <br /><br />

                    <p>Upload new Profile Picture:</p>
                    <img 
                        src={profile.picture ? profile.picture : "https://cog-web-app-public-assets.s3.amazonaws.com/profile-pictures/default-pfp.jpg"}
                        style={{ height: '150px', width: '150px' }}
                        alt="current profile pic"
                    />
                    <UploadToS3Button
                        directory={'profileImages'}
                        objectKey={`${SessionState.getId()}.png`}
                        onUpload={() => onImageUpload()}
                    />
                    <br /><br />

                    <label>Date of Birth:</label>
                    <br />
                    <input 
                        type="date" 
                        value={profile.birthDate} 
                        min="1900-01-01" 
                        required 
                        onChange={(e) => setProfile({...profile, birthDate: e.target.value})}
                    />
                    <br /><br />
                    
                    <label>Interests:</label>
                    <br />
                    <input 
                        type="text" 
                        value={profile.interests} 
                        onChange={(e) => setProfile({...profile, interests: e.target.value})}
                    />
                    <br /><br />
                    
                    <input type="submit" value="Submit" />
                    <button 
                        onClick={() => { navigate('/profile') }}
                        style={{ marginLeft: '10px' }}
                    >
                        Cancel
                    </button>
                </form>
            </Container>
        </div>
    }

    return <></>
}