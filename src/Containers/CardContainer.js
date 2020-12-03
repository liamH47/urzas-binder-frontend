import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../Components/Card'
import CardSearchForm from '../Components/CardSearchForm'

class CardContainer extends React.Component {

    state = {
        searchValue: "",
        currentUser: this.props.currentUser
    }

    searchHandler = (event) => {
        this.setState({searchValue: event.target.value })
      }
    
    renderCards = () => {
        console.log(this.props.cardsApi)
        let filteredArray = this.props.cardsApi.filter(card => card.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return filteredArray.map(cardObj => <Card currentUser={this.state.currentUser} id={cardObj.id} key={cardObj.id} card={cardObj} addToCollection={this.props.addToCollection} />)
      }

    render() {
        return (
        <div className="cards-area">
           <CardSearchForm changeHandler={this.searchHandler} searchValue={this.state.searchValue}/>
            <br/>
            {this.renderCards()}
        </div>
        )
    }

}

export default withRouter(CardContainer);

//get user props from app in here
//maybe take beyonce css to create a new column for added cards
//