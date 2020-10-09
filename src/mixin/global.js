export const permission = {
  methods: {
    $_hasPermisson(code = "randomx") {
      const permissons = this.$store.getters.getUserInfo.permissions || [];
      return permissons.find((g) => g === code);
    },
  },
};
