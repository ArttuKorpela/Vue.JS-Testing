<template>
    <div>
      {{ first_int }}, {{ second_int }}, {{ sum }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        first_int: 2,
        second_int: 3
      };
    },
    computed: {
      sum() {
        return this.first_int + this.second_int
      }
    }
  }
  </script>