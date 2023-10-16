<template>
    <div>
      <button @click="increment">increment</button>
      
  
      <div v-if="count === 0">Nothing</div>
      <div v-else-if="count === 1">Button has been pressed once</div>
      <div v-else>Button has been pressed multiple times</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: '',
        count: 0
      };
    },
    methods: {
      increment() {
        this.count += 1;
      }
    }
  };
  </script>
  