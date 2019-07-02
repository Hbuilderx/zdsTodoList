<template>
    <ul class="todo-main">

      <!--2.遍历数据,并将todo和index传递给item-->
        <Item v-for="(todo,index) in $store.state.todos"
              :key="index"
              :index="index"
              :todo="todo"
        />
    </ul>
</template>

<script>
  import Item from "./Item"

    export default {
      name: "List",
      //1.List接收数据App传递的数据
      props:{
        todos:Array
      },
      components:{
          Item
      }
    }
</script>

<style scoped>
  /*列表*/
  .todo-main {
    width: 100%;
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    margin: 10px auto
  }
</style>
