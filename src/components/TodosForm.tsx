import React, { useRef } from "react";

const TodosForm: React.FC<{onAddTodo: (todo: string) => void}> = ({onAddTodo}) => {
    const myInputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = myInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        };
        onAddTodo(enteredText);
        myInputRef.current!.value = "";
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Todo Input</label>
            <input type="text" id="input" ref={myInputRef}></input>
            <button type="submit">Add todo</button>
        </form>
    )
};
export default TodosForm;