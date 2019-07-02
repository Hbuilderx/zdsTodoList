import {
  ADD_TODO,
  DEL_TODO,
  SELECTED_ALL,
  DEL_FINISHED_TODO
} from "./mutation-types";

export default {
  //添加一条记录
  [ADD_TODO](state,{todo}){
    state.todos.unshift(todo);
  },
  //删除一条记录
  [DEL_TODO](state,{index}){
    state.todos.splice(index,1);
  },

  //全选
  [SELECTED_ALL](state,{value}){
    state.todos.forEach(todo=>{
      todo.finished=value;
    })
  },

  //删除已选项
  [DEL_FINISHED_TODO](state){
    state.todos = state.todos.filter(todo => !todo.finished)
  },

}

