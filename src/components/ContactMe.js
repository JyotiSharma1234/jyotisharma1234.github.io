import React from "react";
import {
    Box,
    Link,
    makeStyles,
    IconButton,
    Typography
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        paddingBottom: 20,
        position: 'relative',
    },
    p: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 20,
        marginBottom: 20,
    },
    day:{
        color: '#000',
    },
    night: {
        color: '#fff',
    },
    glowBorder: {
        outline: 'none',
        borderColor: '#9ecaed',
        boxShadow: '0 0 10px #9ecaed',
    }
}));

const ContactMe = (props) => {
    const classes = useStyles();
    const { theme } = props;

    return (
        <Box className={classes.root}>
            <Box className={classes.heading}>
                Get in Touch
            </Box>
            <Box>
                <Typography className={classes.p}>
                    Interested in learning more about me, my work or how we can collaborate on an upcoming project?
                </Typography>

                <Typography className={classes.p}>
                    Feel free to reach out anytime, I would be more than happy to chat.
                </Typography>
            </Box>

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
    );
};

export default ContactMe;
