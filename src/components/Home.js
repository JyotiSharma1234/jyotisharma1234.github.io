import React from "react";
import {
    makeStyles,
    Box,
    Link,
    IconButton,
} from "@material-ui/core";
import NameSection from "./NameSection";
import TechBg from '../images/techbg2.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        // animation: 'fadeIn 2s ease-out both',
        backgroundImage: `url(${TechBg})`,
        backgroundSize: 'cover',
        height: '100vh',
    },
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        ['@media (min-width:780px)']: {
            display: 'flex',
            flexWrap: 'nowrap',
        },
    },
    day:{
        color: '#000',
    },
    night: {
        color: '#fff',
    },
}));

const Home = (props) => {
    const classes = useStyles();
    const {theme} = props
    return(
        <Box className={classes.root}>
            <Box className={classes.container}>
                <NameSection/>
                <Box marginTop='10'>
                    <div>
                        <Link href="mailto:sjyoti4321@gmail.com" className={classes.link} target="_blank">
                            <IconButton >
                                <MailIcon className={theme === 'light' ? classes.day : classes.night}/>
                            </IconButton>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jyoti-sharma8642/" className={classes.link} target="_blank">
                            <IconButton >
                                <LinkedInIcon className={theme === 'light' ? classes.day : classes.night}/>
                            </IconButton>
                        </Link>
                        <Link href="https://github.com/JyotiSharma1234" className={classes.link} target="_blank">
                            <IconButton >
                                <GitHubIcon className={theme === 'light' ? classes.day : classes.night}/>
                            </IconButton>
                        </Link>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;