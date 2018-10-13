const debug = require('debug')('welink-cli:uitls');
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var { ASSETS_PATH, ASSETS_ROPE } = require('../config');

exports.isExist = function(path) {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
};

exports.mkdir = function(dir) {
  try {
    fs.mkdirSync(dir);
    return true;
  } catch (e) {
    return false;
  }
};

exports.gitClone = function(repo, target) {
  var url = `https://github.com/${repo}.git`;
  return new Promise((resolve, reject) => {
    exec(`git clone ${url} ${target}`, function(err, stdout, stderr) {
      if (err) {
        console.log(err);
        reject();
      }
      resolve();
    });
  });
};
exports.getConfig = async () => {
  if (!exports.isExist(ASSETS_PATH)) {
    debug(ASSETS_ROPE);
    await exports.gitClone(ASSETS_ROPE, ASSETS_PATH).catch(e => reject(e));
  }
  // 每次获取都 pull
  await exports.gitPull();
  return require(path.join(ASSETS_PATH, 'config'));
};
exports.isExist = filepath => {
  try {
    fs.accessSync(filepath);
    debug('%s', `${filepath} existed`);
    return true;
  } catch (e) {
    debug('%s', `${filepath} not exist`);
    return false;
  }
};
exports.gitPull = () => {
  var cmd = `git --git-dir=${path.join(
    ASSETS_PATH,
    '.git',
  )} --work-tree=${ASSETS_PATH} pull`;

  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};
