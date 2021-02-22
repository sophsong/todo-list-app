import React from 'react'
import ToDoList from './ToDoList'

class ToDoCard extends React.Component {

  state = {
    input: ''
  }

  handleListInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleListSubmit = (event) => {
    event.preventDefault()
    this.props.addList(this.props.card.id, this.state.input)
    this.setState({
      input: ''
    })
  }

  renderLists = () => {
    // console.log(this.props)
    return this.props.card.lists.map(list => {
      return <ToDoList key={list.id} handleClickList={this.props.handleClickList} cardId={this.props.card.id} list={list}/>
    })
  }

  deleteList = () => {
    var list = this.props.card.lists.map(list=> list.id)
    console.log('delete this list', list)
    fetch(`http://localhost:3000/lists/${list[0]}`,{
      method: "DELETE"
    })
    .then(l => l.json())
    .then(data =>  {
      console.log("removed", data)
      // var newListThing = this.props.card.lists.filter((list)=> {
      //   return list.id !== list.id
      // });
      this.setState({lists: list})
    })
  }



  

  render(){
    return (
      <div id="to-do-card" className="to-do-card">
        <h4>{this.props.card.title}</h4>
        <button onClick={this.deleteList}className='card-delete-button'>X</button>
        <form onSubmit={this.handleListSubmit}>
          <input onChange={this.handleListInput} type="text" value ={this.state.input}  />
        </form>
        {this.renderLists()}
      </div>
    )
  }
}


export default ToDoCard