import React from 'react'
import Card from './Card'

class Homepage extends React.Component {

    state = {
        cardsApi: []
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/cards")
        .then(resp => resp.json())
        .then(data => this.setState({ cardsApi: data }))
    }

    renderCards = () => {
        return this.state.cardsApi.map(cardObj => <Card key={cardObj.id} card={cardObj} />)
      }

    render() {
        return (
        <div className="list">
            {this.renderCards()}
        </div>
        )
    }

}

export default Homepage;