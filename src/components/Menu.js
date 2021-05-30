import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,
    Switch,
    Box
}from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-scroll'
import {Brightness6} from '@material-ui/icons'
import Logo from '../images/logo.png'
import NightBG from '../images/nightbg.png'
import DayBG from '../images/daybg.jpg'

import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import ContactIcon from '@material-ui/icons/ContactMailRounded';
import ResumeIcon from '@material-ui/icons/Description';
import StarIcon from '@material-ui/icons/Star'
import ComputerIcon from '@material-ui/icons/ComputerRounded';
import BlogIcon from '@material-ui/icons/SubjectRounded';
import AppsIcon from '@material-ui/icons/Apps'
const useStyles = makeStyles({
    list: {
        width: 250,
        backgroundColor: 'rgba(0,0,0,0.0)'
    },
    fullList: {
        width: 'auto',
    },
    dayMenuIcon: {
        position: 'fixed',
        top: 10,
        left: 5,
        padding: 0,
    },
    nightMenuIcon: {
        position: 'fixed',
        top: 10,
        left: 5,
        padding: 0,
        color: 'white'
    },
    listItem: {
        margin: 5,
        opacity: 1,
        width: '85%',
        border: '2px solid #fff',
        borderRadius: '0px 40px 40px 0px',   
    },
    flex: {
        display: 'flex',
    },
    profileSection: {
        padding: 0,
    },
    profile:{
        display: "flex",
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        height: '180px',

    },
    nightProfile: {
        backgroundImage: `url(${NightBG})`,
    },
    dayProfile: {
        backgroundImage: `url(${DayBG})`,
    },
    logo: {
        borderRadius: 15,
        alignItems: 'center'
    },
    day:{
        color: '#02a1f0',
    },
    night: {
        color: '#0c0c82',
    }
});

export default function Menu(props) {

    const classes = useStyles();
    const {theme, toggleTheme} = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsMenuOpen( open );
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <ListItem className={classes.profileSection}>
                <Box className={clsx(classes.profile, theme === 'light' ? classes.dayProfile : classes.nightProfile)}>
                    <Box padding='10px' alignContent="center">
                        <img className={classes.logo} alt="JS Logo" src={Logo} height='100px' width="100px"/>
                    </Box>
                    <Box>
                        Jyoti Sharma
                    </Box>
                </Box>
            </ListItem>
            <Divider />

            <ListItem className={classes.listItem}>
                <Link className={classes.flex} activeClass="active" to="home" spy={true} smooth={true}>
                    <ListItemIcon>
                    <HomeIcon className={theme === 'light' ? classes.day : classes.night}/>
                    </ListItemIcon>
                    <ListItemText className={theme === 'light' ? classes.day : classes.night}
                        primary="Home">
                    </ListItemText>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link className={classes.flex} activeClass="active" to="about" spy={true} smooth={true}>
                    <ListItemIcon>
                    <AccountIcon className={theme === 'light' ? classes.day : classes.night}/>
                    </ListItemIcon>
                    <ListItemText className={theme === 'light' ? classes.day : classes.night}
                        primary="Abount Me">
                    </ListItemText>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link className={classes.flex} activeClass="active" to="skills" spy={true} smooth={true}>
                    <ListItemIcon>
                    <ComputerIcon className={theme === 'light' ? classes.day : classes.night}/>
                    </ListItemIcon>
                    <ListItemText className={theme === 'light' ? classes.day : classes.night}
                        primary="Skills">
                    </ListItemText>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link className={classes.flex} activeClass="active" to="projects" spy={true} smooth={true}>
                    <ListItemIcon>
                        <AppsIcon className={theme === 'light' ? classes.day : classes.night}/>
                    </ListItemIcon>
                    <ListItemText className={theme === 'light' ? classes.day : classes.night}
                        primary="Projects">
                    </ListItemText>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    <ResumeIcon className={theme === 'light' ? classes.day : classes.night}/>
                </ListItemIcon>
                <ListItemText className={theme === 'light' ? classes.day : classes.night}
                    primary="Resume">
                </ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link className={classes.flex} activeClass="active" to="blogs" spy={true} smooth={true}>
                    <ListItemIcon>
                    <BlogIcon className={theme === 'light' ? classes.day : classes.night}/>
                    </ListItemIcon>
                    <ListItemText className={theme === 'light' ? classes.day : classes.night}
                        primary="Blogs">
                    </ListItemText>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Link className={classes.flex} activeClass="active" to="certificates" spy={true} smooth={true}>
                    <ListItemIcon>
                    <StarIcon className={theme === 'light' ? classes.day : classes.night}/>
                    </ListItemIcon>
                    <ListItemText className={theme === 'light' ? classes.day : classes.night}
                        primary="Certificates">
                    </ListItemText>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link className={classes.flex} activeClass="active" to="contact" spy={true} smooth={true}>
                    <ListItemIcon>
                    <ContactIcon className={theme === 'light' ? classes.day : classes.night}/>
                    </ListItemIcon>
                    <ListItemText className={theme === 'light' ? classes.day : classes.night}
                        primary="Contact">
                    </ListItemText>
                </Link>
            </ListItem>
        </List>
        <Divider light={true}/>
        <List>
            <ListItem>
                <ListItemIcon className={theme === 'light' ? classes.day : classes.night}>
                    <Brightness6 />
                </ListItemIcon>
                <ListItemText className={theme === 'light' ? classes.day : classes.night} primary="Dark mode" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        color="primary"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
        </div>
    );

    return (
        <div>
            <div>
                <IconButton className={theme === 'light' ? classes.dayMenuIcon : classes.nightMenuIcon} onClick={toggleDrawer('left', true)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer className={classes.drawer} anchor={'left'} open={isMenuOpen} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </div>
        </div>
    );
}