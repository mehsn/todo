import React, {Component} from 'react';
import {observer} from 'mobx-react'
import TodoStore from "../stores/TodoStore";

@observer
class TodoItem extends Component {
    
    onToggle=()=>{
        this.props.todo.toggle()
       
    }
    ddl= () =>{
        this.props.todo.todoDel()
    }
    render() {
        const {todo} = this.props ;
        return ( 
             
            <li className={todo.completed ? 'completed' : '' } >
                <div className="view" >

                    <input type="checkbox" className="toggle" 
                              value="on" checked={todo.completed} onChange={this.onToggle} />

                    <label> {todo.title} </label>
                    
                    <button className="destroy" onClick={ this.ddl  } />
                
                </div>
            </li>
            
        )
    }
}
export default TodoItem;
