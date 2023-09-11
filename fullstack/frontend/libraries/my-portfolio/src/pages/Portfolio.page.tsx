import { Box, Button, Grid } from "@mui/material"
import myresume from '../images/SRUTHI_PRADEEP_RESUME (1).pdf'
import React from "react"
import { MyNavbar } from "../component/MyNavbar"
import { MyProjectCard } from "../component/MyProjectCard"
import { MyImage } from "../component/MyImage"

export const Portfolio:React.FC<{}>=()=>{
    return <>
    <Box sx={{m:2}}>
        <Grid>
        <MyNavbar/>
        </Grid>
        <br />
        <Grid 
        container 
        direction="row"
  justifyContent="center"
  alignItems="center">
    <Grid xs={6}> <MyImage/></Grid>
    <Grid xs={6}><h1>My name is Sruthi Pradeep</h1> 
    Recently completed Bachelor Of Engineering in electronics and Communication from AJ Institute Of Engineering and Technology.

    <a href={myresume} download>
    <Button variant="contained" color="warning">download my resume</Button></a></Grid>
  </Grid>
  <br />
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
  <Grid item xs={6}>
<MyProjectCard/>
  </Grid>
</Grid>











    </Box>

    </>
}