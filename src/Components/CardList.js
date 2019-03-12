import React, {Component} from 'react';
import Card from "./Card";


export default class CardsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const cards = this.props.cardsList.map((card, i) => {
            return (
                <Card key={i} status={card.status} description={card.description} name={card.responsible.name} email={card.responsible.email} duedate={card.dueDate} />
            );
        });

        return (
            <div>
                {cards}
            </div>
        );


    }
}