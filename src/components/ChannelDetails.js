import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Stack} from '@mui/material'
import {useParams} from 'react-router-dom'
import {Videos,ChannelCard} from './component'
import {fetchFromAPI} from '../utils/fetchFromAPI'
export const ChannelDetails = () => {
  const [channelDetails,setChannelDetails] = useState(null)
  const [videos,setVideos] = useState([])
  const {id}=useParams()         //enable us to use all the params we type in browser 
  useEffect(()=> {

    fetchFromAPI(`channels?&part=snippet,statistics&id=${id}`)
    .then((data) => {console.log(data?.items[0]);setChannelDetails(data?.items[0])});

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => {setVideos(data.items)}); 

 
    }, [id])
  return (
    <Box >
       <div 
        style={{
          background: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
          height: '250px',
        }}
       />
        <Box sx={{m: { md:'-80px 35vw 0 35vw',xs: '-80px auto auto auto'}}}><ChannelCard channelDetails={channelDetails} id={id}></ChannelCard></Box>
       <Videos videos={videos} />
     </Box>
  )
}


{/* <Stack     sx={{
  m: { md:'-80px 35vw 0 35vw',xs: '-80px auto auto auto'}
}}>
   <ChannelCard channelDetails={channelDetails} id={id}></ChannelCard>   

 </Stack>    */}