import { makeStyles } from "@mui/styles";
import section3 from "../assets/section3.jpg";

const useStyle = makeStyles({
    sectionThree: {
        position: "relative",
        top: "600px"
    },
    backgroundContainer: {
        width: "110%",
        height: "400px",
        backgroundImage: `url(${section3})`,
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
        textAlign: "center",
        alignItems: "center !important"
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
        height: "240px",
        borderTopRightRadius: "48%",
        borderTopLeftRadius: "48%",
        position: "absolute",
        left: "calc(100% / 2 - 125px)",
        top: "360px",
    },
    menuHeading: {
        fontSize: "22px",
        letterSpacing: "1px",
        fontWeight: "700",
        marginTop: "100px"
    },
    sampleDiv: {
        margin: "200px auto 0 auto",
        width: "40%"
    },
    sampleText: {
        fontSize: "12px"
    },
    teamMembers: {
        margin: "0 auto",
        position: "relative",
        width: "60%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    members: {
        width: '25%',
        textAlign: "left",
    },
    imgHolder: {
        marginTop: "50px",
        height: "135px",
        width: "135px",
        border: "none",
        borderRadius: "50%",
        overflow: "hidden",
        "& img": {
            height: "100%",
            width: "100%"
        }
    },
    memberName: {
        fontSize: "18px",
        fontWeight: "600"

    }
    
});

export default useStyle;
