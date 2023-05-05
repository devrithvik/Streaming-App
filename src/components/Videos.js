import React from 'react'
import {Stack,Box} from '@mui/material';
import { VideoCard,ChannelCard } from './component';
 const Videos = ({videos}) => {
    //flexWrap is used for controlling the over flow in x direction .
  return (
   <Stack bgcolor= '#000'
   direction="row" justifyContent="center" flexWrap="wrap" gap={2}> 
        {
            videos.map((item) => ( 
                <Box key={item.id.videoId || item.id.channelId}>
                    { item.id.videoId && <VideoCard  videoDetails={item} />}
                       
                    {item.id.channelId && <ChannelCard   channelDetails={item} id={item.id.channelId} /> }
                </Box>
            ))
        }
   </Stack>

  )
}

export default Videos