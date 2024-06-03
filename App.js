import React, { useState } from 'react'; 
// import {useState} from 'react';
// import ReactDOM from 'react-dom/client';
import './App.css';
// function App(){
//   let [counter,setCounter] = useState(0);
//   let stock =10
//   return (
//     <>
    
//         <h1>Iam going to create a todo app</h1>
//         <center>Counter:<p>{counter}</p>
// </center>
//         <div className='Wrapper'>
        
//           <br></br>
//         <button className='minus' disabled={counter === 0} onClick={() => {
//           if (counter>0) {
//             setCounter(counter - 1)
//           }

//         }}>-</button>
//         <p>{counter}</p>
//         <button className='plus'  disabled={counter===stock} onClick={() => {

//             if (counter<stock){
//               setCounter(counter + 1)
//             }
//         }}>+</button>
        
//         </div>
//      </>
//   )
// }
// export default App




//TODO
function App(){
  let [todoinput, updateinput]=useState('test')

  let [todolist,updateTodo] = useState(
    [
      {
        id:1,
        task:'wake up'
      },
      {
        id:2,
        task:'brush'
      },
      {
        id:3,
        task:'bath'
      }
    ]
  )
  let nextid=4
  function AddNewTodo(){
    if (todoinput===""){
      alert('add new task');
    }
    else{
      let newtodos =[
        ...todolist,
        {
          id:nextid+1,
          task:todoinput
        }
      ]
      updateTodo(newtodos);
      updateinput("")
    }

  }
  function deletetodo(id){
            let updatedtodos = todolist.filter(
              (todo)=>{
                return todo.id!==id
                 
              }
            )
            updateTodo(updatedtodos)
  }
  return (
    <div className="container mt-5 w-50">
      <h3 className='text-center'>TODO WEBSITE</h3>
          <div className='input-group'>
              
              <input type='text' className='form-control'onChange={(e)=>{
                let task = e.target.value;
                updateinput(task)
              }} value={todoinput}></input>
              <button className='btn btn-primary' onClick={()=>{
                AddNewTodo()
              }}>Add</button>
          </div>
          <ul className='list-group mt-4'>
            {
              todolist.map(
              (todo)=>{
                return(
                  <li className='list-group-item'>
                    <p>{todo.task}</p>
                    <button className='btn' onClick={()=>
                    {
                      deletetodo(todo.id)
                    }}>❌</button>
                  </li>
                )
              }
              )
            }
             
          </ul>
    </div>
  )
}
export default App
 

// // import React, { useState } from 'react';

// function App() {
//   const [todoInput, updateInput] = useState('test');

//   const [todoList, updateTodo] = useState([
//     {
//       id: 1,
//       task: 'wake up',
//     },
//     {
//       id: 2,
//       task: 'brush',
//     },
//     {
//       id: 3,
//       task: 'bath',
//     },
//   ]);

//   function addNewTodo() {
//     if (todoInput === '') {
//       alert('Please add a new task');
//     } else {
//       const newTodo = {
//         id: Date.now(), // Generate a unique ID
//         task: todoInput,
//       };
//       updateTodo([...todoList, newTodo]);
//       updateInput('');
//     }
//   }

//   function deleteTodo(id) {
//     const updatedTodos = todoList.filter((todo) => todo.id !== id);
//     updateTodo(updatedTodos);
//   }

//   return (
//     <div className="container mt-5 w-50">
//       <h3 className="text-center">TODO WEBSITE</h3>
//       <div className="input-group">
//         <input
//           type="text"
//           className="form-control"
//           onChange={(e) => {
//             const task = e.target.value;
//             updateInput(task);
//           }}
//           value={todoInput}
//         />
//         <button className="btn btn-primary" onClick={addNewTodo}>
//           Add
//         </button>
//       </div>
//       <ul className="list-group mt-4">
//         {todoList.map((todo) => (
//           <li className="list-group-item" key={todo.id}>
//             <p>{todo.task}</p>
//             <button className="btn" onClick={() => deleteTodo(todo.id)}>
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
