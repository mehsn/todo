import React, {Component} from 'react';
import {observer} from 'mobx-react'
import TodoItems from "./TodoItems";
import TodoStore from '../stores/TodoStore';

@observer
class TodoFooter extends Component {
     

    allItems(){ 
        TodoStore.setShowModel("all") ;
    }   
    activeItems(){
        TodoStore.setShowModel("active") ;
    }
    leftItems(){ 
        TodoStore.setShowModel("left") ;
    }

    completedDelete(){
        TodoStore.completedDelete()
    }


    render() {

               return ( 
            <footer class="footer" data-reactid=".0.2">
                <span class="todo-count" data-reactid=".0.2.0">
                    <strong data-reactid=".0.2.0.0"> 
                    </strong>
                    <span data-reactid=".0.2.0.1">  {TodoStore.activeNum }   </span>
                    <span data-reactid=".0.2.0.2">items</span>
                    <span data-reactid=".0.2.0.3"> Active</span>
                </span>
                <ul class="filters" data-reactid=".0.2.1">
                    <li data-reactid=".0.2.1.0">
                        <a href="#/" class={TodoStore.showModel==="all" ? "selected" : "" } onClick={this.allItems} data-reactid=".0.2.1.0.0">{TodoStore.todos.length }  All</a>
                    </li>
                    
                    <span data-reactid=".0.2.1.1"> </span>
                    
                    <li data-reactid=".0.2.1.2">
                        <a href="#/active" class={TodoStore.showModel==="active" ? "selected" : "" } onClick={this.activeItems} data-reactid=".0.2.1.2.0">Active</a>
                    </li>
                    
                    <span data-reactid=".0.2.1.3"> </span>
                    
                    <li data-reactid=".0.2.1.4">
                        <a href="#/completed" class={TodoStore.showModel==="left" ? "selected" : "" } onClick={this.leftItems}  data-reactid=".0.2.1.4.0">Completed</a>
                    </li>

                        <li data-reactid=".0.2.1.0">
                        <button style={{float:"right",marginRight:"5px",cursor:"pointer"}} onClick={this.completedDelete} data-reactid=".0.2.1.0.0"> Completed delete </button>
                    </li>
                    
                 </ul>
            </footer>

        )
    }
}
export default TodoFooter;
