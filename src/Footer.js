import React from 'react'

const Footer = () => {
    const year = new Date();
    const sty = {backgroundColor: 'black',color:'white',padding:'10px'}
  return (
    <footer style={sty} className='App copy'>&copy;Copyright 
      Year {year.getFullYear()} time {year.getHours()}:{year.getMinutes()}:{year.getSeconds()}</footer>
  )
}


export default Footer