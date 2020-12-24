import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopIcon from '@material-ui/icons/Loop';



function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
               <p>Album and song details</p>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="play_icon" />
                <SkipNextIcon className="footer_icon" />
                <LoopIcon className="footer_green" />
            </div>

            <div className="footer_right">
                <p>Volume Controls</p>
            </div>
        </div>
    )
}

export default Footer;