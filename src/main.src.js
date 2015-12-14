import app from 'app';
import BrowserWindow from 'browser-window';
import electronConnect from 'electron-connect';

let mainWindow = null;
let client = null;
// console.log('hey is everything working?');

app.on('window-all-closed', () => {
  app.quit();
});

app.on('will-quit', () => {
  console.log('quitting');
});

app.on('ready', () => {
  //Menu.setApplicationMenu(appMenu);
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  client = electronConnect.client.create(mainWindow);

  // console.log('here is the file name...');
  // console.log('file://' + __dirname + '/views/index.html');
  // file:///root/DEV/JS/noted/app/views/index.html
  mainWindow.loadURL('file://' + __dirname + '/views/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});