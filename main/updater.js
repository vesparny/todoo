const semver = require('semver')
const request = require('request')
const pkg = require('../package.json')

module.exports = function updater (callback) {
  request(
    'https://raw.githubusercontent.com/vesparny/todoo/master/package.json',
    (err, res, body) => {
      if (!err && res.statusCode !== 200) {
        callback(err)
      } else {
        try {
          const newVersion = JSON.parse(body).version
          if (semver.gt(newVersion, pkg.version)) {
            callback(null, newVersion)
          } else {
            callback(new Error('up to date'))
          }
        } catch (err) {
          callback(err)
        }
      }
    }
  )
}
