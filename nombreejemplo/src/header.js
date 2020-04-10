import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  
  
    render() {
      return (
    
          <div className="App-header" onClick={volverArriba}>
          <h1>SportsConnection</h1>
          </div>
          
        
  
      
      );
    }
  }
  function volverArriba() {

    window.scrollTo(0, 0); 
  
  }

  export default Header;