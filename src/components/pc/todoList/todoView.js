import React from 'react';
import {Checkbox,Input,Button} from 'antd';
import {observer} from 'mobx-react';
import TodoStore from '../../../store/todoStore';


@observer
class TodoView extends React.Component{
    constructor(){
        super()
    }
    changeItems(e){
        console.log('todo',e.target.checked);
    }

    //添加待办事项
    addTodoItem(e){   
        this.props.todoStore.addTodo(document.querySelector("#addTodo").value);
    }

    render(){
        const todoStore = this.props.todoStore;
        return (
            <div> 
                <div style={{margin: '20px auto'}}>
                    Tasks left: {todoStore.unfinishedTodoCount?todoStore.unfinishedTodoCount:0}
                </div>
                {
                    todoStore.todos.length?
                        <ul>
                            {               
                                todoStore.todos.map((todo,index) => {
                                return(
                                    <li key={index}>
                                        <Checkbox checked={todo.finished}  onClick={() => todo.finished = !todo.finished} onChange={this.changeItems.bind(this)}>
                                            {todo.task}
                                        </Checkbox>
                                    </li>
                                )    
                            }
                            )}
                        </ul>
                    : ''         
                }  
               <div>
                    <Input id="addTodo" placeholder="请添加待办事项" style={{width: '300px',marginRight: '20px'}}/>
                    <Button type="primary" onClick={this.addTodoItem.bind(this)}>添加</Button>
                </div> 
            </div>
        )
    }
}

export default TodoView;