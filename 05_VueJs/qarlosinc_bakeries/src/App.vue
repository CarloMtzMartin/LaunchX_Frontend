<template>
  <div>
    <HeaderComponent/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue"

export default {
  name: "HomeView",
  components: {
    HeaderComponent
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    margin: 0;
    background-color: #E39774;
    font-size: 1.25em;
    font-family: 'Arvo', serif;
}
</style>
