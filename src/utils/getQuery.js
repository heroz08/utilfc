function getQuery(path) {
  // 返回url上的参数
  const { hash, search } = window.location;
  let str = search;
  if (path) {
    str = path;
  } else if (hash) {
    str = hash;
  }
  return getQueryObj(str);
}

function getQueryObj(str) {
  const arr = str.split("?");
  if (arr.length > 1) {
    return getParams(getParamsArr(arr));
  }
  return {};
}

function getParamsArr(arr) {
  const queryArr = arr[1] && arr[1].split("&");
  return queryArr;
}

function getParams(queryArr) {
  const obj = {};
  queryArr.forEach((item) => {
    const _arr = item.split("=");
    obj[_arr[0]] = _arr[1] || undefined;
  });
  return obj;
}
export default getQuery;
