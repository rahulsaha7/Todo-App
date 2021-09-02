import React from 'react'
import {TodoItem} from './TodoItem.js';
import {AddTodo} from './AddTodo.js'


const getFromLocalStrorage = () =>{
    let list = localStorage.getItem('todos');
    if(list){
        return JSON.parse(localStorage.getItem('todos'));
    }else{
        return [];
    }
    
}


export const TodoList = () => {
   

    const [todolist, settodolist] = React.useState(getFromLocalStrorage());

    


    const deletelist = (key) =>{
            settodolist(todolist.filter((e)=>{
                return e.key!==key;
            }))
    }

    const updatelist = (titles,key) =>{
        settodolist(todolist.filter((e)=>{
                return e.key===key ? e.title= "Rahul Saha":e.title;
        }))
    }

 

    return (
        <> 
        <AddTodo todolist = {todolist} settodolist = {settodolist} />
       

        {
            todolist.map( (Todoitems)=>{
                return <TodoItem  Todoitems = {Todoitems} key = {Todoitems.key} deletelist = {deletelist} updatelist ={updatelist} />
            } )
        }
           
        </>
    )
}
