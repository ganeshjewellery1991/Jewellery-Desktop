import { app, BrowserWindow } from 'electron';
import * as path from 'path';
//build:'npx tsc'
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            // Comment out or remove the preload reference if not used
            // preload: path.join(__dirname, 'preload.js')
        }
    });
    console.log(__dirname)
    mainWindow.webContents.loadFile("src/index.html")
    // mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
