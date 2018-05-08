import {observable,computed} from 'mobx';

class TodoStore {
    @observable todos = [];

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            finished: false
        })
    }

}

export default TodoStore;