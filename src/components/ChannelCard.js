import React from 'react'
import { Box,Card,CardContent ,CardMedia,Typography } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {demoChannelUrl, demoProfilePicture} from '../utils/constants'  
const ChannelCard = ({channelDetails,id}) => {
  console.log(channelDetails);
  return (
    <Card sx={{width: {sx:"356px",md:"320px"},
    backgroundColor:'transparent',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    margin: 'auto'
   }}>
        <Link  to={`/channel/${id}`|| demoChannelUrl} style={{textDecoration: 'none'}}> 
        <CardContent >
        <CardMedia
        image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetails?.snippet?.title}
        sx={{
          borderRadius:"50%",
          width:"180px",
          height: "180px",
        }}
        />
        <Typography
        variant="h6" fontWeight="bold" color='#FFF'>
        {channelDetails?.snippet?.channelTitle || channelDetails?.snippet?.title}
        <CheckCircle color='gray' sx={{ml:"5px",fontSize:15}}/>
        </Typography>
              <Typography color='gray' sx={{ml: '25px',}} >
               { channelDetails?.statistics?.subscriberCount &&  parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()+ ' subcribers' }
              </Typography> 
      </CardContent>
      </Link> 
      </Card>
  )
}

export default ChannelCard

 
 