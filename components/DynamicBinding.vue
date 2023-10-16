<template>
    <div>
      <h1 :style="{ color: textColor }">{{ message }}</h1>
      <button @click="changeColor">Change Color</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue!',
        textColor: 'black',
      };
    },
    methods: {
      changeColor() {
        this.textColor = 'blue';
      },
    },
  };
  </script>