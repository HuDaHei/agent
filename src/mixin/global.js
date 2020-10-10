export const permission = {
  methods: {
    $_hasPermisson(code = "randomx") {
      const permissons = this.$store.getters.getPermissionsCode;
      return permissons.includes(code);
    },
  },
};
