export const permission = {
  methods: {
    $_hasPermisson(code) {
      const permissons = this.$store.getters.getUserInfo.permissions || [];
      console.log(permissons);
      return permissons.find(g => g === code);
    }
  }
};
