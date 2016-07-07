const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')
const { version } = require('../package.json')

function zipAsset (asset) {
  return new Promise((resolve, reject) => {
    const assetBase = path.basename(asset.path)
    const assetDirectory = path.dirname(asset.path)
    console.log(`Zipping ${assetBase} to ${asset.name}`)

    if (!fs.existsSync(asset.path)) {
      return reject(new Error(`${asset.path} does not exist`))
    }

    const zipCommand = `zip --recurse-paths --symlinks '${asset.name}' '${assetBase}'`
    const options = {cwd: assetDirectory, maxBuffer: Infinity}
    childProcess.exec(zipCommand, options, (error) => {
      if (error) {
        reject(error)
      } else {
        asset.path = path.join(assetDirectory, asset.name)
        resolve(asset)
      }
    })
  })
}

function mvAsset (asset) {
  return new Promise((resolve, reject) => {
    const outPath = path.join(__dirname, '..', 'out')
    const assetDirectory = path.dirname(asset.path)
    console.log(`Moving ${asset.name} to ${outPath}`)

    if (!fs.existsSync(asset.path)) {
      return reject(new Error(`${asset.path} does not exist`))
    }

    const mvCommand = `mv ${asset.path} ${outPath}`
    const options = {cwd: assetDirectory, maxBuffer: Infinity}
    childProcess.exec(mvCommand, options, (error) => {
      if (error) {
        reject(error)
      } else {
        resolve(asset)
      }
    })
  })
}

function zipAssets () {
  const outPath = path.join(__dirname, '..', 'out')
  const zipAssets = [{
    name: `Todoo-v${version}-mac.zip`,
    path: path.join(outPath, 'Todoo-darwin-x64', 'Todoo.app')
  }, {
    name: `Todoo-v${version}-windows.zip`,
    path: path.join(outPath, 'Todoo-win32-ia32')
  }, {
    name: `Todoo-v${version}-linux.zip`,
    path: path.join(outPath, 'Todoo-linux-x64')
  }]

  return Promise.all(zipAssets.map(zipAsset)).then((assets) => assets.map(mvAsset))
}

zipAssets()
  .catch(console.error.bind(console))
