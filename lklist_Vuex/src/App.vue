<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/>
    </div>
  </div>
</template>

<script>
//1.引入组件
import Header from "./components/Header"
import List from "./components/List"
import Item from "./components/Item"
import Footer from "./components/Footer"

  export default {
    name:"App",
    //2.映射组件
    components:{
      Header,
      List,
      Item,
      Footer
    }
  }

</script>

<style scoped>
  /*主面板*/
  .todo-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #f5f5f5;
    border: 1px solid transparent
  }
  .todo-container .todo-wrap {
    width: 96%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #ffffff;
    margin: 10px auto;
    border: 1px solid transparent
  }
</style>
