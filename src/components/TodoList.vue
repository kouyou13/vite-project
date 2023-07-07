<script>
  export default {
    // data(){
    //   return {
    //     todos: [{
    //       todo_item : "リストの項目",
    //       completed : false //完了状態でtrueになる
    //     }]
    //   }
    // }
    props: {
      todos: Array,
    }
  }
</script>

<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" v-model="todo.completed" /><span :class="{'todo-done' : todo.completed}">{{ todo.todo_item }}</span>
    </li>
  </ul>
</template>