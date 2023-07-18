<script>
  import MyButton from '../basics/MyButton.vue'

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
    },
    components: {
      MyButton
    },
    methods: {
      openEditTodo(todo){
        this.$router.push('/edit')
      },
    },
  }
</script>

<template>
  <ul>
    <li v-for="todo in todos">
      <input type="checkbox" v-model="todo.completed" /><span :class="{'todo-done' : todo.completed}">{{ todo.todo_item }}</span>
      <MyButton @click="openEditTodo(todo)">編集</MyButton>
    </li>
  </ul>
</template>