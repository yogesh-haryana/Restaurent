import React from 'react'
import useStyle from './FooterCSS';
import { Button } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';

function Footer() {
    const classes = useStyle();
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.insideContainer}>
                    <p className={classes.headpara}>location</p>
                    <p className={classes.address}>B 23, Sector - 1 , Noida, Gautam Buddh Nagar, Uttar Pradesh, India </p>
                    <p className={classes.folowus}>follow us</p>
                    <div className={classes.socialHadles}>
                        <FacebookRoundedIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <GoogleIcon />
                    </div>
                    <p className={classes.copyrightHead}><CopyrightTwoToneIcon className={classes.copyright} />2018 privacy policy</p>
                </div>
                <div className={classes.insideContainer}>
                    <p className={classes.contactForm}>contact form</p>
                    <input className={classes.input} placeholder="Enter Your name"></input>
                    <input className={classes.input} placeholder="Enter a valid email address"></input>
                    <textarea className={classes.textarea}></textarea>
                    <Button className={classes.moreButton} variant="outlined">Submit</Button>
                </div>
            </div>
            <div className={classes.bottomContainer}>
                <p className={classes.bottomPara}><a href='something.com'>Website Tamplate</a> is made by <a href='nothing.com'>Yogesh Yaduvanshi</a></p>
            </div>
        </div>
    )
}

export default Footer;
