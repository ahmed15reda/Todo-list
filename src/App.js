import React, {Component} from 'react';
import TodoItem from './components/TodoItem/TodoItem'
import AddItem from './components/AddItem/AddItem'
import './App.css';

class App extends Component {
  
  state = {
      items : [
          {id : 1, todo_item : 'Study Math-3', date: '2/1/2021'}
      ]
  }  

  deleteItem = (id) => {
      let items = [...this.state.items];
      let i = items.findIndex(item => item.id === id);
      items.splice(i,1);
      this.setState({items: items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = [...this.state.items];
    items.push(item);
    this.setState({items: items})
  }

  componentWillMount(){
      localStorage.getItem('items') && this.setState({
          items: JSON.parse(localStorage.getItem('items'))
      })
  }

  componentWillUpdate(nextProps,nextState) {
      localStorage.setItem('items', JSON.stringify(nextState.items));
  }
    
  render(){

      return (

          <div className="App container" id="root">
              <h1 className="text-center">Todo List</h1>
              <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
              <AddItem addItem={this.addItem} />
          </div>
        
      );
    
  }
}

export default App;
 