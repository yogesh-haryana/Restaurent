import React from 'react'
import useStyles from './Section1CSS';
import IcecreamIcon from '@mui/icons-material/Icecream';
import { Button } from '@mui/material';

function Section1() {
    const classes = useStyles();
  return (
    <div className={classes.sectionOne}>
        <div className={classes.backgroundContainer}>
            <div className={classes.ourPassion}>
                <p className={classes.passionText}>Our Passion For Delicious Food</p>
            </div>
        </div>
        <div classname={classes.menuContainer}>
            <div className={classes.menu}>
                <IcecreamIcon className={classes.hatImg} />
                <p className={classes.menuHeading}>Menu</p>
            </div>
        </div>
        <div className={classes.flexRow}>
            <div className={classes.infoDiv}>
                <p className={classes.infoNumber}>01</p>
                <p className={classes.infoHead}>high quality</p>
                <p className={classes.infoPara}>We serve the highest quality of preapred meal at a great value in a home-like friendly environment</p>
                <Button className={classes.moreButton} variant="outlined">More</Button>
            </div>
            <div className={classes.infoDiv}>
                <p className={classes.infoNumber}>02</p>
                <p className={classes.infoHead}>best recipies</p>
                <p className={classes.infoPara}>We serve the highest quality of preapred meal at a great value in a home-like friendly environment</p>
                <Button className={classes.moreButton} variant="outlined">More</Button>
            </div>
            <div className={classes.infoDiv}>
                <p className={classes.infoNumber}>03</p>
                <p className={classes.infoHead}>real taste</p>
                <p className={classes.infoPara}>We serve the highest quality of preapred meal at a great value in a home-like friendly environment</p>
                <Button className={classes.moreButton} variant="outlined">More</Button>
            </div>
        </div>
       
    </div>
  )
}

export default Section1;
