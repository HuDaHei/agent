export const permission = {
  methods: {
    $_hasPermisson(code = "randomx") {
      const permissons = this.$store.getters.getPermissionsCode;
      // code 可能由多个权限码组成 以$分割
      if (code.includes("$")) {
        const codeArr = code.split("$");
        const newCodeArr = permissons.filter((pf) => {
          return codeArr.includes(pf);
        });
        return newCodeArr.length;
      } else {
        return permissons.includes(code);
      }
    },
  },
};
