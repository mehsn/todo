import React, {Component} from 'react';
import {observer} from 'mobx-react'
import TodoItem from "./TodoItem";
import TodoStore from '../stores/TodoStore';

@observer
class TodoItems extends Component {
 

    render() {
        return ( 
        <section className="main" >
            <ul className="todo-list" >
                {
                    TodoStore.todos.map(todo =>{
                        console.log(TodoStore.showModel)

                        if(TodoStore.showModel === "all"){
                            
                            return( <TodoItem todo={todo} /> )

                        }else if(TodoStore.showModel === "active"){
                            if(todo.completed !== true){ 
                                return( <TodoItem todo={todo} /> )

                            }
                        }else if(TodoStore.showModel === "left"){
                           
                            if(todo.completed === true){ 
                                return( <TodoItem todo={todo} /> )

                            }
                         }   
                     
                    })
                }
              
            </ul>

        </section>

        )
    }
}
export default TodoItems;
