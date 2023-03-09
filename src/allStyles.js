import { makeStyles } from "@mui/styles";

export const AllStyles = makeStyles({
    AppConatiner:{
        "& .MuiTypography-h6":{
            fontFamily: 'Gabriela',
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "26px",
            
            letterSpacing: "0.02em",
            
            color: "#000000"

        }

    },

    contentContainer:{
        padding:"2rem",
        height:"50vh"
    }, 
    mainContent:{
        fontFamily: 'Gabriela',
fontWeight: 400,
fontSize: "20px",
lineHeight: "26px",

letterSpacing: "0.02em",

color: "#000000"
    },
    contactBtn:{
        backgroundColor: "#C5B5A6"
    }





})