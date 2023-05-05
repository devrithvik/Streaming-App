import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import {useState, useEffect} from 'react'
import { Sidebar } from './component'
import { Videos } from './component'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import {useParams} from 'react-router-dom'

  export const SearchFeed = () => {
    const [videos,setVideos] = useState([]);
    const {searchedTerm} = useParams();
     useEffect(()=>{
      fetchFromAPI(`search?part=snippet,id&q=${searchedTerm}`)
      .then((data) => {setVideos(data?.items)});
    },[searchedTerm]);
  return (
           <Box 
           sx={{
              flexDirection: "column",
              overflowY: 'auto',
              height: "90vh",
           }}
          >
            <Typography
              variant= "h5"
              sx={{
                  bb: "1px solid white",
                  mb : 1,
                  fontWeight: "bold",
                  ml :"1vw"
              }}
            >
              search results for: <span style={{fw: "bold",color:"red",marginLeft: "10px"}}>{searchedTerm}</span>
            </Typography>
                  <Videos videos={videos}/> 
          </Box>
   )
}
