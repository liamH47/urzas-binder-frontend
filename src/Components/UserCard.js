import React from 'react'

class UserCard extends React.Component {

    localDeleteHandler = () => {
        this.props.deleteHandler(this.props.userCard.id)
    }

    render(){
        return(
            <div className="card">
                <img src={this.props.userCard.card.image_url} alt={this.props.userCard.name} />
                <p>{this.props.userCard.user_tag} </p>
                <button onClick={this.localDeleteHandler}> Remove From Collection</button>
            </div>
        )
    }

}

export default UserCard