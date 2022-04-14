<template>
  <div class="main">
    <h1 class="api-heading">API Store</h1>
    <div
      style="display: inline-block"
      v-for="product in data"
      :key="product.id"
    >
      <div class="container">
        <div class="box">
          <div class="content">
            <h2>
              Title: <span>{{ product.title }}</span>
            </h2>
            <h3>
              Category: <span>{{ product.category }}</span>
            </h3>
          </div>

          <router-link class="link" :to="'/PageSingle/' + product.id"
            ><img class="productImage" :src="product.image" alt=""
          /></router-link>
          <h4>Price: ${{ product.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./app.scss";
export default {
  name: "ContentHome",
  data() {
    return {
      data: "",
      api: "https://fakestoreapi.com/products?limit=8",
    };
  },
  mounted() {
    fetch(this.api)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        this.data = result;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>
