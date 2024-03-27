import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import avtar from '../assets/images.jpg'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

const ProfileCard = (props) => {
    return (
        <Grid container columns={12} style={{ backgroundColor: 'white',padding:'10px' ,alignItems:'center'}}>
                <Grid item lg={3} md={3} sm={6} xs={6} style={{display:'grid',justifyContent:'center'}}>
                    <img src={props.avtar} alt="avtar" style={{height:'150px',width:"150px", borderRadius: '5rem',boxShadow:'0px 2px 6px 10px grey' }} />
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                    <Typography variant='h4' style={{fontWeight:'bold'}}>{props.name}</Typography>
                    <Typography variant='h6' style={{fontWeight:'bold',textShadow:'2px 2px 3px black'}}>{props.loginId}</Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={4} style={{display:'grid',justifyContent:'center', alignItems:'center'}}>
                    <Box style={{display:"flex",backgroundColor:'orange',borderRadius:'5rem',
                    height:'100px',width:'100px',justifyContent:'center', alignItems:'center',fontSize:'20px'}}>
                        <LibraryBooksIcon style={{fontSize:'35px'}}/>
                        </Box>
                <Box style={{textAlign:'center'}}>
                    <Typography variant='h6' style={{fontWeight:'bold'}}>Repositary</Typography>
                    <Typography variant='h6' style={{fontWeight:'bold'}}>{props.repo}</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={4} style={{display:'grid',justifyContent:'center', alignItems:'center'}}>
                    <Box style={{display:"flex",backgroundColor:'lightGreen',borderRadius:'5rem',
                    height:'100px',width:'100px',justifyContent:'center', alignItems:'center',fontSize:'20px'}}>
                        <PersonIcon style={{fontSize:'45px'}}/>
                        </Box>
                <Box style={{textAlign:'center'}}>
                    <Typography variant='h6' style={{fontWeight:'bold'}}>Follower</Typography>
                    <Typography variant='h6' style={{fontWeight:'bold'}}>{props.follower}</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={4} style={{display:'grid',justifyContent:'center', alignItems:'center'}}>
                    <Box style={{display:"flex",backgroundColor:'pink',borderRadius:'5rem',
                    height:'100px',width:'100px',justifyContent:'center', alignItems:'center',fontSize:'20px'}}>
                        <GroupsIcon style={{fontSize:'50px'}}/>
                        </Box>
                <Box style={{textAlign:'center'}}>
                    <Typography variant='h6' style={{fontWeight:'bold'}}>Following</Typography>
                    <Typography variant='h6' style={{fontWeight:'bold'}}>{props.following}</Typography>
                    </Box>
                </Grid>
        </Grid>
    )
}

export default ProfileCard