 import React from 'react'
 import {useState} from 'react';
 import { useNavigate } from 'react-router-dom';
 import {Paper, IconButton} from '@mui/material';
 import { Search } from '@mui/icons-material';
 export const SearchBar = () => {
    const [searchedTerm,setSearchedTerm] = useState('');
    const navigate = useNavigate();
    const searchResults = (e) => {
      e.preventDefault();
      console.log('iam riht');
      navigate(`/search/${searchedTerm}`);
      setSearchedTerm('');
    }
    return (
    
    <Paper 
    component='form'
      onSubmit={searchResults}
      sx={{ 
        height: "5vh", 
        width: '25vw',
        display:"flex", 
        alignItems:"center", 
        justifyContent: "space-between", 
        pl: 2 , 
        border: "2px solid #e3e3e3",
        borderRadius: 20 
        }}>
     
     <input
     className= "search-bar"
     type="text" 
     placeholder='search' 
     style={{ padding: "2%",border:"none", borderRadius: "20px", height:"70%",  }}
     value={searchedTerm}
     onChange={(e) => {setSearchedTerm(e.target.value)}}
     ></input>
     <IconButton type=' submit' sx={{ pr: "15px", mr: { sm: 3 }, color: "red" }}>
      <Search />
     </IconButton>

     </Paper>

   )
 }
 