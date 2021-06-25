import React from "react";
import {
    makeStyles,
    Box, Typography,
} from "@material-ui/core";
import NameSection from "./NameSection";

import JyotiPic from '../images/jyotiPic.jpg'
import TechBg from '../images/techbg2.png'
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
        justifyContent: 'center',
        ['@media (min-width:780px)']: {
            display: 'flex',
            flexWrap: 'nowrap',
        },
    },
    pic:{
        borderRadius: 60,
        backgroundSize: 'cover',
    },
    image: {
        borderRadius: 60,
        height: 450,
        width: 350,
        objectFit: 'cover',
    },
    content: {
        textAlign: 'left',
        paddingLeft: 20,
        ['@media (min-width:780px)']: {
            paddingLeft: 10
        },
    }

}));

const Home = (props) => {
    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Box className={classes.container}>
                <NameSection/>
            </Box>
        </Box>
    )
}

export default Home;