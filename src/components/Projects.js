import React from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import ProjectsData from '../content/ProjectsList'
import './CustomCss/projects.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNew from '@material-ui/icons/OpenInNew'
import OrganisationProjects from './OrganisationProjects'
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
    more: {
        padding: 16,    
    }
}));

const Projects = (props) => {
    const classes = useStyles();
    const { theme } = props;

    return (
        <Box id="projects">
            <Box className={classes.heading}>
                Projects
            </Box>
            { ProjectsData.personalProjectsList.map(function(project, index) {
                return (
                    <div key={index} class={(index%2 == 0) ? "blog-card": "blog-card alt"} className={classes.grey}>
                        <div class="meta">
                            <Box class="photo">
                                <img className={classes.image} height='300px' width='392px' title={project.title} src={project.image}/>
                            </Box>
                            <ul class="details">
                                <li className="author"><a href="#">{project.title}</a></li>
                                {/* <li class="date">Aug. 24, 2015</li> */}
                                <li className="tags">
                                    <div className="technologies">
                                    { project.technologies.map((tech,index)=>{
                                        return(
                                            <img src={tech} width="40px" height="40px"/>
                                        )
                                    })
                                    }
                                    </div>
                                {/* <ul>
                                    <li><a href="#">{index}</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul> */}
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1>{project.title}</h1>
                            <h2>{project.type}</h2>
                            <p> {project.description}</p>
                            <div>
                                {/* <div class="technologies">
                                { project.technologies.map((tech,index)=>{
                                    return(
                                        <img src={tech} width="40px" height="40px"/>
                                    )
                                })
                                }
                                </div> */}
                                <p className="read-more">
                                    <a href={project.githubLink} title="Github link" target="_blank"><GitHubIcon/></a>
                                    {project.url && <a href={project.url} title="Demo Link" target="_blank"><OpenInNew/></a>}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className={classes.more}>
                More coming soon...
            </div>

            {/* <OrganisationProjects/> */}
        </Box>
    );
};

export default Projects;
