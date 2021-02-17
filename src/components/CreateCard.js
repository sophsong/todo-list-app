import React from 'react'

class CreateCard extends React.Component {

  state = {
    input: ''
  }

  handleInput = (event) => {
    event.persist()
    this.setState({
      input: event.target.value
    })
  }

  handleNewCard = (event) => {
    event.preventDefault()
    this.props.createNewCard(this.state.input)
  }

  handleReset = () => {
    this.setState({
      input: ''
    })
  }

  render(){
    return (
      <form onSubmit={this.handleNewCard} id='new-card-form-id'className="new-card-form">
        <h4>Create Card</h4>
        <input onChange={this.handleInput} className="new-card-input" type="text" placeholder ='Plese name your To Do list'value={this.state.input} />
        <input onClick={this.handleReset} type="reset" value="Reset" />        
        <input className="new-card-input" type="submit" value="Create" />
      </form>
    )
  }
}

export default CreateCard;