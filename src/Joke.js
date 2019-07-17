import React from "react"

function Joke(props){
    return(
    	<div className="joked">
    		<h4 style={{display:props.question ? "block":"none"}}>Question:{props. question}</h4>
        	<h5>Answer:{props.punchline}</h5>
        	<hr/>
    	</div>
        
    )
}

export default Joke