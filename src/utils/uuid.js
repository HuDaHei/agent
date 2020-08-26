export function uuid(factor = 0x10000) {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * factor)
      .toString(16)
      .substring(1);
  };
  return s4() + s4();
}
export function createSingleMd5(needMd5Str) {
  // eslint-disable-next-line no-undef
  const spark = new SparkMD5();
  spark.append(needMd5Str);
  return spark.end();
}
