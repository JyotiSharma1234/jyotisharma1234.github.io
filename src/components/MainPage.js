import React from 'react'
import {
    makeStyles,
} from "@material-ui/core";
import ContactMe from './ContactMe';
import Skills from './Skills';
import About from './About';

const useStyles = makeStyles((theme) => ({
    seaction:{
        marginTop: 40,
        minHeight: 700,
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
                <About/>
            </div>
            <div id="skills" className={classes.seaction}>
                <Skills/>
            </div>
            <div id="projects" className={classes.seaction}>
                <h1>Projects</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
            </div>
            <div id="blogs" className={classes.seaction}>
                <h1>Blogs</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
            </div>
            <div id="contact" className={classes.seaction}>
                <ContactMe theme={theme}/>
            </div>
        </div>
        )
}

export default MainPage;