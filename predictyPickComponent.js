'use strict'

const crel = require('crel')
const PredictyPick = require('predicty-pick')
const defaultCss = require('defaultcss')

defaultCss('predicty-pick-component', '.predicty{font-family:Arial;font-size:20px;} .predictionList{background-color:white;margin-left:1px} .prediction{ display:flex;flex-direction: column;align-items: left; height:20px;border:none;background-color:white;right:0; font-family:Arial;font-size:20px;} .prediction.current { background-color:#4285F4; color:white;} .prediction:hover{background-color:lightGray; }');

module.exports = function(fastn, component, type, settings, children) {
  let dropdownModel = new fastn.Model({
    items : settings.items()
  })

  component.extend('_generic', settings, children);

  component._type = 'predicty';

  component.render = function(){
      let predictyPick = new PredictyPick();
      let data = fastn.binding('items').attach(dropdownModel);
      predictyPick.items(data());
      component.element = predictyPick.renderedElement;

      predictyPick.predictionListElement.hidden = true;
      predictyPick.on('value',function(event){
        (!event)? predictyPick.predictionListElement.hidden = true : predictyPick.predictionListElement.hidden = false;
      })

      component.emit('render');
  };

  component._insert = function( childElement ){
      if(!childElement || !component.map){
          return;
      }
      childElement.addTo(component.map);
  };

  component._remove = function(childElement){
      if(!childElement || !component.map){
          return;
      }
  };

    return component;
}

module.exports.expectedComponents = ['text', '_generic', 'list', 'templater'];
