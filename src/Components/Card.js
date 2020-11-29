import React from 'react'


class Card extends React.Component {

    render() {
        const { card } = this.props;
        return (
        <div className="card">
            <p>{card.name}</p>
            <img src={card.image_url} alt={card.name} />
        </div>
        )
    }
}

export default Card;