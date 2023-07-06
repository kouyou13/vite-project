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
        input : {
          firstName : "",
          lastName : "",
          isMember : true,
        },
        users : [{
          firstName : "John",
          lastName : "Smith",
          isMember : true,
        },
        {
          firstName : "Taro",
          lastName : "Shinjuku",
          isMember : false,
        },
        {
          firstName : "Hanako",
          lastName : "Shibuya",
          isMember : true,
        }
      ]
      }
    },
    computed: {
      fullName(){
        return this.user.firstName + ' ' + this.user.lastName;
      }
    },
    methods : {
      addUser(){
        this.users.push(this.input)
        this.input = {
          firstName : '',
          lastName : '',
          isMember : true,
        }
      },
    },
  }
</script>

<template>
    <!-- <h1 v-bind:title="message" v-bind:class="textStatus">{{ title }}</h1> -->
    <h1 :title="message" :class="{red : isRed}">{{ title }}</h1>
    <h2 :title="123 * 3" :class="{red : !true}">{{ 'ようこそ'+'Vueの世界へ' }}</h2>
    <input type="text" v-model="input.firstName" />
    <input type="text" v-model="input.lastName" />
    <input type="checkbox" v-model="input.isMember" />
    <button v-on:click="addUser">ユーザー追加</button>
    <!-- ボタンを押した時に処理を行う -->
    <h2>ユーザーデータ</h2>
    <!-- <h3>{{ user.firstName + ' ' + user.lastName + "さんのデータ" }}</h3> -->
    <div v-for="user in users">
      <!-- <h3>{{ fullName}}さんのデータ</h3> -->
      <p>Name:{{ user.firstName + ' ' + user.lastName }}</p>
      <!-- <p>Name: {{ fullName }}</p> -->
      <!-- v-bind：属性の変更 title←messageを入れる 動的にclass要素をつける -->
      <!-- :⚪︎⚪︎⚪︎でv-bindがつけられる -->
      <p v-if="user.isMember">メンバーです</p>
      <p v-else>メンバーではありません</p>
      <!-- isMemberがtrueなら上の処理 falseなら下の処理 -->
    </div>
</template>

<style>
  .red {
    color: red;
  }
</style>