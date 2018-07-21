import TodoStore from 'Store/todoStore';
import DelStore from 'Store/delStore';
import UserCardStore from 'Store/userCardStore';

const Store = {
    todoStore: new TodoStore(), //待办事情
    delStore: new DelStore(), //自定义删除功能
    userCardStore: new UserCardStore(),//用户信息
};

export default Store;
