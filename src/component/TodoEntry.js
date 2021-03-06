import React, {Component} from 'react';
import {observer} from 'mobx-react'
import TodoStore from "../stores/TodoStore";
import todoStore from '../stores/TodoStore';

@observer
class TodoEntry extends Component {
    state = { value : ""  }

    handleKeyDown = event => {
        if(event.keyCode !== 13 || this.state.value === '' ){
            return
        }else{
            event.preventDefault();
            todoStore.addTodo(this.state.value)
            this.setState({
                value: ''
            }) 
        }
    }
    render() {
        return ( 
            
            <header className="header" >
                <h1>todo</h1>
                <input
                    value={this.state.value}
                    onChange={ event => this.setState({ value :event.target.value }) } 
                    onKeyDown={event=> this.handleKeyDown(event) }
                    type="text"
                    className="new-todo"
                    placeholder="what ?"
                />

            </header>
        )
    }
}
export default TodoEntry;
