require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

require('angular');
require('angular-sanitize');

require('../styles/main.scss');


let MainCtrl = require('./controllers/main');

angular
  .module('testApp', ['ngSanitize'])
  .controller('MainCtrl', MainCtrl)
;
