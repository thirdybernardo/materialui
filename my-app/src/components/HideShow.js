import React, { Component } from 'react';

class HideShow  extends Component{
  constructor(){
      super()
      this.state = {
          showMe:false
      }
  }
  operation() {
    this.setState({
       showMe:!this.state.showMe     
    })
  }   

  render(){
     return( 
      <div className="Jumbotron">
           {
            this.state.showMe ?  <div>Please show me</div> : null
           } 
       <button onClick={()=>this.operation()}>Click me</button>
       </div> 
    );  
    }
  }
  
  
     


export default HideShow;