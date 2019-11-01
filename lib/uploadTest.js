// lib/uploadTest.js
// Require File System
const fs = require('fs')
// Require AWS SDK
const AWS = require('aws-sdk')
// Set AWS region
AWS.config.update({ region: 'us-east-1' })
// Create S3 Object instance
const s3 = new AWS.S3()

console.log(s3)

// Access command line arguments to get file path
const filePath = process.argv[2]

// Read the file first
fs.readFile(filePath, (err, data) => {
  if (err) throw err

  console.log(data)
})
