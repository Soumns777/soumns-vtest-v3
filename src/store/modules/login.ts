import { ITodoList, ITodo, IPlogin } from './../../libs/types';
import { defineStore } from 'pinia';

interface IPerson {
  userName: string;
  password: string;
}

const useUser = defineStore('User', {
  // arrow function recommended for full type inference
  state: (): IPlogin => {
    return {
      user: {
        userName: 'iu',
        password: '19',
      },
      todoList: [] as ITodoList,
      tid: 1,
    };
  },
  getters: {
    firstName: () => 'stephen',
    nextName: () => 'curry',
  },
  actions: {
    changeName(user: IPerson) {
      this.user = user;
      console.log('🌈 pinia响应式actions', this.user);
    },

    addTodo(content: string): void {
      const todo: ITodo = {
        id: this.tid,
        content: content,
        status: false,
      };

      this.todoList.unshift(todo);

      this.tid++;
    },

    deleteTodo(tid: number): void {
      let idx = this.todoList.findIndex((item) => item.id == tid);
      this.todoList.splice(idx, 1);
    },

    sort(tid: number): void {
      let idx = this.todoList.findIndex((item) => item.id == tid);
      let content = this.todoList[idx].content;
      this.todoList.splice(idx, 1);
      this.tid++;
      this.todoList.push({
        id: this.tid,
        content,
        status: true,
      });
    },
  },
});

export default useUser;
