 import React from 'react'
 import { Link } from 'react-router-dom'
 import { Typography,Card,CardContent,CardMedia } from '@mui/material'
 import {CheckCircle} from '@mui/icons-material'
 import {
   demoThumbnailUrl,demoChannelUrl,
   demoVideoUrl,demoChannelTitle,
   demoVideoTitle,
   ContentCopy} from '../utils/constants'  
   


const VideoCard = ({videoDetails:{
   id :{
      videoId
   },snippet,
 }

}) => {
    return (
       <Card margin='auto' sx={{width: {sx:"100%",md:"330px"},backgroundColor:'#000',}}>
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url} 
            alt={snippet?.title}
            sx={{
               width:{xs:'100%',md: '330px'}, // ,incase of small devices the width should occupy the whole space of card
               height: 190,
               borderRadius: '10px',
            }}
            />
         </Link>
            <CardContent 
            sx={{
               minHeight: '100%',
            }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}  >
                  <Typography variant='subtitle' color="#FFF" fontWeight="bold" >
                     {snippet?.title ? snippet?.title.slice(0,60) : demoVideoTitle.slice(0,60)}
                  </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} sx={{display:"flex",flexDirection:"row"}}   >
                  <Typography variant='subtitle2' color="gray" fontWeight="bold" >
                     {snippet?.channelTitle ? snippet?.channelTitle.slice(0,60) : demoChannelTitle.slice(0,60)}
                     <CheckCircle color='gray' sx={{ml:"5px",fontSize:15}}/> 
                  </Typography>
                 
            </Link>
            </CardContent>
         
       </Card>
   )
 }

 
 export default VideoCard