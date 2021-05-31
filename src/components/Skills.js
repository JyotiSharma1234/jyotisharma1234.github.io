import React from "react";
import {
    Box,
    makeStyles,
    Typography,
} from "@material-ui/core";
import skillsData from '../content/skillsList'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    skillcard: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '15%',
        marginRight: '15%',
      },
    heading:{
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 20,
        paddingBottom: 20,
        position: 'relative',
    },
}));

const Skills = (props) => {
    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
            <Box className={classes.heading}>
                Tech Stack
            </Box>
            <Box className={classes.skillcard}>
                {skillsData.skillsList.map(function(skill, index){
                    return (
                        <Box margin='5px'>
                            <img  title={skill.title} alt={skill.title} width='80px' height='80px' src={skill.src} />
                            <Typography>
                                {skill.title}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
            <Box className={classes.heading}>
                Tools and Technologies
            </Box>
            <Box className={classes.skillcard}>
                {skillsData.toolList.map(function(skill, index){
                    return (
                        <Box margin='5px'>
                            <img  title={skill.title} alt={skill.title} width='80px' height='80px' src={skill.src} />
                            <Typography>
                                {skill.title}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
};

export default Skills;
