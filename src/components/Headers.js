import React from 'react'
import {Link} from 'react-scroll'
import {
    IconButton,
    makeStyles,
    withStyles,
} from "@material-ui/core";
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import ContactIcon from '@material-ui/icons/ContactMailRounded';
import ComputerIcon from '@material-ui/icons/ComputerRounded';
import BlogIcon from '@material-ui/icons/SubjectRounded';
import AppsIcon from '@material-ui/icons/Apps'
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    header:{
        position: 'fixed',
        top: '35%',
        left: 10,
        padding: 10,
        margin: 0,
        listStyle: 'none',
        border: '2px solid blue',
        borderRadius: '40px',
        backgroundColor: 'blue',
    },
    account:{
        color: 'white',
    },
    btn: {
        fontSize: 20,
        '&:hover': {
            color: 'white',
            border: '2px solid white',
        }
    }
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'blue',
    textDecoration: 'bold',
    fontWeight: 600,
    boxShadow: theme.shadows[1],
    padding: 15,
    borderRadius: '4px 20px',
    fontSize: 16,
    border: '2px solid blue',
  },
}))(Tooltip);

const Headers = (props) => {
    const classes = useStyles();

        return (
                <ul className={classes.header}>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true}>
                        <LightTooltip placement="right" title="About Me">
                            <IconButton size='20' className={classes.btn}>
                                <AccountIcon className={classes.account}/>
                            </IconButton>
                        </LightTooltip>
                        </Link>
                    </li>
                    <li>
                        <Link  to="skills" spy={true} smooth={true}>
                            <LightTooltip placement="right" title="Skills">
                                <IconButton size='20' className={classes.btn}>
                                    <ComputerIcon className={classes.account}/>
                                </IconButton>
                            </LightTooltip>
                        </Link>
                    </li>
                    <li>
                        <Link  to="projects" spy={true} smooth={true}>
                            <LightTooltip placement="right" title="Projects">
                                <IconButton size='20' className={classes.btn}>
                                    <AppsIcon className={classes.account}/>
                                </IconButton>
                            </LightTooltip>
                        </Link>
                    </li>
                    <li>
                        <Link  to="blogs" spy={true} smooth={true}>
                            <LightTooltip placement="right" title="Blogs">
                                <IconButton size='20' className={classes.btn}>
                                    <BlogIcon className={classes.account}/>
                                </IconButton>
                            </LightTooltip>
                        </Link>
                    </li>
                    <li>
                        <Link  to="contact" spy={true} smooth={true}>
                            <LightTooltip placement="right" title="Contact Me">
                                <IconButton size='20' className={classes.btn}>
                                    <ContactIcon className={classes.account}/>
                                </IconButton>
                            </LightTooltip>
                        </Link>
                    </li>
                </ul>
        )
}

export default Headers;
