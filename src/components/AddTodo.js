import React, { Component } from 'react';

class AddTodo extends Component {
    state ={
        title : '',
        person:'',
    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        

    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});

    }
    render() {
        return (
            <form 
                style={{display: 'flex'}} 
                onSubmit={this.onSubmit}
                > 
                <input
                 type="text"
                 name="title"
                 style={{flex: '10', padding: '5px'}}
                 placeholder="Type your todo here"
                 className="input_box"
                 onChange={this.onChange}
                 value={this.state.title}

                 />

                 <input 
                 type="submit"
                 name="submit"
                 className="btn"
                 style={{flex: '1'}}
                 />
            </form>
        );
    }
}

export default AddTodo;