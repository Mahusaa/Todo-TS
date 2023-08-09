import React from "react"
import classes from "./TodosItem.module.css"

const TodosItem: React.FC<{text: string}> = ({text}) => {
  return (
    <li className={classes.item}>{text}</li>
  )
}

export default TodosItem