import TodoStore from 'Store/todoStore';
import DelStore from 'Store/delStore';

const Store = {
    todoStore: new TodoStore(), //待办事情
    delStore: new DelStore(), //自定义删除功能
};

export default Store;
