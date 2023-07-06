<script>
  export default {
    data(){
      return {
        newToDotext : '',
        input : {
          todo_item : "",
          completed : false
        },
        todos : [
          // {
          //   todo_item : "リストの項目",
          //   completed : false 完了状態でtrueになる
          // }
        ],
        todoDone : true,
      }
    },
    methods:{
      addList(){
        if(this.newToDotext == ''){
          alert('未入力です')
        }
        else{
          this.todos.push({
            todo_item : this.newToDotext,
            completed : false
          })
        }
        this.newToDotext = ''
      },
      delComplete(){
        this.todos = this.todos.filter((todo) => todo.completed == false)
      }
    }
  }
</script>

<template>
  <h1>My To Do List</h1>
  <input type="text" v-model="newToDotext">
  <button v-on:click="addList">追加</button>
  <button v-on:click="delComplete">完了済みを削除する</button>
  <ul>
    <div v-if="todos.length == 0">
      <li>ToDoがまだありません！</li>
    </div>
    <div v-else>
      <div v-for="todo in todos">
        <li><input type="checkbox" v-model="todo.completed"><span v-bind:class="{todoDone : todo.completed}">{{ todo.todo_item }}</span></li>
      </div>
    </div>
  </ul>
</template>

<style>
  body{
    background-color: #eee;
  }

  .todoDone{
    text-decoration: line-through;
  }

</style>