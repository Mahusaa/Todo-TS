import React from "react"
import classes from "./TodosItem.module.css"

const TodosItem: React.FC<{text: string, onRemoveTodo: () => void}> = ({text, onRemoveTodo}) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>{text}</li>
  )
}

export default TodosItem