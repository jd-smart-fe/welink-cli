var path = require('path');
var fs = require('fs-extra')
var os = require('os');
var exec = require('child_process').exec;
var utils = require('./utils');

var REPO = 'jd-smart-fe/welink-template';
var CACHE_DIR = path.resolve(os.homedir(), '.welink');
var TEMPLATE_PATH = path.resolve(CACHE_DIR, 'template');

/**
 *
 * @param {String} template 模板名称
 * @param {String} target 本地路径，绝对路径
 */
var download = function (template, target) {
  return new Promise(function (resolve, reject) {

    if (!utils.isExist(CACHE_DIR)) {   // 用户本地是否存在 ~/.welink
      utils.mkdir(CACHE_DIR);   // 不存在则初始化一个
    }

    if (!utils.isExist(TEMPLATE_PATH)) {
      // 克隆 template 到本地
      utils.gitClone(REPO, TEMPLATE_PATH)
        .then(() => copyTemplate(template, target))
        .then(() => resolve())
        .catch(e => reject(e));
    } else {

      copyTemplate(template, target)
        .then(() => resolve())
        .catch(e => reject(e));
    }
  });
};


function copyTemplate(template, target) {

  if (!path.isAbsolute(target)) {
    throw new Error('It is not absolute path!');
  }

  return new Promise(function (resolve, reject) {
    var templatePath = path.resolve(TEMPLATE_PATH, template);

    if (!utils.isExist(templatePath)) {
      reject(`Please pass in the correct template name!`);
    }

    gitPull()
      .then(() => fs.copy(path.resolve(TEMPLATE_PATH, template), target))
      .then(() => resolve())
      .catch(e => reject(e))
  });
}


function gitPull() {
  var cmd = `git --git-dir=${path.join(TEMPLATE_PATH, '.git')} --work-tree=${TEMPLATE_PATH} pull`;

  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}


module.exports = download;
