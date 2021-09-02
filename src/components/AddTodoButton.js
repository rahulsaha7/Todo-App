import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import { AddTodos } from './AddTodos.js';

export const AddTodoButton = ({ setnewdesktopHeadings,desktopHeadings }) => {
    const [AddTodo, setAddTodo] = React.useState("none");
    
   
    


    const closeTodoOption = () => {
    AddTodo==="block" ? setAddTodo("none") : setAddTodo("block");
}
  

const updateDesktopHeadings = (TodoFormData) => {
    
    setnewdesktopHeadings(TodoFormData);
    AddTodo==="none" ? setAddTodo("block") : setAddTodo("none");

}


    return (
    <>
        <button className="AddTodoButton rounded-circle position-fixed" onClick = {()=>{AddTodo==="none" ? setAddTodo("block") : setAddTodo("none")}}>
        <i>
            <AiOutlinePlus />
        </i>
</button>
<div className="container-fluid addTodo" style={{display:AddTodo}}>
        <div className="row h-100">
            <AddTodos closeTodoOption= {closeTodoOption} updateDesktopHeadings={updateDesktopHeadings} desktopHeadings = {desktopHeadings}  />
        </div>
</div> 
</>
    )
}
