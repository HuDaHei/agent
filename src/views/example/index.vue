<template>
  <div>kkk</div>
</template>

<script>
export default {
  name: "example",
  async mounted() {
    const res = await this.postData("http://192.168.0.105:8090/test");
    console.log(res);
  }
};
</script>

<style></style>
