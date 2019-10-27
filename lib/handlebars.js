/*
 * @Author: tao.zhu
 * @Date: 2018-01-22 18:32:55
 * @Last Modified by: tao.zhu
 * @Last Modified time: 2019-05-07 13:14:32
 */

/**
 * todo
 * registerPartial 名称为路径名更合适，不会产生冲突
 */

const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const {eachDir, cat} = require(`${_root}/lib/extra_fs`);
let {ignoreSysFiles} = require(`${_root}/config/fs`);
let _ext = ['.handlebars'];
let _extReg = new RegExp(`(${_ext.join('|')})$`);
let partialsDirectory = `${_root}/views/partials`;

let cache = {};
let pagesDirectory = `${_root}/views/page`;

// 读取slots文件夹

eachDir({
  _path: partialsDirectory,
  forEachCb: ({_path}) => {
    cat({
      _path,
      ext: _ext,
      isClearComment: false,
      cb: ({_path, content}) => {
        let label = path.relative(partialsDirectory, _path).replace(_extReg, "");
        handlebars.registerPartial(label, content);
      }
    });
  }
});
//预编译
eachDir({
  _path: pagesDirectory,
  forEachCb: ({_path}) => {
    cat({
      _path,
      ext: _ext,
      isClearComment: false,
      cb: ({_path, content}) => {
        let fileName = path.relative(pagesDirectory, _path);
        if(ignoreSysFiles.indexOf(fileName) !== -1){
          return;
        }
        let label = fileName.replace(_extReg, '');
        cache[label] = handlebars.compile(content);
      }
    });
  }
});
module.exports = {
  handlebars,
  cache
};



