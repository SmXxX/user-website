<template>
  <div style="background-color: #000; margin-top: 40px">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <a
            class="footerLink"
            style="color: white"
            href="http://localhost:8080/"
            >API Store</a
          >
        </div>
        <div class="col-6 footerText">
          Contact Us
          <div>
            <a class="tel" style="color: white" href="tel:">+359888888888</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
<style scoped>
h1 {
  color: black;
}
.footerLink,
.tel {
  text-decoration: none;
}
a:hover {
  color: blue;
}
.footerText {
  color: white;
  font-size: 18px;
  font-weight: 500;
}
</style>
