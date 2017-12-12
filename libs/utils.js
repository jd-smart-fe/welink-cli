var exec = require('child_process').exec;
var fs = require('fs');

exports.isExist = function (path) {
  try {
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}


exports.mkdir = function (dir) {
  try {
    fs.mkdirSync(dir);
    return true;
  } catch (e) {
    return false;
  }
}


exports.gitClone = function (repo, target) {
  var url = `https://github.com/${repo}.git`;
  return new Promise((resolve, reject) => {
    exec(`git clone ${url} ${target}`, function (err, stdout, stderr) {
      if (err) {
        console.log(err);
        reject();
      }
      resolve();
    })
  });
}
