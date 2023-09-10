import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect,useRef } from 'react';
import SearchData from './SearchData';
import ColorApp from './ColorApp';
import AddInput from './AddInput';
import ApiApp from './ApiApp';
function App() {
  
  const API_URL = 'http://localhost:3500/items';
  const sty = {backgroundColor:'lightGreen',padding:'20px'}
  const st = {fontSize :'30px',color:'blue',fontWeight:'700'}
 
const [itemsList,setItems] = useState( 
  JSON.parse(localStorage.getItem('toDOList')) || [] )

 const[newItem,setNewItem] = useState('')
  const [search,setSearch] = useState('')
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

 const addInput=(e)=>{
      e.preventDefault();
      console.log(newItem)
      if(!newItem) return
      addItem(newItem)
      setNewItem('')
 }
 const addItem=(data)=>{
  console.log(data)
  const id = itemsList.length? itemsList[itemsList.length-1].id+1:1
  const addNewItem ={id,checked:false,task:data}
  const listItem = [...itemsList, addNewItem]
  setItems(listItem)
  localStorage.setItem('toDoList',JSON.stringify(listItem))
 
}
//  useEffect(()=>{

//   const fetchData = async()=>{
//       try{
//          await fetch(API_URL).then(a=>a.json()).then(data=>setItems(data))
//       }
//       catch(err){
//           console.log(err.stack)
//       }

//   }
//     fetchData()
// },[])

 
  return (
   <div>
    <Header title = 'Open Weather API '/>
    <AddInput
    newItem = {newItem}
    setNewItem = {setNewItem}
    addInput  ={addInput}
    />
    <SearchData
      search = {search}
      setSearch = {setSearch}
     
    />
    <Content
    handleCheck = {handleCheck}
    ondel = {ondel}
    itemsList = {itemsList.filter(a=>(a.task.toLowerCase()).includes(search.toLowerCase()))}
    sty = {sty}
    st = {st}
    
    />
    <ApiApp/>
    {/* <ColorApp/> */}
   </div>
  );

  }
export default App;
