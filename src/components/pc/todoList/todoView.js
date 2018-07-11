import React from 'react';
import {Checkbox,Input,Button,message} from 'antd';
import {observer} from 'mobx-react';


@observer
class TodoView extends React.Component{
    constructor(){
        super()
    }

    changeItems(e){
        console.log('todo',e.target.checked);
    }

    //添加待办事项
    addTodoItem = () => {  
        let addInput = document.querySelector("#addTodo");
        if(addInput.value != ''){
            this.props.todoStore.addTodo(addInput.value);
            addInput.value = '';//清空输入框的值
        }else{
            message.error("请输入待办事项");
        }   
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
                                        <Checkbox checked={todo.finished}  onClick={() => todo.finished = !todo.finished} onChange={this.changeItems}>
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
                    <Button type="primary" onClick={this.addTodoItem}>添加</Button>
                </div> 
            </div>
        )
    }
}

export default TodoView;