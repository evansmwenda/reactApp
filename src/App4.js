import React from "react"
import TodosItem from "./TodosItem"
import todosData from "./todosData"

class App extends React.Component {
	constructor(){
		super()
		this.state={
			todos:todosData
		}
	}
	render(){
		const todoComponents = this.state.todos.map(item => <TodosItem key={item.id} item={item}/> )
	    return (
	        <div className="todo-list">
	            {todoComponents}
	           <br/>
				<br/>
				<img src="https://www.fillmurray.com/200/100"/>
				<br/>
				<br/>
				<button onClick={function (){alert("i was clicked");console.log("i was clicked");}}>Click Me Pretty Pleas</button>
	        </div>
	    )
	}




    
}





export default App