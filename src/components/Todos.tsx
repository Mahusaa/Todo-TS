import React from "react"

const Todos: React.FC<{items: string[]}> = ({items}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default Todos