import React from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
}));

const Home = (props) => {
    const classes = useStyles();

    return(
        <Box display="flex" flexDirection="row" alignItems="center">
                <h1>Jyoti Sharma</h1>
        </Box>
    )
}

export default Home;