import React from "react"

class Header extends React.Component{
	render(props){
		return (
			<div>
				<header>
					<p>Welcome, {this.props.username}</p>
				</header>
			</div>
		)
			
	}
}


export default Header