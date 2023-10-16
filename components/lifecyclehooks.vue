<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
  
  export default {
    setup() {
      const message = ref('Default');
  
      // Lifecycle Hooks
      onBeforeMount(() => {
        message.value = 'Before Mount Hook';
      });
  
      onMounted(() => {
        message.value = 'Mounted Hook';
      });
  
      onBeforeUpdate(() => {
        message.value = 'Before Update Hook';
      });
  
      onUpdated(() => {
        message.value = 'Updated Hook';
      });
  
      onBeforeUnmount(() => {
        message.value = 'Before Unmount Hook';
      });
  
      onUnmounted(() => {
        message.value = 'Unmounted Hook';
      });
  
      return {
        message,
      };
    },
  };
  </script>
  