import React from 'react';
import PCHeader from '../pc_header';
import TodoView from '../todoList/todoView';
import {Layout} from 'antd';
import Store from '../../../store/store';

import "../../../style/pc/index.scss";

const {Footer} = Layout;

const todoStore = new Store.todoStore();
export default class PCTodoItems extends  React.Component{
    render(){
        return (          
            <Layout className="main_area">
                <TodoView todoStore={todoStore} />
            </Layout>         
        ) 
    }
}
