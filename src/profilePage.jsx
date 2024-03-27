import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Link } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups'; 
import { useParams } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
import Loading from './components/loading';

const ProfilePage = () => {
    const [user, setUser] = useState();
    const [userRepo, setUserRepo] = useState();
    const [ loading, setLoading] = useState(true);

    const { login } = useParams();
    let userID = login ; 
    let URL = `https://api.github.com/users/${userID}`;

    const UserProfile = async()=>{
        try{
            setLoading(false)
        const response = await axios.get(`${URL}`);
        console.log(response.data,'$$$');
        setUser(response.data);
        }catch(error){
            console.log(error); 
        }
    }

    const userRepoData = async() =>{
        try{
            setLoading(false)
            const response = await axios.get(`${URL}/repos`);
            // console.log(response.data,"$$$");
            setUserRepo(response.data);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        UserProfile();
        userRepoData(); 
    },[]);

    if(loading)
    {
        return  <Loading/>
    }
    return (
    <>
    <Box style={styles.header}>
                <GitHubIcon style={{ fontSize: '50px', padding: '20px' }} />
                <Typography variant='h5' style={{ fontWeight: 'bold', paddingRight: '50px' }}>
                    GitHub Profile User
                </Typography>
                <Typography variant='h6'>
                    <Link href='/' style={{ textDecorationLine: 'none', color: 'black', paddingRight: '50px' }}>Home</Link>
                </Typography>            
            </Box>  
        <Grid container style={{ backgroundColor: 'white',padding:'10px' ,alignItems:'center',margin:'20px',width:'97%'}}>
                <Grid item lg={3} md={3} sm={6} xs={6} style={{display:'grid',justifyContent:'center'}}>
                    <img src={user?.avatar_url} alt="avtar" style={{height:'150px',width:"150px", borderRadius: '5rem',boxShadow:'0px 2px 6px 10px grey' }} />
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                    <Typography variant='h4' style={{fontWeight:'bold'}}>{user?.name}</Typography>
                    <Typography variant='h6' style={{fontWeight:'bold',textShadow:'2px 2px 3px black'}}>{userID}</Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={4} style={{display:'grid',justifyContent:'center', alignItems:'center'}}>
                    <Box style={{display:"flex",backgroundColor:'orange',borderRadius:'5rem',height:'100px',
                        width:'100px',justifyContent:'center', alignItems:'center',fontSize:'20px'}}>
                        <LibraryBooksIcon style={{fontSize:'35px'}} />
                    </Box>
                    <Box style={{textAlign:'center'}}>
                        <Typography variant='h6' style={{fontWeight:'bold'}}>Repositary</Typography>
                        <Typography variant='h6' style={{fontWeight:'bold'}}>{user?.public_repos}</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={4} style={{display:'grid',justifyContent:'center', alignItems:'center'}}>
                    <Box style={{display:"flex",backgroundColor:'lightGreen',borderRadius:'5rem',height:'100px',width:'100px',justifyContent:'center', alignItems:'center',fontSize:'20px'}}>
                        <PersonIcon style={{fontSize:'45px'}} />
                    </Box>
                    <Box style={{textAlign:'center'}}>
                        <Typography variant='h6' style={{fontWeight:'bold'}}>Follower</Typography>
                        <Typography variant='h6' style={{fontWeight:'bold'}}>{user?.followers}</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} md={2} sm={4} xs={4} style={{display:'grid',justifyContent:'center', alignItems:'center'}}>
                    <Box style={{display:"flex",backgroundColor:'pink',borderRadius:'5rem',height:'100px',
                    width:'100px',justifyContent:'center', alignItems:'center',fontSize:'20px'}}>
                        <GroupsIcon style={{fontSize:'50px'}} />
                    </Box>
                    <Box style={{textAlign:'center'}}>
                        <Typography variant='h6' style={{fontWeight:'bold'}}>Following</Typography>
                        <Typography variant='h6' style={{fontWeight:'bold'}}>{user?.following}</Typography>
                    </Box>
                </Grid> 
        </Grid>
        <Grid container lg={12} style={{display:'flex',justifyContent:'center',textAlign:'center', paddingTop:'40px'}}>
                <Typography variant='h4'>Repositories List </Typography>
            {userRepo?.map(user=>(
                <Grid item lg={12} style={{textAlign:'center',border:'1px solid black',padding:'10px',margin:'10px',borderRadius:'5px',width:'100%'}}>
                    <Typography variant='h6'><b>{user.name}</b> </Typography>
                    <Typography variant='p'><b>Description:</b> {user.description}</Typography><br/>
                    <Typography variant='p'><b>Repo URL:</b> {user.html_url}</Typography>
            </Grid>
            ))}
        </Grid>
        </>
    )
}
const styles = {
    header: {
        height: '75px',
        width: '100%',
        backgroundColor: 'skyBlue',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
    }
};

export default ProfilePage