import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/constants'
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction="row"
    sx={{
        overflowY: "auto",
        overflowX: 'hidden',
        maxHeight: {sx:"auto",md:"95%"},
        flexDirection: {md: "column"},
        margin: "auto 0",
    }}
    >
        {
            categories.map((category,index) => (
                <button 
                key={index}
                className="category-btn"
                style={{
                    color: "white",
                    backgroundColor: "red",
                    display:"flex",
                    margin:"2% 1%",
                    border: "none",
                    borderRadius: "20px",
                 }}
                 onClick={(e) => {setSelectedCategory(category.name)}}
                >
                    <span style={{ paddingRight:"10%",marginLeft:"0px" }}>{category.icon}</span>
                    <span style={{margin:"auto 0",paddingRight:"1vw"}}>{category.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default Sidebar