// TopAppBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import styles from './TopBar.module.css';

const TopAppBar = ({ title, userProfileImage }) => {
    return (
    <AppBar position="sticky" elevation={0} className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
        <div className={styles.leftIcons}>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
        </div>

        <Typography variant="h6" component="div" className={styles.title}>
            {title}
        </Typography>

        <div className={styles.rightIcons}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
        </div>
        </Toolbar>
    </AppBar>
    );
};

export default TopAppBar;
