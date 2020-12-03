import React from 'react'


class Card extends React.Component {

    state = {
        user_id: this.props.currentUser,
        card_id: this.props.id,
        user_tag: ""
    }

    changehandler = (event) => {
        this.setState({ user_tag: event.target.value})
    }

    localAddHandler = () => {
        this.props.addToCollection(this.state)
        console.log(this.props)
    }

    render() {
        const { card } = this.props;
        return (
        <div className="card">
            <img src={card.image_url} alt={card.name} />
            <form onSubmit={this.localAddHandler} className="tag-form">
                <input type="text" name="tag" placeholder="Tag this card!" value={this.state.user_tag} onChange={this.changehandler} ></input>
                <button>➕</button>
                <br/>
            </form>
        </div>
        )
    }
}

export default Card;
