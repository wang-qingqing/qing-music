import {observable,computed} from 'mobx';

class TodoStore {
    @observable todos = [];

    //计算没完成的待办事项的数量
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    //添加待办事项
    addTodo(task) {
        this.todos.push({
            task: task,
            finished: false
        })
    }

}

export default TodoStore;