<template>
    <div>
      <h2>{{ childMessage }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      childMessage: String,
    },
  };
  </script>
  