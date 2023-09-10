import React, { useState } from 'react'
// import colorNames from "colornames"
const ColorApp = () => {

    const [change,setChange] = useState('')
    const [hex,setHex]=useState('');
    const [tgle,settgle] = useState(true)
      
  return (
    <div className='pcr'>
            <div className="color" 
            style={{background:change,
            color:tgle?'black':'white'}}>
                    <p >{change?change:'Empty Value'}</p>
                    <p>{hex?hex:null}</p>
            </div>
            <form  onSubmit={(e)=>e.preventDefault()} >
                <input type="text" placeholder='Add color name'
                autoFocus
                value={change}
                onChange={(e)=>{
                  setChange(e.target.value);
                  // setChange()
              }}
             
                />
              
            </form>
              <button className='toggle' onClick={()=>settgle(!tgle)}>Toggle Text Color</button>
    </div>
  )
}

export default ColorApp