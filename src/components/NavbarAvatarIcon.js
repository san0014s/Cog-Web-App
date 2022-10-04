import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Tooltip, Avatar, Menu, IconButton, MenuItem, Typography } from "@mui/material";
import SessionState from "./SessionState";

export default function NavbarAvatarIcon() {

    // how the menu opens and closes
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // what each button does
    const settings = [
        {display: 'Profile', onClick: () => {
            handleCloseUserMenu()
            navigate('/profile')
        }},
        {display: 'Account', onClick: () => {
            handleCloseUserMenu()
            navigate('/account')
        }},
        {display: 'Dashboard', onClick: () => handleCloseUserMenu()},
        {display: 'Logout', onClick: () => {
            SessionState.setId(-1);
            setAccount();
            handleCloseUserMenu();
            navigate('/')
        }}
    ];

    // handle getting of account data
    const [account, setAccount] = useState();

    useEffect(() => {
        if (SessionState.getId() < 0) {
            return;
        }

        fetch('http://localhost:8080/account/' + SessionState.getId(), { // TODO: make protocol, ip address, and port(?) configurable
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setAccount(data);
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [SessionState.getId()]) // reload the account any time the session id changes

    return <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Manage your profile">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={account && account.name} src={account && account.picture ? 
                    account.picture : "https://cog-web-app-public-assets.s3.amazonaws.com/profile-pictures/default-pfp.jpg"} />
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
        {
            account ? settings.map((setting) => ( // if account is logged in, show all the options
                <MenuItem key={setting.display} onClick={() => setting.onClick()}>
                    <Typography textAlign="center">{setting.display}</Typography>
                </MenuItem> ))
            :  // else, show just the login button
                <MenuItem onClick={() => navigate("/login")}>
                    <Typography textAlign="center">Login</Typography>
                </MenuItem>
        }
        </Menu>
    </Box>

}