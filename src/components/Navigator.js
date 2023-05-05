import React from 'react'
import {Stack} from '@mui/material'
import {logo} from '../utils/constants';
import {Link} from 'react-router-dom';
import {SearchBar} from './SearchBar';
export const Navigator = () => {
  return (
    
    <Stack  direction="row"  backgroundColor="#000" p={2} sx={{ position:"sticky",alignItems:"center",justifyContent:"space-between",top:0,}}  >   {/*dStackvStackder={<p> | </p>}*/}
          <Link to='/' style={{ textDecoration: "none", display: "flex", alignItems: "center" }}> 
          <img src={logo} alt="logo" height={35}></img> 
          <span style={{ fontSize: "3vh",fontFamily:"sans-serif" ,fontWeight: "900",marginLeft: "1vw",color:"white"}}>YouTube</span>
          </Link>
         
          <SearchBar />
     </Stack>
    
  )
}
