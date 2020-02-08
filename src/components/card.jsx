import React, { Component } from 'react';

class Card extends Component {
    state = {
        title: 'tmp card', //TODO: set back to blank and uncomment the methods after you're finished 
        text: 'tmp descr'
    };

    inputCardTitle = () => {
        console.log('inputCardTitle method called');
        console.log(this.props.cards);
        this.title = prompt('Enter the title of the card: ');
    };

    inputCartText = () => {
        console.log('inputCardText called');
        this.text = prompt("Enter the card's text"); //TODO: enter tags right in the browser
    };


    //(this.inputCardTitle(), this.title)
    //(this.inputCartText(), this.text)

    render() {
        return (
            <div>
                <div
                    className="card"
                    style={{ width: 300, marginLeft: 15, marginTop: 15 }}
                >
                    <p className="card-title">
                        {this.state.title} 
                    </p>
                    <p className="card-text">
                        {this.state.text}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;
