import React from 'react';
import TodoView from 'Components/pc/todoList/todoView';
import {Layout} from 'antd';
import Store from 'Store/store';

import "Style/pc/index.scss";

const {Footer} = Layout;

const todoStore = Store.todoStore;
export default class PCTodoItems extends  React.Component{
    render(){
        return (          
            <Layout className="main_area">
                <TodoView todoStore={todoStore} />
            </Layout>         
        ) 
    }
}
