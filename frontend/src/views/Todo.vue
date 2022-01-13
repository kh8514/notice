<template>
  <div class="todo">
    <Input @addItem="addItem"/>
    <List v-bind:propsdata="ItemLists" @removeItem="removeItem"/>
    <Footer @removeAll="clearAll"/>
    <router-view></router-view>
  </div>
</template>

<script>

import Input from '@/components/Input.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'

export default {
  data(){
    return{
      ItemLists: []
    }
  },
  components : {
    Input,
    List,
    Footer
  },
  methods: {
    addItem(ItemList){
      localStorage.setItem(ItemList, ItemList)
      this.ItemLists.push(ItemList)
    },
    removeItem(ItemList, index){
      localStorage.removeItem(ItemList)
      this.ItemLists.splice(index, 1)
    },
    clearAll(){
      if(localStorage.length === 0) return
      localStorage.clear()
      this.ItemLists = [];
    }
  }
}
</script>

<style>
  .todo {
    margin-top:15px;
  }
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width:calc(100vw - 100px)
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03); 
  }

  @media screen and (max-width: 768px) {

  }
</style>
