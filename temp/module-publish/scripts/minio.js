const fs = require('fs')
const path = require('path')
const Minio = require('minio')

const options = {
  endPoint: '10.128.230.54',
  port: 9000,
  useSSL: false,
  accessKey: 'minioadmin',
  secretKey: 'minioadmin',
  bucketName: 'web-visualization-public',
}
const minioClient = new Minio.Client(options)

function uploadJs (name, reg, files, pakPath) {
  const list = []
  const metaData = {
    'Content-Type': 'application/x-javascript',
  }

  files.forEach(filePath => {
    list.push(new Promise((resolve, reject) => {
      const pkg = require(pakPath)
      const fileName = path.basename(filePath).replace(reg, `${name}.${pkg.version}`)
      const objectName = 'ui/' + fileName
      minioClient.fPutObject(options.bucketName, objectName, filePath, metaData, (err, etag) => {
        if (err) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(`File uploaded error [${objectName}], ${err}`)
        } else {
          resolve(`File uploaded successfully. ${objectName}`)
        }
      })
    }))
  })
  return Promise.all(list)
}

function uploadModuleJs (dirPath) {
  const list = []
  const metaData = {
    'Content-Type': 'application/x-javascript',
  }
  const files = fs.readdirSync(dirPath).filter(i => /(.+)\.module\.js/.test(i))
  files.forEach(fileName => {
    list.push(new Promise((resolve, reject) => {
      const filePath = path.join(dirPath, fileName)
      const objectName = 'ui/' + fileName
      // eslint-disable-next-line sonarjs/no-identical-functions
      minioClient.fPutObject(options.bucketName, objectName, filePath, metaData, (err, etag) => {
        if (err) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(`File uploaded error [${objectName}], ${err}`)
        } else {
          resolve(`File uploaded successfully. ${objectName}`)
        }
      })
    }))
  })
  return Promise.all(list)
}

function uploadCss (distPath, name, version) {
  const list = []
  const metaData = {
    'Content-Type': 'text/css',
  }
  const cssFiles = fs.readdirSync(distPath)
  cssFiles.forEach(file => {
    const cssPath = path.resolve(distPath, file)
    if (/zui(\.min)?\.css$/.test(file)) {
      const fileName = file.replace('zui', `${name}.${version}`)
      const objectName = 'ui/' + fileName
      list.push(new Promise((resolve, reject) => {
        // eslint-disable-next-line sonarjs/no-identical-functions
        minioClient.fPutObject(options.bucketName, objectName, cssPath, metaData, (err, etag) => {
          if (err) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(`File uploaded error [${objectName}], ${err}`)
          } else {
            resolve(`File uploaded successfully. ${objectName}`)
          }
        })
      }))
    }
  })
  return Promise.all(list)
}

(async (enabled = false) => {
  if (!enabled) {
    return
  }
  let distPath = ''
  let err

  // 处理 vue js
  err = await uploadJs('vue', 'vue',
    [
      path.resolve(__dirname, '../node_modules/vue/dist/vue.js'),
      path.resolve(__dirname, '../node_modules/vue/dist/vue.min.js'),
    ],
    path.resolve(__dirname, '../node_modules/vue/package.json'),
  )
  console.info(err.join('\n'))
  // 处理 vue module js
  err = await uploadModuleJs(path.resolve(__dirname, '../dist/vue/'))
  console.info(err.join('\n'))
  console.info()

  // 处理 zui js
  const zuiPkg = require('../../vuetify/package.json')
  if (zuiPkg.version.includes('-beta') || zuiPkg.version.includes('-alpha')) {
    return
  }
  err = await uploadJs('zui', 'zui',
    [
      path.resolve(__dirname, '../../vuetify/dist/zui.js'),
      path.resolve(__dirname, '../../vuetify/dist/zui.min.js'),
    ],
    path.resolve(__dirname, '../../vuetify/package.json'),
  )
  console.info(err.join('\n'))

  // 处理 zui module js
  err = await uploadModuleJs(path.resolve(__dirname, '../dist/zui/'))
  console.info(err.join('\n'))

  // 处理 zui css
  distPath = path.resolve(__dirname, '../../vuetify/dist')
  err = await uploadCss(distPath, 'zui', zuiPkg.version)
  console.info(err.join('\n'))
  console.info()
})()
