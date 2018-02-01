const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require("electron-is-dev");
const path = require("path");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 980,
        frame: false
    });
    mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`);
    app.setAboutPanelOptions({
        applicationName: "tasks client",
        applicationVersion: "0.0.1",
    });
    if(isDev) {
        require('devtron').install();
    }

    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});