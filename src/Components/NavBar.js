import React from 'react';
import useStyles from './navCSS';
import { RxHamburgerMenu } from 'react-icons/rx';

function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.navContainer}>
           <div className={classes.navbar}>
           <div className={classes.logoContainer}>
                <div className={classes.navLogo}>R</div>
                <div className={classes.logoHeader}>
                    Restaurent
                </div>
            </div>
            <div className={classes.burgerButton}>
                <RxHamburgerMenu />
            </div>
           </div>

        </div>
    )
}

export default NavBar;
