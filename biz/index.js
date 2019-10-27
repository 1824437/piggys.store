//require解析额外文件
const {index} = require(`${_root}/lib/handlebars`).cache;

module.exports = (req, res) => {
  res.end(index({tips: ', first'}));
};
