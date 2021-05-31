import React from "react";
import {
    makeStyles,
    Typography,
    Box,
} from "@material-ui/core";
import MaterialLink from '@material-ui/core/Link'
import {Link} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
        marginRight: '10%',
        marginLeft: '10%',
        display: 'inline-block',
    },
    heading:{
        textAlign: 'center',
        fontSize: 32,
        textTransform: 'uppercase',
        marginBottom: 20,
        paddingBottom: 20,
        position: 'relative',
    },
    p: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    link:{
        color: 'inherit',
        fontWeight: 'bold',
    }

}));

const About = (props) => {
    const classes = useStyles();

    return (
                <Box id="about" className={classes.root}>
                    <Box className={classes.heading}>
                        Me talking about myself...
                    </Box>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        Hello, I am Jyoti Sharma, a web developer, post graduated in Computer Science from <MaterialLink className={classes.link} href="https://www.fergusson.edu/" target='_blank'> Fergusson College</MaterialLink>, Pune ,India.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        I am <MaterialLink href="https://ugcnet.nta.nic.in/" target="_blank" className={classes.link}>UGC-NET</MaterialLink> qualified, that means I am officially eligible for being an assistant professor anywhere in India.
                        Also, I am HTET (PGT) qualified, eligible for PGT teacher in Haryana, India.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        I like to use my skills to solve problems, try new stuffs. If not working, unlearn things, try again is my way.
                        I like to play with code.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        Apart from coding and teaching, I am passionate about drawing and calligraphy too.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        I started my career as a software Engineer in Jan 2018,<br/>
                        Have a look at my past <Link className={classes.link} to="projects" spy={true} smooth={true}>projects</Link>, and feel free to reach out with any questions.
                    </Typography>
                    <Typography variant="body2" className={classes.p} gutterBottom>
                        I strongly belives in <br/><b>"Making knowledge to stand out of crowd"</b>. <br/>
                    </Typography>
                </Box>
    );
};

export default About;
