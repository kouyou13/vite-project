<script>
  export default{
    data(){
      return{
        title : "My New Vue Title",
        message : "Welcome to Vue",
        // textStatus : { // 動的にclass名を付ける
        //   red : true,
        // }
        isRed : true,
        user : {
          firstName : "John",
          lastName : "Smith",
          isMember : true,
        }
      }
    },
    computed: {
      fullName(){
        return this.user.firstName + ' ' + this.user.lastName;
      }
    }
  }
</script>

<template>
    <!-- <h1 v-bind:title="message" v-bind:class="textStatus">{{ title }}</h1> -->
    <h1 :title="message" :class="{red : isRed}">{{ title }}</h1>
    <h2 :title="123 * 3" :class="{red : !true}">{{ 'ようこそ'+'Vueの世界へ' }}</h2>
    <!-- <h3>{{ user.firstName + ' ' + user.lastName + "さんのデータ" }}</h3> -->
    <h3>{{ fullName}}さんのデータ</h3>
    <!-- <p>Name:{{ user.firstName + ' ' + user.lastName }}</p> -->
    <p>Name: {{ fullName }}</p>
    <!-- v-bind：属性の変更 title←messageを入れる 動的にclass要素をつける -->
    <!-- :⚪︎⚪︎⚪︎でv-bindがつけられる -->
    <p v-if="user.isMember">メンバーです</p>
</template>

<style>
  .red {
    color: red;
  }
</style>