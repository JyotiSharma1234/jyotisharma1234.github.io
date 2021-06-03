import React, { useState } from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import certificatesList from '../content/CertificateList'
import Lightbox from 'react-lightbox-component';
import "react-lightbox-component/build/css/index.css";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20
    },
    heading:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 20,
        position: 'relative',
        color: '#fff',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    image: {
        height: 350,
        width: 400,
        padding: 10,
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.03)',
            boxShadow: 'rgba(224, 224, 224) 0px 0px 15px',
        }
    },
}));


const Certificates = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box>
                <Box className={classes.heading}>
                    Certificates
                </Box>
                <Box className={classes.wrapper}>
                    <Lightbox
                        thumbnailWidth='350px'
                        thumbnailHeight='300px'
                        images={certificatesList}
                        showImageModifiers={false}
                        renderImageFunc={(idx, image, toggleLightbox, width, height) => {
                            return (
                            <img
                            key={idx}
                            src={image.src}
                            alt={image.title}
                            className={classes.image}
                            style={{width: width, height: height}}
                            onClick={toggleLightbox.bind(null, idx)} />
                            )
                            }}/>
                </Box>
            </Box>
        </Box>
    );
};

export default Certificates;
