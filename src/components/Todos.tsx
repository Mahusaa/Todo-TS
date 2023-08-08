import React from "react";
import Todo from "../models/todo";
import TodosItem from "./TodosItem";

const Todos: React.FC<{items: Todo[]}> = ({items}) => {
    return (
        <ul>
            {items.map((item) => (
                <TodosItem key={item.id} text={item.text}/>
            ))}
        </ul>
    )
}

export default Todos