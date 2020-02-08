import React, { Component } from 'react';
import Cards from './cards';

class Column extends Component {
    state={
        id: 0
    };

    styles = {
        backgroundColor: "grey",
        
    }
      //columns controll rows so you should move the add a card button to cards
    render() {
        return ( 
            <div style={this.styles}>
                <Cards></Cards>
                
            </div> 
            );    
    }
}
 
export default Column;

