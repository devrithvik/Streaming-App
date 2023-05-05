import './App.css';
import { Navigator, Feed, VideoDetail, ChannelDetails, SearchFeed } from './components/component'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
 function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Box sx={{ height:"100vh" ,backgroundColor:"#000", display: 'flex', flexDirection: 'column', gap: 1 ,color:"white"}}>
        <Navigator /> 
        <Routes>
            <Route  exact path='/' element={<Feed />} />
            <Route  path='/video/:id' element={<VideoDetail />} />
            <Route  path='/channel/:id' element={<ChannelDetails />} />
            <Route  path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
    </Box>
    </BrowserRouter>
    </div>
    );
}

export default App;
