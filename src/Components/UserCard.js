import React from 'react'

class UserCard extends React.Component {

    state = {
        user_tag: ""
    }

    changehandler = (event) => {
        this.setState({ user_tag: event.target.value})
    }

    localDeleteHandler = () => {
        this.props.deleteHandler(this.props.userCard.id)
    }

    localEditHandler = (e) => {
        e.preventDefault()
        let user_tag = this.state.user_tag
        let id = this.props.userCard.id
        this.props.editTagHandler(user_tag, id)
    }

    render() {
        return(
            <div className="card">
                <img className="card-img" src={this.props.userCard.card.image_url} alt={this.props.userCard.name} />
                <p className="user-card-p">{this.props.userCard.user_tag} </p>
                <form onSubmit={this.localEditHandler} className="tag-form" >
                    <input type="text" name="tag" placeholder="Edit your tag" value={this.state.user_tag} onChange={this.changehandler} ></input>
                    <button>✏️ </button>
                </form>
                <button className="del-btn" onClick={this.localDeleteHandler}>❌</button>
            </div>
        )
    }

}

export default UserCard

// value={this.state.user_tag} onChange={this.changehandler} 