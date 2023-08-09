import React from "react";
import Todo from "../models/todo";
import TodosItem from "./TodosItem";
import classes from "./Todos.module.css"

const Todos: React.FC<{items: Todo[]}> = ({items}) => {
    return (
        <ul className={classes.todos}>
            {items.map((item) => (
                <TodosItem key={item.id} text={item.text}/>
            ))}
        </ul>
    )
}
export default Todos