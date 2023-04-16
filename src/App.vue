<template>
  <div id="app">
      <Login></Login>
  </div>
</template>

<script>
import Login from './views/Login.vue';

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>


<style>
body{
    margin: 0;
  background-color: #e1e1e1;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}

li {
    list-style-type: none;
}
</style>
