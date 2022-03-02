define(['ko','jquery','Magento_Ui/js/lib/view/utils/async','uiRegistry','underscore','../template/renderer','jquery-ui-modules/resizable'],function(ko,$,async,registry,_,renderer){'use strict';var sizeOptions=['minHeight','maxHeight','minWidth','maxWidth'],handles={height:'.ui-resizable-s, .ui-resizable-n',width:'.ui-resizable-w, .ui-resizable-e'};function adjustSize(element){var maxHeight,maxWidth;element=$(element);maxHeight=element.resizable('option').maxHeight;maxWidth=element.resizable('option').maxWidth;if(maxHeight&&element.height()>maxHeight){element.height(maxHeight+1);$(handles.height).hide();}else{$(handles.height).show();}
if(maxWidth&&element.width()>maxWidth){element.width(maxWidth+1);$(handles.width).hide();}else{$(handles.width).show();}}
function recalcAllowedSize(sizeConstraints,componentName,element,hasWidthUpdate){var size;element=$(element);if(!element.data('resizable')){return;}
if(!hasWidthUpdate){element.css('width','auto');}
_.each(sizeConstraints,function(selector,key){async.async({component:componentName,selector:selector},function(elem){size=key.indexOf('Height')!==-1?$(elem).outerHeight(true):$(elem).outerWidth(true);if(element.data('resizable')){element.resizable('option',key,size+1);}});},this);adjustSize(element);}
function processConfig(config,viewModel,element){var sizeConstraint,sizeConstraints={},recalc,hasWidthUpdate;if(_.isEmpty(config)){return{};}
_.each(sizeOptions,function(key){sizeConstraint=config[key];if(sizeConstraint&&!_.isNumber(sizeConstraint)){sizeConstraints[key]=sizeConstraint;delete config[key];}});hasWidthUpdate=_.some(sizeConstraints,function(value,key){return key.indexOf('Width')!==-1;});recalc=recalcAllowedSize.bind(null,sizeConstraints,viewModel.name,element,hasWidthUpdate);config.start=recalc;$(window).on('resize.resizable',recalc);registry.get(viewModel.provider).on('reloaded',recalc);return config;}
ko.bindingHandlers.resizable={init:function(element,valueAccessor,allBindings,viewModel){var config=processConfig(valueAccessor(),viewModel,element);$(element).resizable(config);}};renderer.addAttribute('resizable');});