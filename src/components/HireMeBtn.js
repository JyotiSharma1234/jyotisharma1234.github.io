import {React, useEffect, useState, useRef} from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import './CustomCss/btn.scss'
import { Flipper, Flipped } from "react-flip-toolkit";

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
                    You can get my <strong>Resume</strong> here.
                    <br/>
                        Stay connected! Stay safe!
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