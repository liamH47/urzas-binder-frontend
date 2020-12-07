import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../Components/Card'
// import CardSearchForm from '../Components/CardSearchForm'

class CardContainer extends React.Component {

    state = {
        currentUser: this.props.currentUser
    }


    
    renderCards = () => {
        console.log(this.props.cardsApi)
        let filteredArray = this.props.cardsApi.filter(card => card.name.toLowerCase().includes(this.props.searchValue.toLowerCase()))
        return filteredArray.map(cardObj => <Card currentUser={this.state.currentUser} id={cardObj.id} key={cardObj.id} card={cardObj} addToCollection={this.props.addToCollection} />)
      }

    render() {
        return (
        <div className="cards-area">
           
            <br/>
            {this.renderCards()}
        </div>
        )
    }

}

export default withRouter(CardContainer);
