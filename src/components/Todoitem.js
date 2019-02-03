import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Todoitem extends Component {
    getStyle = () => {
        if(this.props.todo.completed){
        return{
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? 'red' : 'inherit'
        }
        }

    }

  
    render() {
        const { id, title} = this.props.todo; 
        return (
            
            <div className="task_wrapper" style={this.getStyle()}> 
                
               <p>
                   <input type="checkbox" onChange={this.props.markCompleted
                    .bind(this,id)} /> 
                   {' '}
                  { title }
                  <button className='btnDelete' onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
              
              

            </div>
        );
    }
}
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Todoitem;