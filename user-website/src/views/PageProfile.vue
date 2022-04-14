<template>
  <div class="container-fluid PageProfile" style="background-color: #000">
    <h1>This is profile page</h1>
    <button class="btn" v-on:click="deleteUser()">Delete User</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PageProfile",
  data() {
    return {
      getuser: "http://localhost:3000/getuservue",
      deleteuser: "http://localhost:3000/deleteuservue",
      username: "",
      password: "",
      email: "",
    };
  },

  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const result = await axios.get(this.getuser);
        this.users = result.data;
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteUser() {
      try {
        await axios.post(this.deleteuser, this.username);
      } catch (err) {
        console.log(err);
      }
      alert("User deleted!");
    },
    // mounted() {
    //   fetch(this.getuser)
    //     .then((response) => {
    //       return response.json;
    //     })
    //     .then((result) => {
    //       this.users = result;
    //     });
    // },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 15px 0 15px 0;
  padding: 10px;
  font-size: 15px;
  color: white;
  background: #5f9ea0;
  border: none;
  border-radius: 5px;
}
li {
  list-style-type: none;
}
</style>
