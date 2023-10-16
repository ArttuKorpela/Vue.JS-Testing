<template>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ index }}: {{ item }}
        </li>
      </ul>
      <button @click="changeList(['Grapes', 'Pineapple', 'Strawberry'])">Change List</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const items = ref(["Apple", "Banana", "Kiwi", "Orange"]);
  
      const changeList = (list) => {
        // Update the items ref with the new list
        items.value = list;
      };
  
      return {
        items,
        changeList,
      };
    },
  };
  </script>
  