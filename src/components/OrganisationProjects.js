import React from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import ProjectsData from '../content/ProjectsList'
import './CustomCss/organisation_projects.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNew from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles((theme, props) => ({

    heading:{
        textAlign: 'center',
        fontSize: 32,
        textTransform: 'uppercase',
        marginBottom: 20,
        position: 'relative',
        fontWeight: 'bold',
    },
    image:{
        width: 'auto',
        height: '-webkit-fill-available'
    },
}));

const OrganisationProjects = (props) => {
    const classes = useStyles();
    const { theme } = props;

    return (
        <Box>
            <Box className={classes.heading}>
                Organisation Projects
            </Box>
            <div class="wrapper">
            { ProjectsData.organisationProjectsList.map(function(project, index) {
                return (
                        <div class="profile profile-smallimg">
                            <div class="profile__image"><img src={project.image} alt={project.title} /></div>
                            <div class="profile__info">
                                <h3><a href={project.url}>{project.title}<OpenInNew/></a></h3>
                                <p class="profile__info__extra">{project.description}</p>
                            </div>
                            <div class="profile__stats">
                                { project.technologies.map((tech,index)=>{
                                    return(
                                        <img src={tech} width="40px" height="40px"/>
                                    )
                                })
                                }
                            </div>

                            {/* <div class="profile__cta"><a href={project.url} class="button">Link</a></div> */}
                        </div>
                )
            })}
            </div>
    </Box>
);
};

export default OrganisationProjects;
