import React from 'react'
import { Stack, Typography, Button } from "@mui/material"
import { AllStyles } from './allStyles'
import LoginPage from './loginPage'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
const BeforeLoginPage = () => {
    const Styles = AllStyles()
    const onClickContact = () => {
        return (
            <LoginPage />

        )
    }
    return (
        <Stack className={Styles.AppConatiner} >
            <Stack direction="row" alignItems="center" justifyContent={"space-between"}>
                <Stack direction="row" alignItems={"center"} spacing={2}>
                    <Typography variant="h6">LOGIN</Typography>
                    <Typography variant="h6">RESERVATION</Typography>
                    <Typography variant="h6">PRIVATE PARTIES</Typography>
                </Stack>
                <img src="./arionLogo.png" alt="logo" style={{ width: "5rem", height: "5rem" }} />
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="h6">EVENTS</Typography>
                    <Typography variant="h6">CONTACT US</Typography>
                    <Typography variant="h6">ABOUT US</Typography>


                </Stack>
            </Stack>
            <Stack className={Styles.contentContainer} style={{ backgroundImage: `url("./beforeloginContent.png")` }} direction="column" justifyContent="flex-end">
                <Stack direction="column" alignItems={"center"} spacing={5}>
                    <Typography variant="h6" style={{
                        fontFamily: 'Qalisso',

                        fontWeight: 400,
                        fontSize: "48px",

                        /* identical to box height */



                        color: "#FFFFFF"
                    }}>Dessert | Bar | Kitchen</Typography>
                    <Typography variant="h6" style={{ color: "#FFFFFF" }}>The Barn is a global food experience and our dessert bar is legendary!</Typography>
                    <Button variant="contained" onClick={() => onClickContact} style={{ backgroundColor: "#C5B5A6", borderRadius: "51px", height: "40px", width: "128px" }}>Contact Us</Button>
                </Stack>
            </Stack>
            {/* <img src="./beforeloginContent.png" alt="content" style={{width:"60%", height:"45rem"}} /> */}
            <Typography variant="h6" style={{ width: "50rem" }} className={Styles.mainContent}>Experience culinary excellence at our restaurant. Book your table today and get ready to indulge in a delightful dining experience!!</Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <img src="./image2.png" alt="second" />
                <img src="./chaiImage.png" alt="chair" />
            </Stack>
            <Stack style={{backgroundColor:"black"}} direction="column" justifyContent="center" alignItems="center">
                <img src="./footer.png" alt="footerLogo"  style={{ height:"10rem", width:"10rem"}}/>





                <Stack direction="row" alignItems="center" spacing={5}>
                <FacebookIcon htmlColor="white" />
                <InstagramIcon   htmlColor="white"/>
                <YouTubeIcon  htmlColor="white" />
                
            </Stack>
            <hr style={{width:"100%"}}/>
            <Typography variant="h6" style={{color:'white'}}> ©TECHARION 2023</Typography>


            </Stack>
           



        </Stack>
    )
}

export default BeforeLoginPage