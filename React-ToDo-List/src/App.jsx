import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import TodoDetails from "./components/todo-details";
import TodoItem from "./components/todo-item";
import classes from './styles.module.css';

function App() {

  const [loading,setLoading] = useState(false);
  const[todoList , setTodoList] = useState([]);
  const [errorMsg , setErrorMsg] = useState(null);
  const [todoDetails , setTodoDetails] = useState(null);
  const [openDialog , setOpenDialog] = useState(false);


  async function fetchDetailsOfCurrentTodo(getCurrentId){ 
   // console.log(getCurrentId);
    try {
      setLoading(true);
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentId}`);
      const details = await apiResponse.json();
  //    console.log("details",details)

      if(details){
        setTodoDetails(details);
        setLoading(false);
       setOpenDialog(true)
      }else {
      setTodoDetails(null);
      setOpenDialog(false)
      }

    } catch (e) {
        console.log(e);
        setErrorMsg('Some error occured')
    }


  }


  async function fetchListOfTodos(){
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
     // console.log("result",result)

      if(result?.todos && result?.todos?.length > 0){
        setTodoList(result?.todos);
        
        setLoading(false)
        setErrorMsg('')
      }else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg('')
      }

    } catch (e) {
        console.log(e);
        setErrorMsg('Some error occured')
    }

  } 


useEffect(()=>{
  fetchListOfTodos()
},[])
  if(loading){
    return <Skeleton variant="rectangular" width={650} height={650}/>
  }

  return (
  <div className={classes.mainWrapper}>
    <h1 className={classes.headerTitle} >Simple Todo List</h1>
    <div className={classes.todoListWrapper}>
      {
        todoList && todoList.length>0 ? (
        todoList.map(todoItem=> <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem}></TodoItem>) 
       ) : null
      }
    </div>
    <TodoDetails setTodoDetails={setTodoDetails} setOpenDialog={setOpenDialog} openDialog={openDialog} todoDetails={todoDetails}></TodoDetails>
  </div>
  )
}


export default App
