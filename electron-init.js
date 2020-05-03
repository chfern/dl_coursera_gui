/**
 * Electron
 */
const electron = require('electron');
const { app, Menu, dialog } = electron;
const BrowserWindow = electron.BrowserWindow;
const isMac = process.platform === 'darwin'
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1500, height: 1000, webPreferences: { nodeIntegration: true } });
  
  // Load the index.html of the app.
  // const startUrl = process.env.ELECTRON_START_URL || url.format({
  //   pathname: path.join(__dirname, '/../build/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // });
  mainWindow.loadURL("http://localhost:3000");

  mainWindow.webContents.openDevTools();
  const menu = Menu.buildFromTemplate(createMenu())
  Menu.setApplicationMenu(menu)

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // Initialize extensions
  BrowserWindow.addDevToolsExtension(
    "/Users/fernandochristyanto/Library/Application\ Support/Google/Chrome/Profile\ 2/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0"
  )
}

function createMenu() {
  const template = [
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

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});