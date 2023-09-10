import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = ({handleCheck,ondel,itemsList,sty,st}) => {

        // console.log(itemsList)

  return (
    
    <main  style={sty}  >
      {(itemsList.length)?(
      <ul className='ulist'>
            {itemsList.map((item)=>{
              return(
            <li className='item' key={item.id}>
                <input type="checkbox" checked={item.checked}
                onChange={()=>handleCheck(item.id)} />
                <label 
                style={item.checked ? {textDecoration:'line-through'}:null}  onDoubleClick={()=>handleCheck(item.id)} >{item.task}
                </label>
               
                <FaTrashAlt onClick={()=>ondel(item.id)}
                role='button'
                tabIndex='0'/>
              </li>)
             
})}
            
            
      </ul>
      ):(
        <p style={st}>Your List is Empty</p>
      )}
    </main>
    
   
  )
}

export default Content