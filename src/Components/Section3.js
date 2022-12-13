import React from 'react'
import useStyle from './Section3CSS';
import chef1 from '../assets/chef1.webp'
import chef2 from '../assets/chef2.webp'
import chef3 from '../assets/chef3.webp'
import chef4 from '../assets/chef4.webp'


function Section3() {
    const classes = useStyle();
    return (
        <div className={classes.sectionThree}>
            <div className={classes.backgroundContainer}>
                <div className={classes.ourPassion}>
                    <p className={classes.passionText}>Excellent Services & Good Prices</p>
                </div>
            </div>
            <div classname={classes.menuContainer}>
                <div className={classes.menu}>
                    <p className={classes.menuHeading}>Our Team</p>
                </div>
                <div className={classes.sampleDiv}>
                    <p className={classes.sampleText}>Sample text , lorem ispum deroem simute california new york london delhi india east coast to west coast</p>
                </div>
            </div>
            <div className={classes.teamMembers}>
                <div className={classes.member}>
                    <div className={classes.imgHolder}>
                        <img src={chef1} alt='' ></img>
                    </div>
                    <p className={classes.memberName}>Berlin</p>
                    <p className={classes.memberPosition}>Associate</p>
                </div>
                <div className={classes.member}>
                    <div className={classes.imgHolder}>
                        <img src={chef2} alt='' ></img>
                    </div>
                    <p className={classes.memberName}>Denver</p>
                    <p className={classes.memberPosition}>Manager</p>
                </div>
                <div className={classes.member}>
                    <div className={classes.imgHolder}>
                        <img src={chef3} alt='' ></img>
                    </div>
                    <p className={classes.memberName}>Tokyo</p>
                    <p className={classes.memberPosition}>CEO</p>
                </div>
                <div className={classes.member}>
                    <div className={classes.imgHolder}>
                        <img src={chef4} alt='' ></img>
                    </div>
                    <p className={classes.memberName}>Nairobi</p>
                    <p className={classes.memberPosition}>co-host</p>
                </div>
            </div>
        </div>
    )
}

export default Section3;
