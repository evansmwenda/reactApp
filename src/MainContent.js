import React from "react"
import TodoItem from "./TodoItem"
function MainContent(){
	const date= new Date()
	const hours=date.getHours()
	const styles={
		fontSize:45
	}

	let timeofDay 

	if(hours<12){
		timeofDay="morning"
		styles.color="#800080"
	}else if (hours>12 && hours<17){
		timeofDay="afternoon"
		styles.color="#00FF00"
	}else{
		timeofDay="night"
		styles.color="#A52A2A"
	}
	return(
		<div className="todo-list"> 
			<main>

				<p style={styles}>Good {timeofDay}</p>
				  <TodoItem/>
				  <TodoItem/>
				  <TodoItem/>
				  <TodoItem/>
				  <TodoItem/>
			</main>
		</div>)
}

export default MainContent