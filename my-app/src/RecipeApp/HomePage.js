import React, {useEffect, useState, Component } from 'react';
import Button from '@material-ui/core/Button';

const Appid = () =>{
    const APP_ID = 'e7731f9a';
    const APP_KEY = 'b1c8602b232b7fdd431bceb054e67e93';
  

 useEffect(() => { getRecipes();
}, []);

 const getRecipes = async () => {
     const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
     const data = await response.json();    
     console.log(data.hits);
  
    }

    return(
        <div className="Appid">
          <form className="search-form">
              <input className="search-bar" type="text"/>
              <button className="search-button" type="submit">Search</button>
    
             
          </form>
   
 
       </div> 
    );
};


class HomePage extends Component{
  render(){
    return(
  <div className="Jumbotron">
       <h1>Plural sight A </h1>
     <p> test assignment </p>


     <Button variant="contained" color="primary">
          Hello World
      </Button>
      <Appid/>

    </div> 
    
    );
  
}
}


  export default HomePage;