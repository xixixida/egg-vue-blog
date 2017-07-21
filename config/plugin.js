'use strict';

// had enabled by egg
// exports.static = true;
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
exports.security = {
  xframe: {
    enable: false,
  },
}
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.security = {
  csrf: true
};