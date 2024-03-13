import { useEffect, useState } from "react";
import Button from "./Button"
import styled from "./styled/App.module.css"


function App() {
  const [toDo,setToDo] =useState("")
  const [toDos,setToDos] =useState([]);
 const onChange =(e)=>setToDo(e.target.value)
  const onSubmit =(e)=>{
      e.preventDefault()
     if(toDo ===""){
      return
      }
      setToDos((currentArray)=>[toDo,...currentArray])
      setToDo("")
    }
    console.log(toDos);
  return ( 
    <div>
      {/* 배열의 길이로 todo개수 표현  */}
      <h1>My to Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Wire"></input>
        <button>Add to do</button>
        <hr />
        <ul>
          {toDos.map((item,index)=>
              <li key={index}>{item}</li>
          )}
        </ul>
      </form>
    </div>

  );
}
/*
input에 입력할때마다 console.log(toDos);출력되는 이유
입력할때마다 useState의 값이 바뀌기 때문에 rerendering이 일어나서 실행됨
*/ 
export default App;
