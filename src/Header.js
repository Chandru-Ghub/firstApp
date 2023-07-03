import React from 'react'

const Header = (props) => {
    const time = new Date()
    const sty = {backgroundColor:"lightblue",padding:'10px'}
  return (
    <header className='App'>
        <h1 style={sty}>{props.title} {time.getHours()}:{time.getMinutes()} </h1>
       
    </header>
  )
}
Header.defaultProps={
  title:'Open Weather'
}

export default Header