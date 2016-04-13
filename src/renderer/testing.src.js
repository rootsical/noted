
// info from:
// http://electron.atom.io/docs/v0.37.5/api/ipc-main/
import electron from 'electron';
const ipcRenderer = electron.ipcRenderer;

export let message = "yo!";

export function getVersion(){
  return process.versions.node;
};

export function sendMessage(){
  ipcRenderer.send('message', 'hello from renderer!');
};

ipcRenderer.on('reply', function(event, arg) {
  console.log(arg); // prints "pong"
});
