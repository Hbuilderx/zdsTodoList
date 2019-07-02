<template>
    <div class="to-header">
      <input type="text" placeholder="输入任务，按回车键确认"
             v-model="title"
             @keyup.enter="addItem"
      >
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
          addTodo:Function
        },
        data(){
          return{
            title:""
          }
        },
       methods:{
          addItem(){
              //1.1判断输入是否合理
            const title=this.title.trim();
            if(!title){
              alert("输入的内容不能为空");
              return ;
            }

            //1.2生成todo对象
            const todo={title,finished:false};
            //1.3添加一条记录
            this.$store.dispatch('addTodo',todo);
            //1.4清空输入框
            this.title="";
          }
      }
    }
</script>

<style scoped>
  .todo-header{
    width: 100%;
  }
  /*头部*/
  .todo-header input {
    width: 100%;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    outline: none;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(255, 0, 0, 0.8);
    box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
  }
</style>
