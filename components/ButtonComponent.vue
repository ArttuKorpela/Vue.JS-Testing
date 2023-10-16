
<template>
    <h1>{{ message }}</h1>
    <div @click="handleClick()"> Try me
        <button @click.stop="doNothing()">Click me</button>
    </div>
    <div>
        <a href="https://example.com" @click.prevent="handleClick()">Don't follow link</a>
    </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.message = "Clicked";
    },
    doNothing() {
      this.message = "Nothing was done";
    }
  }, 
  data() {
    return {
      message: "Click the button!"
    };
  }
}
</script>
  