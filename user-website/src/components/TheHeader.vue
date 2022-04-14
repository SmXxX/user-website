<template>
  <div class="navbar navbar-expand-lg">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/PageLogin">Login</router-link>
    <router-link class="link" to="/PageRegister">Register</router-link>
    <router-link class="link" to="/PageCart">Cart</router-link>
    <router-link class="link" to="/PageProfile">Profile</router-link>
    <button type="submit">Logout</button>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  background-color: aqua;
  a {
    padding: 15px;
  }
}
</style>
