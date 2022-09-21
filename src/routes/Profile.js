import React, { useEffect, useState } from "react"
import SessionState from "../components/SessionState"

export default function Profile() {

    const [account, setAccount] = useState();

    useEffect(() => {
        if (SessionState.getId() < 0) {
            return;
        }

        fetch('http://localhost:8080/Account/' + SessionState.getId(), { // TODO: make protocol, ip address, and port(?) configurable
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setAccount(data);
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [])

    if (account) {
        return <>
            <h1>{account.name}</h1>
            <h4>@{account.username}</h4>
            <img alt={account.name}
                src={account.picture ? account.picture : "https://cog-web-app-public-assets.s3.amazonaws.com/profile-pictures/default-pfp.jpg"}/>
            <p>Joined: {account.joinDate}</p>
            <p>Interests: {account.interests}</p>
        </>
    }

    return <>
        <h1>Oops! Looks like you aren't logged in...</h1>
        <h4>Try visiting the <a href="/login">login</a> page to sign in to your account</h4>
    </>

}