import React from 'react'
import {
    makeStyles,
} from "@material-ui/core";
import ContactMe from './ContactMe';
import Skills from './Skills';
import About from './About';
import Blogs from './Blogs';
import Certificates from './Certificates'
import Home from './Home';
import Projects from './Projects';
const useStyles = makeStyles((theme) => ({
    seaction:{
        minHeight: 700,
        padding: 30,
    },
    root:{
        marginTop: 40,
    }
}));

const MainPage = (props) => {
    const classes = useStyles();
    const { theme } = props;

    return (
        <div className={classes.root}>
            <div id="about" className={classes.seaction}>
                <Home theme={theme}/>
            </div>
            <div id="about" className={classes.seaction}>
                <About theme={theme}/>
            </div>
            <div id="skills" className={classes.seaction}>
                <Skills theme={theme}/>
            </div>
            <div id="projects" className={classes.seaction}>
                <Projects/>
            </div>
            <div id="blogs" className={classes.seaction}>
                <Blogs theme={theme}/>
            </div>
            <div id="certificates" className={classes.seaction}>
                <Certificates theme={theme}/>
            </div>
            <div id="contact" className={classes.seaction}>
                <ContactMe theme={theme}/>
            </div>
        </div>
        )
}

export default MainPage;