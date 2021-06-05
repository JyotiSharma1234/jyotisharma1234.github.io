import { React, useEffect, useState } from 'react'
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
import {Brightness6} from '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home';

import Menu from './Menu'
const useStyles = makeStyles((theme) => ({
    header:{
        position: 'fixed',
        top: '35%',
        left: 10,
        padding: 10,
        margin: 0,
        listStyle: 'none',
        border: '2px solid #148fdb',
        borderRadius: '40px',
        backgroundColor: '#148fdb',
    },
    icon:{
        color: 'white',
    },
    btn: {
        fontSize: 20,
        '&:hover': {
            color: 'white',
            border: '2px solid white',
            background: 'linear-gradient(45deg, #20FCE2, #0679DF)'
        }
    },
    menu: {
        position: 'fixed',
        top: 4,
        left: 0,
        padding: 18,
        margin: 0,
        listStyle: 'none',
        border: '2px solid #148fdb',
        backgroundColor: '#148fdb',
        borderRadius: '0px 20px 20px 0px',

    }
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'white',
    color: '#148fdb',
    textDecoration: 'bold',
    fontWeight: 600,
    boxShadow: theme.shadows[1],
    padding: 15,
    borderRadius: '4px 20px',
    fontSize: 16,
    border: '2px solid #148fdb',
  },
}))(Tooltip);

const Headers = (props) => {
    const classes = useStyles();
    const {toggleTheme, theme} = props

    const [isMobile, setIsMobile] = useState(window.innerWidth < 720)

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

        return (
            <>
                {!isMobile &&
                    <ul className={classes.header}>
                        <li>
                            <Link to="home" spy={true} smooth={true}>
                            <LightTooltip placement="right" title="Home">
                                <IconButton className={classes.btn}>
                                    <HomeIcon className={classes.icon}/>
                                </IconButton>
                            </LightTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true}>
                            <LightTooltip placement="right" title="About Me">
                                <IconButton className={classes.btn}>
                                    <AccountIcon className={classes.icon}/>
                                </IconButton>
                            </LightTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link  to="skills" spy={true} smooth={true}>
                                <LightTooltip placement="right" title="Skills">
                                    <IconButton className={classes.btn}>
                                        <ComputerIcon className={classes.icon}/>
                                    </IconButton>
                                </LightTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" spy={true} smooth={true}>
                                <LightTooltip placement="right" title="Projects">
                                    <IconButton className={classes.btn}>
                                        <AppsIcon className={classes.icon}/>
                                    </IconButton>
                                </LightTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link  to="blogs" spy={true} smooth={true}>
                                <LightTooltip placement="right" title="Blogs">
                                    <IconButton className={classes.btn}>
                                        <BlogIcon className={classes.icon}/>
                                    </IconButton>
                                </LightTooltip>
                            </Link>
                        </li>
                        <li>
                            <Link  to="contact" spy={true} smooth={true}>
                                <LightTooltip placement="right" title="Contact Me">
                                    <IconButton className={classes.btn}>
                                        <ContactIcon className={classes.icon}/>
                                    </IconButton>
                                </LightTooltip>
                            </Link>
                        </li>
                        <li>
                            <LightTooltip placement="right" title={theme === 'light' ? "Dark Mode" : 'Light Mode'}>
                                <IconButton onClick={toggleTheme} className={classes.btn}>
                                    <Brightness6 className={classes.icon}/>
                                </IconButton>
                            </LightTooltip>
                        </li>
                </ul>
            }
                <div className={isMobile ? '' :classes.menu}>
                    <Menu theme={theme} toggleTheme={toggleTheme}/>
                </div>
            </>
        )
}

export default Headers;
