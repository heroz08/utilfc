import moment from 'moment';
import dayjs from 'dayjs';
function getType(obj) {
  return Object.prototype.toString.apply(obj).split(' ')[1].slice(0, -1);
}

function dealObject(v, func) {
  return Object.keys(v).reduce((pre, next) => {
    pre[next] = func(v[next]);
    return pre;
  }, {});
}

function dealArray(v, func) {
  return v.map((item) => func(item));
}

function dealDate(v) {
  return new Date(v.valueOf());
}

function dealRegExp(v) {
  return new RegExp(v.valueOf());
}

function dealFunc(v) {
  return v.bind({});
  // eslint-disable-next-line no-new-func
  // return new Function(`return${v.toString()}`);
}

function dealNull() {
  return null;
}

function dealUndefined() {
  return undefined;
}

function dealMomentOrDayjs(v) {
  return v.clone();
}

function dealBigInt(v) {
  // eslint-disable-next-line no-undef
  return BigInt(v);
}

function dealFormData(v) {
  const formData = new FormData();
  for (const entry of v.entries()) {
    const [key, value] = entry;
    formData.append(key, value);
  }
  return formData;
}

export default function deepClone(v) {
  const list = ['number', 'boolean', 'string'];
  if (list.includes(typeof v)) {
    return v;
  }
  if (moment.isMoment(v) || dayjs.isDayjs(v)) {
    return dealMomentOrDayjs(v);
  }
  const type = getType(v);
  // console.log(type, v);
  switch (type) {
  case 'Null':
    return dealNull(v);
  case 'Undefined':
    return dealUndefined(v);
  case 'Object':
    return dealObject(v, deepClone);
  case 'Array':
    return dealArray(v, deepClone);
  case 'Date':
    return dealDate(v);
  case 'RegExp':
    return dealRegExp(v);
  case 'BigInt':
    return dealBigInt(v);
  case 'Function':
    return dealFunc(v);
  case 'FormData':
    return dealFormData(v);
  default:
    throw new Error(`不支持的类型:${type}`);
  }
}
