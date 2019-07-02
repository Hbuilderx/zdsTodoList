<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{finishedCount}}件</span>/共{{totalCount}}件
    </span>
    <button @click="$store.dispatch('delFinishedTodo')">清除已完成任务</button>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "Footer",
        computed:{
          //使用延展操作符
          ...mapGetters(["finishedCount","totalCount"]),
          isCheck:{
            get(){
                return this.$store.getters.isCheckedAll
            },
            set(value){

                this.$store.dispatch('selectedAll', value)
            }
          },
        }
    }
</script>


<style scoped>
  /*尾部*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
    height: 30px;
    border: 0;
    border-radius: 4px;
    background-color: #FF4500;
    color: white
  }
</style>
