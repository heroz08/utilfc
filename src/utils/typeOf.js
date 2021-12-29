export function typeOf(value) {
  const type = Object.prototype.toString.call(value);
  return type.slice(1, -1).split(" ")[1];
}

export function isFun(cb) {
  return cb && typeof cb === "function";
}

// 判断函数是否存在并执行
export function checkRunCb(cb, ...arg) {
  if (isFun(cb)) cb(...arg);
}

export default {};
