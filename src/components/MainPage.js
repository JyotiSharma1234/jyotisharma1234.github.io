import React from 'react'
import {
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    seaction:{
        marginTop: 40,
        height: 500,
        border: '2px solid black'
    },
    root:{
        marginTop: 40,
    }
}));

const MainPage = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div id="about" className={classes.seaction}>
                <h1>About Me</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
            </div>
            <div id="skills" className={classes.seaction}>
                <h1>Skills</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
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
                <h1>Contact</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
            </div>
        </div>
        )
}

export default MainPage;