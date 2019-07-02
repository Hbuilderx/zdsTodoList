<template>
  <li @mouseover="dealShow(true)"
      @mouseleave="dealShow(false)"
      :style="{backgroundColor:bgColor}"

  >
    <label>
      <input type="checkbox" v-model="todo.finished"/>
      <span>{{todo.title}}</span>
    </label>
    <button v-show="isShowDelButton" @click="delItem">删除</button>
  </li>
</template>

<script>
    export default {
      name: "Item",
      props:{ //1.接收List传递的数据
          todo:Object,
          index:Number,
        delTodo: Function
      },
      data(){
        return{
          bgColor:"#fff",
          isShowDelButton:false
        }
      },
      methods:{
        dealShow(flag) {
          this.bgColor = flag ? '#ddd' : '#fff';
          this.isShowDelButton = flag;
        },
        delItem(){
          if(window.confirm(`确定删除${this.todo.title}吗?`)){
           // this.delTodo(this.index)
            this.$store.dispatch("delTodo",this.index);
          }
        }
      }
    }
</script>

<style scoped>
  /*列表选项*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    background-color: orangered;
    padding: 4px 10px;
    border-radius: 5px;
    color: #fff;
    border: none;
    float: right;
    margin-top: 3px;
    outline: none;
    cursor: pointer;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
