import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    footer: {
        position: "relative",
        top: "700px",
    },
    container: {
        display: "flex",
        width: "60%",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "space-between"
    },
    insideContainer: {
        width: "50%",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& button": {
            width: "70px",
            marginTop: "10px",
            height: "30px",
            color: "black",
            border: "1px solid black",
            borderRadius: "1px",
        }
    },
    headpara: {
        fontSize: "22px",
        fontWeight: "700",
        marginTop: "0"
    },
    contactForm: {
        marginTop: "20",
        fontSize: "22px",
        fontWeight: "700"
    },
    address: {
        color: "#B2B2B2",
    },
    folowus: {
        marginTop: "40px",
        fontSize: "21px",
        fontWeight: "700"
    },
    input: {
        backgroundColor: "#F1F6F5",
        border: "none",
        height: "27px"
    },
    textarea: {
        backgroundColor: "#F1F6F5",
        border: "none",
        height: "55px"
    },
    socialHadles: {
        width: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomContainer: {
        marginTop: "40px",
        height: "70px",
        width: "100%",
        backgroundColor: "#434242",
        alignItems: "center",
        color: "white",
        padding: "12px"
    },
    bottomPara: {
        fontSize: "11px",
        "& a": {
            color: "#C58940"
        }
    },
    copyrightHead: {
        "& svg": {
            verticalAlign: "text-bottom"
        }

    }
})

export default useStyle;
