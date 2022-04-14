<template>
  <div id="nav">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-size: 18px;
    font-weight: bold;
    color: #2c3e50;
    padding-left: 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
