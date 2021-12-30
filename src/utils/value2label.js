function value2label(v, map = []) {
  if (map.length === 0) return v;
  const result = map.find(item => item.value === v);
  if(result) {
    return result.label;
  }
  return v;
}
export default value2label;
