import {
  ADD_TODO,
  DEL_TODO,
  SELECTED_ALL,
  DEL_FINISHED_TODO
} from "./mutation-types";

export default {
  //添加一条记录
  addTodo({commit},todo){
      commit(ADD_TODO,{todo})
  },

  //删除一条记录
  delTodo({commit},index){
    commit(DEL_TODO,{index})
  },

  //全选
  selectedAll({commit},value){
    commit(SELECTED_ALL,{value})
  },

  //删除已完成项
  delFinishedTodo({commit}){
    commit(DEL_FINISHED_TODO)
  }
}
