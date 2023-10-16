<template>
    <div>
      <h1>{{ message }}</h1>
      <ChildComponent :childMessage="message" />
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        message: 'Hello from Parent!',
      };
    },
  };
  </script>