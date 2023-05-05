import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import {useState, useEffect} from 'react'
import { Sidebar } from './component'
import { Videos } from './component'
import {fetchFromAPI} from '../utils/fetchFromAPI'

  export const Feed = () => {
    const [videos,setVideos] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState('New');
    useEffect(()=>{
      fetchFromAPI(`search?part=snippet,id&q=${selectedCategory}`)
      .then((data) => {setVideos(data?.items)});
    },[selectedCategory]);
  return (
     <Stack
        sx= {{
            flexDirection:{
            sx: "column",md:"row"
          },
           height: "100%",
           backgroundColor: "#000",
           overflow: "hidden"
        }}
     >
          <Box sx={{
               boxSizing: "border-box",
               height:{sx: "auto", md:"100%"},
               borderRight: "1px solid #3d3d3d",
               px: {sx: 0, md:2},
               width: {sx:"auto",md: "15vw"}
              
            }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography>
                  Copy right 2022 Jsm Media
                </Typography>
          </Box>
          {/* videos feed */}
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
              {selectedCategory}<span style={{fw: "bold",color:"red",marginLeft: "10px"}}>Videos</span>
            </Typography>
                  <Videos videos={videos}/> 
          </Box>
     </Stack>
  )
}
