<template>
    <div>
      <button @click="increment">Increment</button>
      <div>{{ message }} {{ count }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0,
        message: "Click the button!"
      };
    },
    watch: {
      count(newVal) {
        if (newVal > 5) {
          this.message = "Limit reached!";
        } else {
          this.message = `Count is: ${newVal}`;
        }
      }
    },
    methods: {
      increment() {
        this.count += 1;
      }
    }
  }
  </script>