import moment from 'moment';

function transformStr(_str, formatIn, formatOut) {
  const str = typeof _str === 'number' ? `${_str}` : _str;
  if (str === 'null' || str === 'undefined') {
    return null;
  }
  if (str && typeof str === 'string') {
    return formatOut ? moment(str, formatIn).format(formatOut) : moment(str, formatIn);
  }
  console.error('str格式有问题');
  return str;
}

function str8moment(str) {
  const format = 'YYYY-MM-DD';
  return transformStr(str, format);
}

function str8str(str, _format) {
  const format = 'YYYY-MM-DD';
  return transformStr(str, format, _format);
}

function str14moment(str) {
  const format = 'YYYY-MM-DD HH:mm:ss';
  return transformStr(str, format);
}

function str14str(str, _format) {
  const format = 'YYYY-MM-DD HH:mm:ss';
  return transformStr(str, format, _format);
}

function formatDateStr(str, format) {
  const len = (`${str}`).length;
  const _format = 'YYYYMMDDHHmmss';
  const temp = _format.slice(0, len - 1);
  return transformStr(str, temp, format);
}

export {
  str14moment, str14str, str8str, str8moment, transformStr, formatDateStr,
};
