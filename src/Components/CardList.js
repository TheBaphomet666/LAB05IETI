import React, {Component} from 'react';
import Card from "./Card";


export default class CardsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const cards = this.props.cardsList.map((card, i) => {
            return (
                <Card key={i} status={card.status} description={card.description} name={card.name} email={card.email} duedate={card.duedate} />
            );
        });

        return (
            <div>
                {cards}
            </div>
        );


    }
}