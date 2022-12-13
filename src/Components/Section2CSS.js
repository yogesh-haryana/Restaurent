import { makeStyles } from "@mui/styles";
import section2 from "../assets/section2.jpg"

const useStyles = makeStyles({
    sectionTwo: {
        position: "relative"
    },
    backgroundContainer: {
        position: "relative",
        top: "300px",
        width: "110%",
        height: "400px",
        backgroundImage: `url(${section2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transform: "rotate(-5deg)",
        display: "flex",
        margin: "0 -20px",
        justifyContent: "center",
    },
    catering: {
        width: "100%",
        margin: "30px",
        transform: "rotate(5deg)",
        color: "white",
    },
    cateringHead: {
        fontSize: "22px",
        fontWeight: "600",
        letterSpacing: "1px"
    },
    order: {
        fontSize: "14px",
        letterSpacing: ".5px"
    },
    foodType: {
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
        margin: "0 auto",
    },
    foodContent: {
        marginTop: "30px",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "& div": {
            width: "100px",
            height: "100px",
            border: "none",
            borderRadius: "50%",
            overflow: "hidden",
            "& img": {
                height: "100%",
                width: "100%",
            },

        }
    },
    menu: {
        backgroundColor: "#fff",
        border: "none",
        width: "250px",
        height: "250px",
        borderTopRightRadius: "48%",
        borderTopLeftRadius: "48%",
        position: "absolute",
        left: "calc(100% / 2 - 125px)",
        top: "655px",
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
        top: "500px",
        width: "70%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    infoDiv: {
        width: '30%',
        textAlign: "left",
        padding: "0 10px",
        "& img": {
            height: "180px",
            width: "250px"
        }
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
