import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../Components/Card'
import CardSearchForm from '../Components/CardSearchForm'

class CardContainer extends React.Component {

    state = {
        cardsApi: [],
        searchValue: ""
    }

    searchHandler = (event) => {
        this.setState({searchValue: event.target.value })
      }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/cards")
        .then(resp => resp.json())
        .then(data => this.setState({ cardsApi: data }))
    }

    renderCards = () => {
        let filteredArray = this.state.cardsApi.filter(card => card.name.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
        return filteredArray.map(cardObj => <Card key={cardObj.id} card={cardObj} />)
      }

    render() {
        return (
        <div className="list">
            <CardSearchForm changeHandler={this.searchHandler} searchValue={this.state.searchValue}/>
            {this.renderCards()}
        </div>
        )
    }

}

export default withRouter(CardContainer);