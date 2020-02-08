import React, { Component } from 'react';
import Card from './card';

class Cards extends Component {
    //this state controlls the columns
    state = {
        cards: [
            { title: '', text: '' },
            { title: '', text: '' },
            { title: '', text: '' },
            { title: '', text: '' }
        ]
    };

    render() {
        const { cards } = this.state;
        return (
            <React.Fragment>
                {cards.map(card => {
                    return <Card title={card.title} text={card.text}></Card>;
                })}
                <button className="badge badge-pill badge-secondary">Add a card</button>
            </React.Fragment>
        );
    }
}

export default Cards;
