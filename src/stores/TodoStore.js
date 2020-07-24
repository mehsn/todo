import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {

    @observable todos = [] ;
    
    @observable todosReturn = this.todos ;

    @observable showModel = "all"  ;
    
    @observable activeNum = 0 ;

    lastID=0

    @action
    itemsActive(){
        let d = 0;
        for (let x = 0; x < this.todos.length; x++) {
                
            if(this.todos[x].completed !== true){
                d++ ;                           
            }
            
        }
        this.activeNum=d
    }
    @action
    addTodo(title){
        this.todos.push(new TodoModel( this , title , false , this.lastID ++))
        this.itemsActive()
    }

    @action
    changeReturn(type){
        this.todosReturn = [];
        if(type === "all"){
            this.todosReturn = this.todos
            this.showModel = "all"

        }else if(type === "active"){
            this.showModel = "active"

            for (let x = 0; x < this.todos.length; x++) {
                
                if(this.todos[x].completed !== true){
                    this.todosReturn.push(this.todos[x]);
                    
                }
                console.log(x)

            } 
            
        
        }else if("left"){
            this.showModel = "left"

            for (let x = 0; x < this.todos.length; x++) {
                
                if(this.todos[x].completed === true){
                    this.todosReturn.push(this.todos[x]);
                } 

            } 

        } 
        
    }

    

    @action
    completedDelete(){  
         for (var i = 0; i < this.todos.length; i++) {
         
             if (this.todos[i].completed === true ) {
                 
                this.todos.splice(i, 1);
                 i--;
             }else{
                 console.log("nof fund")
             }
         } 
    }
 


}

const todoStore = new TodoStore()
export default todoStore
