import React from "react"
import TodosItem from "./TodosItem"
import todosData from "./todosData"

function App() {
    const todoComponents = todosData.map(item => 
    <TodosItem key={item.id} text={item.text}/> )
    return (
        <div className="todo-list">
            {todoComponents}
        </div>
    )
}

export default App