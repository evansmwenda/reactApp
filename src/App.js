import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import MainContent from "./MainContent"
import ContactCard from "./ContactCard"

/*<Header/>
       // <MainContent/> */

function App() {
  return (
    <div>
       

       <ContactCard 
      	contact={{name:"Mr. Anderson",email:"mr.whiskaz@catnap.meow",
      	imageUrl:"http://placekitten.com/300/300",phone:"07487855645",role:"99"}}
      	/>

      <ContactCard 
        contact={{name:"Mr. ContactCard",email:"contactcard@catnap.meow",
      	imageUrl:"http://placekitten.com/300/300",phone:"079805645",role:"98"}}/>

      <ContactCard 
      	contact={{name:"Mr. whiteson",email:"whiteson@catnap.meow",
      	imageUrl:"http://placekitten.com/300/300",phone:"079854125",role:"97"}}/>

      	<ContactCard 
		contact={{name:"Mr. github",email:"github@catnap.meow",
      	imageUrl:"http://placekitten.com/300/300",phone:"0748895645",role:"96"}}/>

      	<ContactCard 
		contact={{name:"Mr. Root",email:"root@scsi.ir",
      	imageUrl:"https://via.placeholder.com/300",phone:"0748895645",role:"95"}}/>
      
    </div>
  );
}

export default App;