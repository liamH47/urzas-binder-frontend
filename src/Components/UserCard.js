import React from 'react'

class UserCard extends React.Component {


    render(){
        return(
            console.log(this.props),
            <div className="card">
                <img src={this.props.userCard.card.image_url} />
                <p>{this.props.userCard.user_tag} </p>
                <p>cards will go here</p>
            </div>
        )
    }

}

export default UserCard