import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){

    return(
        <div>
            {props.todoList.map((item, index)=><TodoItem key={index} item={item} />)}
        </div>
    )
}
export default TodoBoard