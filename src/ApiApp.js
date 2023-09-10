import React from 'react'
import { useEffect,useState } from 'react'

const ApiApp = () => {

    const [users,setUsers]=useState('users')
    // const [posts,setPosts]=useState('')
    const [comments,setComments]=useState('')

    useEffect(()=>{
        
        fetch(`https://jsonplaceholder.typicode.com/albums${users}`).then((response)=>response.json()).then(data=> console.log(data))
    },[users])
  return (
    <div>
        {/* <button onClick={setUsers('posts')}>users</button>
        <button  onClick={setUsers('comments')}>posts</button> */}
        
   
    {/* {comments.map((a)=>
            <li>{a.title}</li>)
           } */}
    </div>
  )
}

export default ApiApp