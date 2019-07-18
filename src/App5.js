import React from "react"
import Header from "./Header"
import Greeting from"./Greeting"


class App extends React.Component{
	constructor(){
		super()
		this.state={
			answer:"Yes",
			name:"evans mwenda - God's child",
			isLoggedIn:true 
		}
	}




	render(){
		return(
			<div>
				<Header username={"evans"}/>
				<Greeting />
				<h1>Is state important to know?</h1>
				<p>{this.state.answer}</p>
				<p>My Name is :{this.state.name}</p>
				<p>You are currently logged {this.state.isLoggedIn ? "in":"out"} </p>
			</div>
			)
	}
}

export default App