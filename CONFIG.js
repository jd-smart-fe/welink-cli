var path = require('path');
var os = require('os');

exports.REPO = 'jd-smart-fe/welink-template';

exports.CACHE_DIR = path.resolve(os.homedir(), '.welink');

exports.TEMPLATE_PATH = path.resolve(exports.CACHE_DIR, 'template');
