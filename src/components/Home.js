import React from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import HireMe from './HireMeBtn'

const useStyles = makeStyles((theme) => ({
    root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
    }
}));

const Home = (props) => {
    const classes = useStyles();

    return(
        <Box className={classes.root}>
                <h1>Jyoti Sharma</h1>
            <HireMe/>

        </Box>
    )
}

export default Home;