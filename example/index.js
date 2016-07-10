'use strict'

const fastn = require('fastn')({
  _generic: require('fastn/genericComponent'),
  templater: require('fastn/templaterComponent'),
  list: require('fastn/listComponent'),
  text: require('fastn/textComponent'),
  predicty: require('../predictyPickComponent')
}, true)

let dropdownModel = new fastn.Model({
  dropdowns : ["dropdown Itme 1","drop 2","drop 3","drop 4","ffive"]
})

const ui = fastn('div', {class:'page'},
  fastn('predicty',{
        items:fastn.binding('dropdowns').attach(dropdownModel)
      })
)

window.addEventListener('load', function () {
  ui.attach().render()
  document.body.appendChild(ui.element)
})
