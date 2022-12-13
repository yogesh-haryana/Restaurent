import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    navContainer: {
        width: "100%",
        height: "100px"
    },
    navbar: {
        width: "80%",
        margin: "0 auto",
        position: "relative"
    },
    logoContainer: {
        display: "inline-block",
        float: "left",
        position: "relative"
    },
    navLogo: {
        fontFamily: "Dancing Script, cursive",
        fontSize: "90px",
        marginLeft: "120px",
        color: "grey",
        zIndex: -1,
    },
    logoHeader: {
        fontFamily: "Dancing Script, cursive",
        fontSize: "27px",
        position: "absolute",
        top: "32px",
        left: "90px"
    },
    burgerButton: {
        fontSize: "27px",
        position: "absolute",
        top: "25px",
        right: "10px"
    }
});

export default useStyles;
