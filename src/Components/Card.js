import React from 'react'


class Card extends React.Component {

    render() {
        const {card} = this.props;
        return (
        <div>
            <p>{card.name}</p>
            <img src={card.image_url} />
        </div>
        )
    }
}

export default Card;