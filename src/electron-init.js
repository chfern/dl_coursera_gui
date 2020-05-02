/**
 * Electron
 */
const electron = require('electron');
const { app, Menu, dialog } = electron;
const BrowserWindow = electron.BrowserWindow;
const isMac = process.platform === 'darwin'
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 1200, height: 1000, webPreferences: { nodeIntegration: true } });
  
  // and load the index.html of the app.
  // const startUrl = process.env.ELECTRON_START_URL || url.format({
  //   pathname: path.join(__dirname, '/../build/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // });
  mainWindow.loadURL("http://localhost:3000");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  const menu = Menu.buildFromTemplate(createMenu())
  Menu.setApplicationMenu(menu)

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function createMenu() {
  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: []
    }] : []),
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          click: async () => {
            console.log("clicked")
            dirPromise = dialog.showOpenDialog(mainWindow, {
              properties: ['openDirectory']
            });
            dirPromise
              .then(res => {
                const { canceled, filePaths } = res
                console.log(res)
                if (canceled)
                  throw new Error('Directory dialog canceled')
                return filePaths[0]
              })
              .then(courseRootDir => {
                mainWindow.webContents.send('course-root-dir', courseRootDir);
                console.log(courseRootDir)
              })
              .catch(err => console.log(err))
          }
        }
      ]
    }]
  return template;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});