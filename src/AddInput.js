import React from 'react'
import { useRef } from 'react'
const AddInput = ({newItem,setNewItem,addInput}) => {
    const res = useRef()
  return (
    <form className='submit' onSubmit={addInput}>
        <input ref={res} type="text" placeholder='Enter new todo' 
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}/>
         <button type='submit' onClick={()=>res.current.focus()} >Add</button>
    </form>
  )
}

export default AddInput