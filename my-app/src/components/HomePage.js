import React, { Component } from 'react';
import Navbar from './Navbar';

class HomePage extends Component{
  render(){
    return(
  <div className="Jumbotron">
    <h1>Plural sight A </h1>
     <p> test assignment </p>
    
     <Navbar/>
     <HideShow/>
    </div> 
    
    );
  
}
}


  export default HomePage;