import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
function App() {
  

  const sty = {backgroundColor:'lightGreen',padding:'20px'}
  const st = {fontSize :'30px',color:'blue',fontWeight:'700'}

const [itemsList,setItems] = useState( 
  [
    {id:1,
    task:'codekataPractice',
    checked:true
    },
    {id:2,
    task:'projectWork',
    checked:false 
    },
    {id:3,
    task:'LearnReact',
    checked:false
    },
  ])
 const handleCheck =(id)=>{

  let newArray = itemsList.map((e)=>e.id == id? {...e,checked:!e.checked}:e)
  setItems(newArray);
  localStorage.setItem('toDoList',JSON.stringify(newArray));
 }
 const ondel = (id)=>{

  let newArray = itemsList.filter((e)=>e.id !== id)
  setItems(newArray);
  localStorage.setItem('toDoList',JSON.stringify(newArray));
 }

 
  return (
   <div>
    <Header title = 'Open Weather API '/>
    <Content
    handleCheck = {handleCheck}
    ondel = {ondel}
    itemsList = {itemsList}
    setItems = {setItems}
    sty = {sty}
    st = {st}
    
    />
    <Footer/>
   </div>
  );

  }
export default App;
