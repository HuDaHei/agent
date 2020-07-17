<template>
  <section>
    <nav>s</nav>
  </section>
</template>

<script>
export default {
  name: "layoutNav",
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  mounted() {
    console.log(this.routes, "routes");
  }
};
</script>

<style></style>
