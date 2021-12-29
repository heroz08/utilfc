const {
  storage,
  saveFile,
  getQuery,
  typeOf,
  isFun,
  checkRunCb,
  deepClone,
  hasData
} = require("./lib/utils/index.js");
const {local, session} = storage
module.exports = {
  hasData,
  saveFile,
  getQuery,
  typeOf,
  isFun,
  deepClone,
  checkRunCb,
  local,
  session,
};
