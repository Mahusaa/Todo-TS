import React, { useContext } from "react";
import TodosItem from "./TodosItem";
import classes from "./Todos.module.css"
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todoCtx.items.map((item) => (
                <TodosItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    )
}
export default Todos