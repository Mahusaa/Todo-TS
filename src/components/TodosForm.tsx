import React, { useContext, useRef } from "react";
import classes from "./TodosForm.module.css"
import { TodosContext } from "../store/todos-context";

const TodosForm: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const myInputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = myInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        };
        todoCtx.addTodo(enteredText);
        myInputRef.current!.value = "";
    }
    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <label htmlFor="input">Todo Input</label>
            <input type="text" id="input" ref={myInputRef}></input>
            <button type="submit">Add todo</button>
        </form>
    )
};
export default TodosForm;