import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css'; 
import TodoEntry from "./component/TodoEntry";
import TodoItems from "./component/TodoItems";
import TodoFooter from "./component/TodoFooter";

@observer
class App extends Component {
    render() {
        return (
        <div id="App" >
            <div id="todoapp" className="todoapp">
                               
                                
                <TodoEntry />
                <TodoItems />
                <TodoFooter />                 
                
             </div>   
        </div>
        )
    }
}
export default App;
