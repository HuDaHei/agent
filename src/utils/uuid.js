export function uuid(factor = 0x10000) {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * factor)
      .toString(16)
      .substring(1);
  };
  return s4() + s4();
}
