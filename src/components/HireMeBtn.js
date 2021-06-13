import {React, useEffect, useState, useRef} from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import './CustomCss/btn.scss'
import './CustomCss/link.scss'
import { Flipper, Flipped } from "react-flip-toolkit";
import JyotiResume from '../content/JyotiResume.pdf'
const useStyles = makeStyles((theme) => ({
}));

const HireMeBtn = (props) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    
    function toggleState() {
        if (isOpen) return;
        setIsOpen(!isOpen);
        ref.current.blur();
    }
    
    function keydownHandler(event) {
        if (event.key === "Enter") {
        toggleState();
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    };
    return(
        <Box display="flex" justifyContent='center' alignItems="center">
            <Flipper>
            {isOpen ? (
                <Flipped flipId="wrapper">
                <div
                    ref={ref}
                    tabIndex={isOpen ? false : 0}
                    role="dialog"
                    className={`dialog animated-in`}
                    onClick={toggleState}
                    onKeyDown={keydownHandler}
                >
                    <p className="title content">Are you hiring?</p>
                    <p class="content">
                    
                    Thanks for reaching out! <br/><br/>
                    Currently I not looking for a new opportunity.
                    If I find myself looking to make a change in the future, I’ll be sure to get in touch.
                    Do let me know about you..
                    <br/>
                        Stay connected! Stay safe!
                    </p>

                    <p>
                        You can get my &nbsp;
                        <a href={JyotiResume} download>
                            <strong> resume </strong>
                            <svg viewBox="0 0 70 36">
                                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                            </svg>
                        </a>
                        &nbsp; here.
                    </p>
                    <button
                    className="button secondary content"
                    onClick={(closeHandler) => setIsOpen(false)}
                    >
                    close
                    </button>
                    {/* <button
                    className="button primary content"
                    onClick={(closeHandler) => setIsOpen(false)}
                    >
                        Close
                    </button> */}
                </div>
                </Flipped>
            ) : (
                <Flipped flipId="wrapper">
                <div
                    ref={ref}
                    tabIndex={0}
                    role="button"
                    className="button primary"
                    onClick={toggleState}
                    onKeyDown={keydownHandler}
                >
                    <Flipped flipId="action">
                    <span className="action">Hire Me</span>
                    </Flipped>
                </div>
                </Flipped>
                )}
            </Flipper>
        </Box>
    )
}

export default HireMeBtn;