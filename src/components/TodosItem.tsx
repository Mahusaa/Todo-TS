import React from "react"

const TodosItem: React.FC<{text: string}> = ({text}) => {
  return (
    <li>{text}</li>
  )
}

export default TodosItem