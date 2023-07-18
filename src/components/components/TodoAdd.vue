<script>
  import MyButton from '@/components/basics/MyButton.vue'

  export default {
    components: {
      MyButton,
    },
    data(){
      return{
        newToDotext : '',
      }
    },
    // emit : ['delete-done', 'add-todo'], //emetでeventを発生(event名:delete-done)
    methods : {
      todoAdd(){
        this.$emit('add-todo', this.newToDotext)
        this.newToDotext = ''
      },
    }
  }
</script>

<template>
  <input type="text" v-model="newToDotext">
  <!-- slotを利用 -->
  <MyButton v-on:click="todoAdd">追加<img src="@/assets/icon-plus.svg" alt="" height="10"></MyButton>
  <MyButton v-on:click="$emit('delete-done')">完了済みを削除する</MyButton>
</template>