var fastn = require('fastn')({
  _generic: require('fastn/genericComponent'),
  list: require('fastn/listComponent'),
  templater: require('fastn/templaterComponent'),
  text: require('fastn/textComponent'),
  predicty: require('./predictyPickComponent')
})

module.exports = function (settings) {
  return fastn('predicty', settings).attach().render()
}
