import { makeStyles } from "@mui/styles";
import pixels from "../assets/pexels-rajesh-tp-1603901.jpg"

const useStyles = makeStyles({
    sectionOne: {
    },
    backgroundContainer: {
        width: "110%",
        height: "350px",
        backgroundImage: `url(${pixels})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transform: "rotate(-5deg)",
        margin: "0 -18px",
        position: "relative"
    },
    ourPassion: {
        transform: "rotate(5deg)",
        position: "absolute",
        left: "46%",
        translate: "-50%",
        marginTop: "70px",
        height: "200px",
        width: "300px",
        borderRadius: "50%",
        borderLeft: "3px solid white",
        borderRight: "3px solid white",
        color: "#fff",
    },
    passionText: {
        fontSize: "2em",
        letterSpacing: "1px",
        fontWeight: "700",
        display: "flex",
        justifyContent: "center",
        margin: "60px auto"
    },
    menuContainer: {
        width: "100%",
        position: "relative",
    },
    menu: {
        backgroundColor: "#fff",
        border: "none",
        width: "250px",
        height: "250px",
        borderTopRightRadius: "48%",
        borderTopLeftRadius: "48%",
        position: "absolute",
        top: "410px",
        left: "calc(100% / 2 - 125px)",
        "& svg": {
            marginTop: "80px",
            height: "70px",
            width: "70px",
            "& path": {
                fillRule: "nonzero"
            }
        }
    },
    menuHeading: {
        fontSize: "17px",
        letterSpacing: "1px",
        fontWeight: "700"
    },
    flexRow: {
        margin: "0 auto",
        position: "relative",
        top: "230px",
        width: "70%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    infoDiv: {
        display: "inline",
        width: '30%',
        textAlign: "left",
        padding: "0 10px",
        "& button": {
            marginTop: "16px",
            color: "black",
            border: "1px solid",
            borderRadius: "1px"
        }
    },
    infoNumber: {
        fontSize: "24px",
        color: "grey"

    },
    infoHead: {
        fontSize: "24px",
        color: "black"
    },
    infoPara: {
        fontSize: "12px",
    },


});

export default useStyles;
