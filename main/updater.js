const semver = require('semver')
const request = require('superagent')
const pkg = require('../package.json')

module.exports = function updater (callback) {
  request
    .get('https://raw.githubusercontent.com/vesparny/todoo/master/package.json')
    .end((err, res) => {
      if (err || !res.ok) {
        callback(err)
      } else {
        try {
          const newVersion = JSON.parse(res.text).version
          if (semver.gt(newVersion, pkg.version)) {
            callback(null, newVersion)
          } else {
            callback(new Error('up to date'))
          }
        } catch (err) {
          callback(err)
        }
      }
    })
}
