import React from 'react'
import Card from './Card'

class Tester extends React.Component {

    state = {
        cardsApi: []
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/cards")
        .then(resp => resp.json())
        .then(data => this.setState({ cardsApi: data}))
    }

    renderCards = () => {
        return this.state.cardsApi.map(el => <Card key={el.id} card={el} />)
      }

    render() {
        return (
            <>
        <div className="list">{this.renderCards()}</div>
        </>
        )
    }

}

export default Tester;