import React, { useState } from "react";
import {
    makeStyles,
    Box,
    Typography, 
} from "@material-ui/core";
import './CustomCss/typing.css'
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
    container: {
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    p: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 20,
    },
}));

const NameSection = (props) => {
    const classes = useStyles();
    return (

        <Box className={classes.container}>
            <Box className={classes.p}>
                <h3>Hello👋, I'm</h3>
            </Box>
            <Box className={classes.p}>
                <span className="name">Jyoti Sharma</span>
            </Box>
            <Box>
                <span className="web-dev">
                    Software Engineer
                </span>
            </Box>
            <Box className="typing_effect">
                <Typewriter
                    options={{
                        strings: ["Explore! Learn! Grow!  repeat..."],
                        autoStart: true,
                        loop:true
                    }}
                    // onInit={(typewriter)=> {
                    //     typewriter
                    //         .typeString("Explore! Learn! Grow!  repeat...")
                    //         .pauseFor(1000)
                    //         .deleteAll()
                    //         .start();
                    //     }}
                        />
            </Box>
        </Box>
    );
};

export default NameSection;
