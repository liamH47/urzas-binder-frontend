import React from 'react'


class Card extends React.Component {

    state = {
        user_id: this.props.currentUser,
        card_id: this.props.id,
        user_tag: ""
    }

    localAddHandler = () => {
        this.props.addToCollection(this.state)
        console.log(this.props)
    }

    render() {
        const { card } = this.props;
        return (
        <div className="card">
            <p>{card.name}</p>
            <img src={card.image_url} alt={card.name} />
            <button onClick={this.localAddHandler}>Add To Collection</button>
        </div>
        )
    }
}

export default Card;
//add button with callback all the way back up to app that will make a post to /usercards