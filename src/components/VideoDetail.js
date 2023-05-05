import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useEffect,useState } from 'react';
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
export const VideoDetail = () => {
  const [video,setVideo] = useState(null);
  const {id} = useParams();
  const fetchVideo = () => {
    fetchFromAPI(`videos?id=${id}&part=contentDetails,snippet,statistics`)
      .then((data) => {setVideo(data.items[0])})
  }
  useEffect(fetchVideo,[id]);
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column',md:'row'}} >
  
    <Box flex={1}>    
    <Box sx={{width: '100%', position: 'sticky', top: '600px'}}>
    <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} controls/>
    </Box>
     </Box>
      </Stack>
    </Box>
    )
}
