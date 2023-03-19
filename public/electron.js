const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");
const contextMenu = require('electron-context-menu');

contextMenu({
  showInspectElement: true,
});

let mainWindow;
//
// require("update-electron-app")({
//   repo: "kitze/react-electron-example",
//   updateInterval: "1 hour"
// });

function createWindow() {
  mainWindow = new BrowserWindow(
      {
        width: 900, height: 680,
        webPreferences: {
          nodeIntegration: true,
          inspect: true
        }
      });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
