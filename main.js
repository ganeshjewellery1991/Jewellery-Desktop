const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 1000, height: 600}) 
   // win.loadURL(url.format ({ 
   //    pathname: path.join(__dirname, 'Login.html'), 
   //    protocol: 'file:', 
   //    slashes: true 
   // })) 
   win.loadFile('/src/index.html')
}  
app.whenReady().then(() => {
   createWindow()
 })
// app.on('ready', createWindow) 

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit()
 })