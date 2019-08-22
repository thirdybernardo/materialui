import React, { Component } from 'react';
import Navbar from './Navbar';
import HideShow from './HideShow';
import UpperMenu from './UpperMenu';

class HomePage extends Component{
  render(){
    return(
  <div className="Jumbotron">
    <h1>Plural sight A </h1>
     <p> test assignment </p>
    
     <Navbar/>
     <HideShow/>
     <UpperMenu/>
    </div> 
    
    );
  
}
}


  export default HomePage;