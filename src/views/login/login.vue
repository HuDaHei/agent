<template>
  <section>
    我是登陆
    <button @click="handlerLogin">login</button>
  </section>
</template>

<script>
export default {
  name: "Login",
  methods: {
    handlerLogin() {
      this.$router.push({ path: "/test" });
    }
  }
};
</script>
<style lang="scss" scoped></style>
