var svn = require('node-svn-ultimate');

module.exports = function(remote, local, options, callback) {

  if(typeof options === 'function') {
    callback = options;
    options = {};
  }

  svn.commands.export(remote, local, options, function( err ) {
    callback(err);
  });
}



