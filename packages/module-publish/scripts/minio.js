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

minioClient.bucketExists(options.bucketName, function (err) {
  // err 为null 表示桶存在
  if (!err) {
    // minioClient.makeBucket(options.bucketName, 'cn-north-1', function (err) {
    //   if (err) return console.log(err)
    //   console.log('Bucket created successfully in "us-east-1".')
    // })
  } else {
    if (err.code === 'NoSuchBucket') {
      console.log('bucket does not exist.')
      return
    }
    console.log(err)
  }
})

const metaData = {
  'Content-Type': 'application/x-javascript',
}
const distPath = path.resolve(__dirname, '../dist')
const moduleFiles = fs.readdirSync(distPath)

moduleFiles.forEach(file => {
  const dirPath = path.resolve(distPath, file)
  const files = fs.readdirSync(dirPath)
  const fileName = files.find(i => /(.+)\.module\.js/.test(i))
  const moduleFilePath = path.resolve(dirPath, fileName)
  const objectName = 'ui/' + fileName
  minioClient.fPutObject(options.bucketName, objectName, moduleFilePath, metaData, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.', objectName)
  })
})
