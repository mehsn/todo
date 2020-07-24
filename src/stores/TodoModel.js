import {observable, action} from 'mobx'
import TodoStore from "../stores/TodoStore";

export default class TodoModel {
   store
    id 
   @observable title
   @observable completed
   
   constructor(store , title ,completed , id){
       this.title = title
       this.completed =completed
       this.id =id
       this.store =store
    }

   @action
   toggle(){
       this.completed = !this.completed ;
       TodoStore.itemsActive()
 
   }
   
   @action
   todoDel(){  
        for (var i = 0; i < TodoStore.todos.length; i++) {
           
            if (TodoStore.todos[i].id === this.id ) {
                
                TodoStore.todos.splice(i, 1);
                console.log("delete")
                i--;
            }else{
                console.log("nof fund")
            }
        } 
        TodoStore.itemsActive()

   }



}
