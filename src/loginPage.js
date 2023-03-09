import React , {useState} from 'react'
import { Stack , Typography, Button} from '@mui/material'
import {TextField} from '@mui/material'

 const LoginPage = () => {
    const [phoneNbr, setPhoneNbr] = useState("")
    const [otp, setOtp] = useState("")

    const onClickSubmitForm= async () => {
        const userDetails = {phoneNbr, otp}
        console.log(phoneNbr, otp)
        const options={
            method:"POST",
         headers:{
          'Content-type': "application/json"
         },
         
            body:JSON.stringify(userDetails)
        }
        
        const res = await fetch("https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/", options)
        console.log(res, "res")



    }
  return (
    <Stack direction="column" alignItems={"center"}  >
        <img src="./arionLogo.png" alt="arion"  style={{ height:"5rem", width:"5rem"}}/>
        <Typography variant="h6">Welcome to Techarion</Typography>
        <Typography variant="h6">Please sign-in to your account and start the adventure</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth  value={phoneNbr} onChange={(e) => setPhoneNbr(e.target.value)}/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"fullWidth  value={otp} onChange={(e) => setOtp(e.target.value)}/>
        <Button variant="contained" style={{mt:4, backgroundColor:"green"}} onClick={() =>onClickSubmitForm()} >Login</Button>
    </Stack>
  )
}


export default LoginPage
