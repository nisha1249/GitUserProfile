import React, { useEffect, useState } from 'react';
import ProfileCard from './components/profileCard';
import { Typography, Box, Grid, Link, Pagination, TextField, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Loading from './components/loading';

const UserProfileList = () => {
    const [sdata, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterData, setFilterData] = useState('');
    const [ loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            setLoading(false)
            const response = await axios.get(`https://api.github.com/users`);
            setData(response.data);
            console.log(response.data, "data@@@");
        } catch (error) {
            console.error(error);
        }
    };
    const filterUser = async () => {
        try {
            setLoading(false)        
            const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
            console.log(response.data.login, "data$$$$$");
            setFilterData(response.data); 
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => { 
        filterUser();
        getUser();  
    }, []);

    const filteredProducts = sdata
        .filter(data =>
            data.login.toLowerCase().includes(searchTerm.toLowerCase())
        );
    const handleSearchChange = event => { 
        setSearchTerm(event.target.value);
    };
    
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
                <Box >
                    <TextField style={{ height: '0px' }}
                        placeholder='search'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button style={{ backgroundColor: 'lightBlue', height: '57px', marginLeft: '-10px', border: '1px solid lightgrey' }}
                    onClick={()=> localStorage.setItem("user",`${filterData.name}`)}><SearchIcon /></Button>
                </Box>
            </Box> 
            <Box style={{ backgroundColor: 'skyblue', height: 'auto', padding: '30px' }}>
                <Typography variant='h4' style={{ textAlign: 'center' }}>List of users </Typography>
                <Grid container style={styles.list}>  
                    {filteredProducts?.map((user) => (  
                        <Grid item lg={12} xs={12} sm={12} md={12} style={{ border: '2px solid grey', borderRadius: '5px', margin: '20px' }}>
                            <Link href={`/profilePage/${user.login}`} style={{ textDecorationLine: 'none', color: 'black' }}>
                                <ProfileCard key={user.id} avtar={user?.avatar_url} name={filterData?.name}
                                    loginId={user?.login} repo={filterData?.public_repos} follower={filterData?.followers} following={filterData?.following} />
                            </Link>
                        </Grid>
                    ))}
                            <Grid item lg={12} xs={12} sm={12} md={12} style={{ border: '2px solid grey', borderRadius: '5px', margin: '20px' }}>
                            <Link href={`/profilePage/${filterData.login}`} style={{ textDecorationLine: 'none', color: 'black' }}>
                                <ProfileCard key={filterData.id} avtar={filterData?.avatar_url} name={filterData?.name}
                                    loginId={filterData?.login} repo={filterData?.public_repos} follower={filterData?.followers} following={filterData?.following} />
                            </Link>
                        </Grid>
                </Grid>
                {/* <Typography variant='h1'>{page}</Typography> */}
                <Pagination
                    count={5}
                    color="secondary"
                    variant='outlined'
                    page={page}
                    onChange={(event, value) => setPage(value)}
                />
            </Box>
        </>
    );
};

const styles = {
    header: {
        height: '75px',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
    }
};

export default UserProfileList;
