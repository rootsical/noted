'use strict';

var _app = require('app');

var _app2 = _interopRequireDefault(_app);

var _browserWindow = require('browser-window');

var _browserWindow2 = _interopRequireDefault(_browserWindow);

var _electronConnect = require('electron-connect');

var _electronConnect2 = _interopRequireDefault(_electronConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainWindow = null;
var client = null;
// console.log('hey is everything working?');

_app2.default.on('window-all-closed', function () {
  _app2.default.quit();
});

_app2.default.on('will-quit', function () {
  console.log('quitting');
});

/**
 * When the electron app is ready, sort out the browser window
 * @param  {String} event event for app to listen for
 * @param  {function} callback function called when event occurs
 */
_app2.default.on('ready', function () {
  //Menu.setApplicationMenu(appMenu);
  mainWindow = new _browserWindow2.default({
    width: 800,
    height: 600
  });

  client = _electronConnect2.default.client.create(mainWindow);

  // console.log('here is the file name...');
  // console.log('file://' + __dirname + '/views/index.html');
  // file:///root/DEV/JS/noted/app/views/index.html
  mainWindow.loadURL('file://' + __dirname + '../../../views/index.html');

  /**
   * When the main window is called, set unused variable to null
   * @param  {String} event event for mainWindow to listen for
   * @param  {Function} callback function called when event occurs
   */
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});