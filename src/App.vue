<!-- https://qiita.com/TakahiRoyte/items/9033b61a0e528324da4c -->
<script>
  // import Home from '@/components/pages/Home.vue';

  // export default {
  //   components: {
  //     Home
  //   },
  // }
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/edit">Edit</router-link>
  <h1>My To Do List</h1>
  <!-- <Home /> -->
  <router-view />
</template>

<style>
  body{
    background-color: #eee;
  }
</style>