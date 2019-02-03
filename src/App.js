import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './components/pages/About'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
class App extends Component {
  state={
    todos:  []
  }
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
}
delTodo = (id) =>{
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}
// Add Todo List from form 
addTodo = (title) =>{
   const newTodo = {
     id : uuid.v4(),
     title,
     completed: false
   }
  this.setState({todos: [...this.state.todos,newTodo ]})

}

  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header></Header>
          <Route exact path="/" render={props =>(
            <React.Fragment>
                     <AddTodo
          addTodo={this.addTodo}
          ></AddTodo>
          <Todos
          todos={this.state.todos}
          markCompleted={this.markCompleted}
          delTodo={this.delTodo}
          ></Todos>
            </React.Fragment>
          )}></Route>
          <Route path="/about" component={About}></Route>
       
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
