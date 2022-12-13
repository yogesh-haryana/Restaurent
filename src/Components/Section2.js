import React from 'react'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import useStyles from './Section2CSS';
import salads from '../assets/salads.jpg';
import platters from '../assets/platters.jpg';
import seaFood from '../assets/seaFood.jpg';
import vegan from '../assets/vegan.jpg';
import pizza from '../assets/pizza.jpg'


function Section2() {
    const classes = useStyles();

    return (
        <div className={classes.sectionTwo}>
            <div className={classes.backgroundContainer}>
                <div className={classes.catering}>
                    <p className={classes.cateringHead}>Catering</p>
                    <p className={classes.order}>Please call atleast 24 hours in advance for catering orders.</p>

                    <div className={classes.foodType}>
                        <div className={classes.foodContent}>
                            <div>
                                <img src={salads} alt='salads' ></img>
                            </div>
                            <p className={classes.itemname}>fresh salads</p>
                        </div>
                        <div className={classes.foodContent}>
                            <div>
                                <img src={platters} alt='salads' ></img>
                            </div>
                            <p>party platters</p>
                        </div>
                        <div className={classes.foodContent}>
                            <div>
                                <img src={seaFood} alt='salads' ></img>
                            </div>
                            <p>sea food</p>
                        </div>
                        <div className={classes.foodContent}>
                            <div>
                                <img src={vegan} alt='salads' ></img>
                            </div>
                            <p>vegan dessearts</p>
                        </div>
                        <div className={classes.foodContent}></div>
                    </div>
                </div>
            </div>
            <div classname={classes.menuContainer}>
                <div className={classes.menu}>
                    <MenuBookTwoToneIcon className={classes.hatImg} />
                    <p className={classes.menuHeading}>Our Menu</p>
                </div>
                <div className={classes.flexRow}>
                    <div className={classes.infoDiv}>
                        <p className={classes.infoHead}>pizza</p>
                        <p className={classes.infoPara}>We serve the highest quality of preapred meal at a great value in a home-like friendly environment</p>
                        <img className={classes.menupics} src={pizza} alt="alt"></img>
                    </div>
                    <div className={classes.infoDiv}>
                        <p className={classes.infoHead}>salads</p>
                        <p className={classes.infoPara}>We serve the highest quality of preapred meal at a great value in a home-like friendly environment</p>
                        <img className={classes.menupics} src={salads} alt="alt"></img>
                    </div>
                    <div className={classes.infoDiv}>
                        <p className={classes.infoHead}>desserts</p>
                        <p className={classes.infoPara}>We serve the highest quality of preapred meal at a great value in a home-like friendly environment</p>
                        <img className={classes.menupics} src={vegan} alt="alt"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section2;
