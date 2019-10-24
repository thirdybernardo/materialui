import React, { Component } from 'react';
import Navbar from './Navbar';
import HideShow from './HideShow';
import UpperMenu from './UpperMenu';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/SingleRoom';


class HomePage extends Component{
  render(){
    return(
  <div className="Jumbotron">
    <h1>Plural sight A </h1>
     <p> test assignment </p>
    
     <Navbar/>
     <Home/>
     <Rooms/>
     <SingleRoom/>
     <HideShow/>
     <UpperMenu/>
    </div> 
    
    );
  
}
}


  export default HomePage;