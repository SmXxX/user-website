<template>
  <div class="PageLogin" style="background-color: #000">
    <!-- <form @submit.prevent="handleSubmit()"> -->
    <h3 style="color: white">Login</h3>
    <div class="form-group">
      <label for="username">Username: </label>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        id="username"
        name="username"
      />
    </div>

    <div class="form-group">
      <label for="password">Password: </label>

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
    </div>
    <input
      type="submit"
      class="btn"
      v-on:click="handleSubmit()"
      value="Login"
    />
    <!-- </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageLogin",
  data() {
    return {
      getuser: "http://localhost:3000/getuservue",
      updatetoken: "http://localhost:3000/updatetokenvue",
      username: "",
      password: "",
    };
  },

  created() {},
  methods: {
    async handleSubmit() {
      if (
        document.getElementById("username").value === "" ||
        document.getElementById("password").value === ""
      ) {
        alert("Please fill all fields");
        return false;
      }
      try {
        let result = await axios.post(this.getuser, {
          user_name: this.username,
          user_password: this.password,
        });
        if (
          result.data[0].user_name != this.username ||
          result.data[0].user_password != this.password
        ) {
          alert("Wrong credentials, please try again!");
          return false;
        }
        if (
          result.data[0].user_name == this.username &&
          result.data[0].user_password == this.password
        ) {
          await axios.put(this.updatetoken, {
            user_id: result.data[0].user_id,
            token: 1,
          });
          localStorage.setItem("token", "1");
          var value = {
            id: result.data[0].user_id,
            token: 1,
          };
          localStorage.setItem("token", JSON.stringify(value));
          localStorage.getItem("token");
          this.$router.push({ path: "/" });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-group {
  margin: 10px;
}
.btn {
  margin: 15px 0 15px 0;
  padding: 10px;
  font-size: 15px;
  color: white;
  background: #5f9ea0;
  border: none;
  border-radius: 5px;
}
label {
  color: white;
}
</style>
