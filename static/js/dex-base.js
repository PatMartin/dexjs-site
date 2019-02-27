(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.dexbase = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = "/** CSS Dependencies **/\n/*\r\n * Default Layout Theme\r\n *\r\n * Created for jquery.layout\r\n *\r\n * Copyright (c) 2010\r\n *   Fabrizio Balliano (http://www.fabrizioballiano.net)\r\n *   Kevin Dalman (http://allpro.net)\r\n *\r\n * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)\r\n * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.\r\n *\r\n * Last Updated: 2010-02-10\r\n * NOTE: For best code readability, view this with a fixed-space font and tabs equal to 4-chars\r\n */\n/*\r\n *\tDEFAULT FONT\r\n *\tJust to make demo-pages look better - not actually relevant to Layout!\r\n */\nbody {\n  font-family: Geneva, Arial, Helvetica, sans-serif;\n  font-size: 100%;\n  *font-size: 80%;\n}\n/*\r\n *\tPANES & CONTENT-DIVs\r\n */\n.ui-layout-pane {\n  /* all 'panes' */\n  background: #FFF;\n  border: 1px solid #BBB;\n  padding: 10px;\n  overflow: auto;\n  /* DO NOT add scrolling (or padding) to 'panes' that have a content-div,\r\n       otherwise you may get double-scrollbars - on the pane AND on the content-div\r\n       - use ui-layout-wrapper class if pane has a content-div\r\n       - use ui-layout-container if pane has an inner-layout\r\n    */\n}\n/* (scrolling) content-div inside pane allows for fixed header(s) and/or footer(s) */\n.ui-layout-content {\n  padding: 10px;\n  position: relative;\n  /* contain floated or positioned elements */\n  overflow: auto;\n  /* add scrolling to content-div */\n}\n/*\r\n *\tUTILITY CLASSES\r\n *\tMust come AFTER pane-class above so will override\r\n *\tThese classes are NOT auto-generated and are NOT used by Layout\r\n */\n.layout-child-container,\n.layout-content-container {\n  padding: 0;\n  overflow: hidden;\n}\n.layout-child-container {\n  border: 0;\n  /* remove border because inner-layout-panes probably have borders */\n}\n.layout-scroll {\n  overflow: auto;\n}\n.layout-hide {\n  display: none;\n}\n/*\r\n *\tRESIZER-BARS\r\n */\n.ui-layout-resizer {\n  /* all 'resizer-bars' */\n  background: #DDD;\n  border: 1px solid #BBB;\n  border-width: 0;\n}\n.ui-layout-resizer-drag {\n  /* REAL resizer while resize in progress */\n}\n.ui-layout-resizer-hover {\n  /* affects both open and closed states */\n}\n/* NOTE: It looks best when 'hover' and 'dragging' are set to the same color,\r\n    otherwise color shifts while dragging when bar can't keep up with mouse */\n.ui-layout-resizer-open-hover,\n/* hover-color to 'resize' */\r\n.ui-layout-resizer-dragging {\n  /* resizer beging 'dragging' */\n  background: #C4E1A4;\n}\n.ui-layout-resizer-dragging {\n  /* CLONED resizer being dragged */\n  border: 1px solid #BBB;\n}\n.ui-layout-resizer-north-dragging,\n.ui-layout-resizer-south-dragging {\n  border-width: 1px 0;\n}\n.ui-layout-resizer-west-dragging,\n.ui-layout-resizer-east-dragging {\n  border-width: 0 1px;\n}\n/* NOTE: Add a 'dragging-limit' color to provide visual feedback when resizer hits min/max size limits */\n.ui-layout-resizer-dragging-limit {\n  /* CLONED resizer at min or max size-limit */\n  background: #E1A4A4;\n  /* red */\n}\n.ui-layout-resizer-closed-hover {\n  /* hover-color to 'slide open' */\n  background: #EBD5AA;\n}\n.ui-layout-resizer-sliding {\n  /* resizer when pane is 'slid open' */\n  opacity: .10;\n  /* show only a slight shadow */\n  filter: alpha(opacity=10);\n}\n.ui-layout-resizer-sliding-hover {\n  /* sliding resizer - hover */\n  opacity: 1.00;\n  /* on-hover, show the resizer-bar normally */\n  filter: alpha(opacity=100);\n}\n/* sliding resizer - add 'outside-border' to resizer on-hover\r\n * this sample illustrates how to target specific panes and states */\n.ui-layout-resizer-north-sliding-hover {\n  border-bottom-width: 1px;\n}\n.ui-layout-resizer-south-sliding-hover {\n  border-top-width: 1px;\n}\n.ui-layout-resizer-west-sliding-hover {\n  border-right-width: 1px;\n}\n.ui-layout-resizer-east-sliding-hover {\n  border-left-width: 1px;\n}\n/*\r\n *\tTOGGLER-BUTTONS\r\n */\n.ui-layout-toggler {\n  border: 1px solid #BBB;\n  /* match pane-border */\n  background-color: #BBB;\n}\n.ui-layout-resizer-hover .ui-layout-toggler {\n  opacity: .60;\n  filter: alpha(opacity=60);\n}\n.ui-layout-toggler-hover,\n/* need when NOT resizable */\r\n.ui-layout-resizer-hover .ui-layout-toggler-hover {\n  /* need specificity when IS resizable */\n  background-color: #FC6;\n  opacity: 1.00;\n  filter: alpha(opacity=100);\n}\n.ui-layout-toggler-north,\n.ui-layout-toggler-south {\n  border-width: 0 1px;\n  /* left/right borders */\n}\n.ui-layout-toggler-west,\n.ui-layout-toggler-east {\n  border-width: 1px 0;\n  /* top/bottom borders */\n}\n/* hide the toggler-button when the pane is 'slid open' */\n.ui-layout-resizer-sliding  .ui-layout-toggler {\n  display: none;\n}\n/*\r\n *\tstyle the text we put INSIDE the togglers\r\n */\n.ui-layout-toggler .content {\n  color: #666;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  padding-bottom: 0.35ex;\n  /* to 'vertically center' text inside text-span */\n}\n/*\r\n *\tPANE-MASKS\r\n *\tthese styles are hard-coded on mask elems, but are also\r\n *\tincluded here as !important to ensure will overrides any generic styles\r\n */\n.ui-layout-mask {\n  border: none !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  opacity: 0 !important;\n  filter: Alpha(Opacity=\"0\") !important;\n}\n.ui-layout-mask-inside-pane {\n  /* masks always inside pane EXCEPT when pane is an iframe */\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n}\n\n/* standard mask for iframes */\n\n/* extra mask for objects/applets */\n/*\r\n *\tDefault printing styles\r\n */\n@media print {\n  /*\r\n     *\tUnless you want to print the layout as it appears onscreen,\r\n     *\tthese html/body styles are needed to allow the content to 'flow'\r\n     */\n\n  html {\n    height: auto !important;\n    overflow: visible !important;\n  }\n\n  body.ui-layout-container {\n    position: static !important;\n    top: auto !important;\n    bottom: auto !important;\n    left: auto !important;\n    right: auto !important;\n    /* only IE6 has container width & height set by Layout */\n    _width: auto !important;\n    _height: auto !important;\n  }\n\n  .ui-layout-resizer,\n  .ui-layout-toggler {\n    display: none !important;\n  }\n\n  /*\r\n     *\tDefault pane print styles disables positioning, borders and backgrounds.\r\n     *\tYou can modify these styles however it suit your needs.\r\n     */\n\n  .ui-layout-pane {\n    border: none !important;\n    background: transparent !important;\n    position: relative !important;\n    top: auto !important;\n    bottom: auto !important;\n    left: auto !important;\n    right: auto !important;\n    width: auto !important;\n    height: auto !important;\n    overflow: visible !important;\n  }\n}\n.uix-multiselect-original {\n  position: absolute;\n  left: -999999px;\n}\n.uix-multiselect {\n  position: relative;\n  float: left;\n}\n.uix-multiselect {\n  width: 100% !important;\n}\n/** CSS to make the control scalable **/\n.uix-multiselect .multiselect-selected-list {\n  position: absolute;\n  overflow: hidden;\n  width: 50% !important;\n  left: 0% !important;\n}\n.uix-multiselect .multiselect-available-list {\n  position: absolute;\n  overflow: hidden;\n  left: 50% !important;\n  width: 50% !important;\n}\n.uix-multiselect .ui-widget-header {\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 2px 4px;\n}\n.uix-multiselect .ui-widget-header div.header-text {\n  white-space: nowrap;\n  font-size: .9em;\n}\n.uix-multiselect .ui-widget-header .uix-control-right,\n.uix-multiselect .ui-widget-header .uix-control-left {\n  width: 16px;\n  height: 16px;\n}\n.uix-multiselect .ui-widget-header .uix-control-right {\n  float: right;\n}\n.uix-multiselect .ui-widget-header .uix-control-left {\n  float: left;\n}\n.uix-multiselect .ui-widget-header .uix-search {\n  float: right;\n  height: 14px;\n  font-size: 80%;\n}\n.uix-multiselect .uix-list-container {\n  position: relative;\n  overflow: auto;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.uix-multiselect .uix-list-container .ui-priority-secondary {\n  padding-right: 0;\n}\n.uix-multiselect .group-element {\n  position: relative;\n  padding-left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.uix-multiselect .group-element-collapsable {\n  padding-left: 16px;\n}\n.uix-multiselect .group-element span.collapse-handle {\n  position: absolute;\n  margin-top: -8px;\n  top: 50%;\n  left: 0;\n}\n.uix-multiselect .group-element .label {\n  margin: 0 3px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.uix-multiselect .group-element .ui-icon {\n  float: left;\n  cursor: pointer;\n}\n.uix-multiselect .option-element,\n.dragged-element {\n  cursor: pointer;\n  padding: 0 2px;\n}\n.uix-multiselect .option-element.ui-state-disabled {\n  font-style: italic;\n}\n.dragged-element,\n.dragged-grouped-element {\n  padding: 1px 3px;\n}\n.dragged-grouped-element {\n  padding-left: 16px;\n}\n.uix-multiselect .grouped-option {\n  position: relative;\n  padding-left: 16px;\n}\n.uix-multiselect .grouped-option .ui-icon {\n  position: absolute;\n  left: 0;\n}\n/*! =======================================================\r\n                      VERSION  9.8.0\r\n========================================================= */\n/*! =========================================================\r\n * bootstrap-slider.js\r\n *\r\n * Maintainers:\r\n *\t\tKyle Kemp\r\n *\t\t\t- Twitter: @seiyria\r\n *\t\t\t- Github:  seiyria\r\n *\t\tRohit Kalkur\r\n *\t\t\t- Twitter: @Rovolutionary\r\n *\t\t\t- Github:  rovolution\r\n *\r\n * =========================================================\r\n  *\r\n * bootstrap-slider is released under the MIT License\r\n * Copyright (c) 2017 Kyle Kemp, Rohit Kalkur, and contributors\r\n *\r\n * Permission is hereby granted, free of charge, to any person\r\n * obtaining a copy of this software and associated documentation\r\n * files (the \"Software\"), to deal in the Software without\r\n * restriction, including without limitation the rights to use,\r\n * copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the\r\n * Software is furnished to do so, subject to the following\r\n * conditions:\r\n *\r\n * The above copyright notice and this permission notice shall be\r\n * included in all copies or substantial portions of the Software.\r\n *\r\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\r\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\r\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\r\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\r\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\r\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\r\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\r\n * OTHER DEALINGS IN THE SOFTWARE.\r\n *\r\n * ========================================================= */\n.slider {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n}\n.slider.slider-horizontal {\n  width: 210px;\n  height: 20px;\n}\n.slider.slider-horizontal .slider-track {\n  height: 10px;\n  width: 100%;\n  margin-top: -5px;\n  top: 50%;\n  left: 0;\n}\n.slider.slider-horizontal .slider-selection,\n.slider.slider-horizontal .slider-track-low,\n.slider.slider-horizontal .slider-track-high {\n  height: 100%;\n  top: 0;\n  bottom: 0;\n}\n.slider.slider-horizontal .slider-tick,\n.slider.slider-horizontal .slider-handle {\n  margin-left: -10px;\n}\n.slider.slider-horizontal .slider-tick.triangle,\n.slider.slider-horizontal .slider-handle.triangle {\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  border-width: 0 10px 10px 10px;\n  width: 0;\n  height: 0;\n  border-bottom-color: #0480be;\n  margin-top: 0;\n}\n.slider.slider-horizontal .slider-tick-container {\n  white-space: nowrap;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.slider.slider-horizontal .slider-tick-label-container {\n  white-space: nowrap;\n  margin-top: 20px;\n}\n.slider.slider-horizontal .slider-tick-label-container .slider-tick-label {\n  padding-top: 4px;\n  display: inline-block;\n  text-align: center;\n}\n.slider.slider-horizontal.slider-rtl .slider-track {\n  left: initial;\n  right: 0;\n}\n.slider.slider-horizontal.slider-rtl .slider-tick,\n.slider.slider-horizontal.slider-rtl .slider-handle {\n  margin-left: initial;\n  margin-right: -10px;\n}\n.slider.slider-horizontal.slider-rtl .slider-tick-container {\n  left: initial;\n  right: 0;\n}\n.slider.slider-vertical {\n  height: 210px;\n  width: 20px;\n}\n.slider.slider-vertical .slider-track {\n  width: 10px;\n  height: 100%;\n  left: 25%;\n  top: 0;\n}\n.slider.slider-vertical .slider-selection {\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.slider.slider-vertical .slider-track-low,\n.slider.slider-vertical .slider-track-high {\n  width: 100%;\n  left: 0;\n  right: 0;\n}\n.slider.slider-vertical .slider-tick,\n.slider.slider-vertical .slider-handle {\n  margin-top: -10px;\n}\n.slider.slider-vertical .slider-tick.triangle,\n.slider.slider-vertical .slider-handle.triangle {\n  border-width: 10px 0 10px 10px;\n  width: 1px;\n  height: 1px;\n  border-left-color: #0480be;\n  border-right-color: #0480be;\n  margin-left: 0;\n  margin-right: 0;\n}\n.slider.slider-vertical .slider-tick-label-container {\n  white-space: nowrap;\n}\n.slider.slider-vertical .slider-tick-label-container .slider-tick-label {\n  padding-left: 4px;\n}\n.slider.slider-vertical.slider-rtl .slider-track {\n  left: initial;\n  right: 25%;\n}\n.slider.slider-vertical.slider-rtl .slider-selection {\n  left: initial;\n  right: 0;\n}\n.slider.slider-vertical.slider-rtl .slider-tick.triangle,\n.slider.slider-vertical.slider-rtl .slider-handle.triangle {\n  border-width: 10px 10px 10px 0;\n}\n.slider.slider-vertical.slider-rtl .slider-tick-label-container .slider-tick-label {\n  padding-left: initial;\n  padding-right: 4px;\n}\n.slider.slider-disabled .slider-handle {\n  background-image: -webkit-linear-gradient(top, #dfdfdf 0%, #bebebe 100%);\n  background-image: -o-linear-gradient(top, #dfdfdf 0%, #bebebe 100%);\n  background-image: linear-gradient(to bottom, #dfdfdf 0%, #bebebe 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf', endColorstr='#ffbebebe', GradientType=0);\n}\n.slider.slider-disabled .slider-track {\n  background-image: -webkit-linear-gradient(top, #e5e5e5 0%, #e9e9e9 100%);\n  background-image: -o-linear-gradient(top, #e5e5e5 0%, #e9e9e9 100%);\n  background-image: linear-gradient(to bottom, #e5e5e5 0%, #e9e9e9 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5', endColorstr='#ffe9e9e9', GradientType=0);\n  cursor: not-allowed;\n}\n.slider input {\n  display: none;\n}\n.slider .tooltip.top {\n  margin-top: -36px;\n}\n.slider .tooltip-inner {\n  white-space: nowrap;\n  max-width: none;\n}\n.slider .hide {\n  display: none;\n}\n.slider-track {\n  position: absolute;\n  cursor: pointer;\n  background-image: -webkit-linear-gradient(top, #f5f5f5 0%, #f9f9f9 100%);\n  background-image: -o-linear-gradient(top, #f5f5f5 0%, #f9f9f9 100%);\n  background-image: linear-gradient(to bottom, #f5f5f5 0%, #f9f9f9 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#fff9f9f9', GradientType=0);\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n}\n.slider-selection {\n  position: absolute;\n  background-image: -webkit-linear-gradient(top, #f9f9f9 0%, #f5f5f5 100%);\n  background-image: -o-linear-gradient(top, #f9f9f9 0%, #f5f5f5 100%);\n  background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9', endColorstr='#fff5f5f5', GradientType=0);\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.slider-selection.tick-slider-selection {\n  background-image: -webkit-linear-gradient(top, #89cdef 0%, #81bfde 100%);\n  background-image: -o-linear-gradient(top, #89cdef 0%, #81bfde 100%);\n  background-image: linear-gradient(to bottom, #89cdef 0%, #81bfde 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef', endColorstr='#ff81bfde', GradientType=0);\n}\n.slider-track-low,\n.slider-track-high {\n  position: absolute;\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.slider-handle {\n  position: absolute;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  background-color: #337ab7;\n  background-image: -webkit-linear-gradient(top, #149bdf 0%, #0480be 100%);\n  background-image: -o-linear-gradient(top, #149bdf 0%, #0480be 100%);\n  background-image: linear-gradient(to bottom, #149bdf 0%, #0480be 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf', endColorstr='#ff0480be', GradientType=0);\n  filter: none;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);\n  border: 0px solid transparent;\n}\n.slider-handle.round {\n  border-radius: 50%;\n}\n.slider-handle.triangle {\n  background: transparent none;\n}\n.slider-handle.custom {\n  background: transparent none;\n}\n.slider-handle.custom::before {\n  line-height: 20px;\n  font-size: 20px;\n  content: '\\2605';\n  color: #726204;\n}\n.slider-tick {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-image: -webkit-linear-gradient(top, #f9f9f9 0%, #f5f5f5 100%);\n  background-image: -o-linear-gradient(top, #f9f9f9 0%, #f5f5f5 100%);\n  background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9', endColorstr='#fff5f5f5', GradientType=0);\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  filter: none;\n  opacity: 0.8;\n  border: 0px solid transparent;\n}\n.slider-tick.round {\n  border-radius: 50%;\n}\n.slider-tick.triangle {\n  background: transparent none;\n}\n.slider-tick.custom {\n  background: transparent none;\n}\n.slider-tick.custom::before {\n  line-height: 20px;\n  font-size: 20px;\n  content: '\\2605';\n  color: #726204;\n}\n.slider-tick.in-selection {\n  background-image: -webkit-linear-gradient(top, #89cdef 0%, #81bfde 100%);\n  background-image: -o-linear-gradient(top, #89cdef 0%, #81bfde 100%);\n  background-image: linear-gradient(to bottom, #89cdef 0%, #81bfde 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef', endColorstr='#ff81bfde', GradientType=0);\n  opacity: 1;\n}\n/*\r\n   MODULE: bootstrap-multiselect 0.9.13\r\n   SITE  : https://github.com/davidstutz/bootstrap-multiselect\r\n   SOURCE: https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css\r\n*/\n.multiselect-container {\n  position: absolute;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.multiselect-container .input-group {\n  margin: 5px;\n}\n.multiselect-container > li {\n  padding: 0;\n}\n.multiselect-container > li > a.multiselect-all label {\n  font-weight: 700;\n}\n.multiselect-container > li.multiselect-group label {\n  margin: 0;\n  padding: 3px 20px 3px 20px;\n  height: 100%;\n  font-weight: 700;\n}\n.multiselect-container > li.multiselect-group-clickable label {\n  cursor: pointer;\n}\n.multiselect-container > li > a {\n  padding: 0;\n}\n.multiselect-container > li > a > label {\n  margin: 0;\n  height: 100%;\n  cursor: pointer;\n  font-weight: 400;\n  padding: 3px 20px 3px 40px;\n}\n.multiselect-container > li > a > label.radio,\n.multiselect-container > li > a > label.checkbox {\n  margin: 0;\n}\n.multiselect-container > li > a > label > input[type=checkbox] {\n  margin-bottom: 5px;\n}\n.btn-group > .btn-group:nth-child(2) > .multiselect.btn {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.form-inline .multiselect-container label.checkbox,\n.form-inline .multiselect-container label.radio {\n  padding: 3px 20px 3px 40px;\n}\n.form-inline .multiselect-container li a label.checkbox input[type=checkbox],\n.form-inline .multiselect-container li a label.radio input[type=radio] {\n  margin-left: -20px;\n  margin-right: 0;\n}\n/*! ========================================================================\r\n * Bootstrap Toggle: bootstrap-toggle.css v2.2.0\r\n * http://www.bootstraptoggle.com\r\n * ========================================================================\r\n * Copyright 2014 Min Hur, The New York Times Company\r\n * Licensed under MIT\r\n * ======================================================================== */\n.checkbox label .toggle,\n.checkbox-inline .toggle {\n  margin-left: -20px;\n  margin-right: 5px;\n}\n.toggle {\n  position: relative;\n  overflow: hidden;\n}\n.toggle input[type=\"checkbox\"] {\n  display: none;\n}\n.toggle-group {\n  position: absolute;\n  width: 200%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  transition: left 0.35s;\n  -webkit-transition: left 0.35s;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.toggle.off .toggle-group {\n  left: -100%;\n}\n.toggle-on {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 50%;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n}\n.toggle-off {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 0;\n  margin: 0;\n  border: 0;\n  border-radius: 0;\n}\n.toggle-handle {\n  position: relative;\n  margin: 0 auto;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 100%;\n  width: 0px;\n  border-width: 0 1px;\n}\n.toggle.btn {\n  min-width: 59px;\n  min-height: 34px;\n}\n.toggle-on.btn {\n  padding-right: 24px;\n}\n.toggle-off.btn {\n  padding-left: 24px;\n}\n.toggle.btn-lg {\n  min-width: 79px;\n  min-height: 45px;\n}\n.toggle-on.btn-lg {\n  padding-right: 31px;\n}\n.toggle-off.btn-lg {\n  padding-left: 31px;\n}\n.toggle-handle.btn-lg {\n  width: 40px;\n}\n.toggle.btn-sm {\n  min-width: 50px;\n  min-height: 30px;\n}\n.toggle-on.btn-sm {\n  padding-right: 20px;\n}\n.toggle-off.btn-sm {\n  padding-left: 20px;\n}\n.toggle.btn-xs {\n  min-width: 35px;\n  min-height: 22px;\n}\n.toggle-on.btn-xs {\n  padding-right: 12px;\n}\n.toggle-off.btn-xs {\n  padding-left: 12px;\n}\n/***\r\nSpectrum Colorpicker v1.8.0\r\nhttps://github.com/bgrins/spectrum\r\nAuthor: Brian Grinstead\r\nLicense: MIT\r\n***/\n.sp-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  /* https://github.com/bgrins/spectrum/issues/40 */\n  z-index: 9999994;\n  overflow: hidden;\n}\n.sp-container.sp-flat {\n  position: relative;\n}\n/* Fix for * { box-sizing: border-box; } */\n.sp-container,\n.sp-container * {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n/* http://ansciath.tumblr.com/post/7347495869/css-aspect-ratio */\n.sp-top {\n  position: relative;\n  width: 100%;\n  display: inline-block;\n}\n.sp-top-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.sp-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 20%;\n}\n.sp-hue {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 84%;\n  height: 100%;\n}\n.sp-clear-enabled .sp-hue {\n  top: 33px;\n  height: 77.5%;\n}\n.sp-fill {\n  padding-top: 80%;\n}\n.sp-sat,\n.sp-val {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.sp-alpha-enabled .sp-top {\n  margin-bottom: 18px;\n}\n.sp-alpha-enabled .sp-alpha {\n  display: block;\n}\n.sp-alpha-handle {\n  position: absolute;\n  top: -4px;\n  bottom: -4px;\n  width: 6px;\n  left: 50%;\n  cursor: pointer;\n  border: 1px solid black;\n  background: white;\n  opacity: .8;\n}\n.sp-alpha {\n  display: none;\n  position: absolute;\n  bottom: -14px;\n  right: 0;\n  left: 0;\n  height: 8px;\n}\n.sp-alpha-inner {\n  border: solid 1px #333;\n}\n.sp-clear {\n  display: none;\n}\n.sp-clear.sp-clear-display {\n  background-position: center;\n}\n.sp-clear-enabled .sp-clear {\n  display: block;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  bottom: 0;\n  left: 84%;\n  height: 28px;\n}\n/* Don't allow text selection */\n.sp-container,\n.sp-replacer,\n.sp-preview,\n.sp-dragger,\n.sp-slider,\n.sp-alpha,\n.sp-clear,\n.sp-alpha-handle,\n.sp-container.sp-dragging .sp-input,\n.sp-container button {\n  -webkit-user-select: none;\n  -moz-user-select: -moz-none;\n  -o-user-select: none;\n  user-select: none;\n}\n.sp-container.sp-input-disabled .sp-input-container {\n  display: none;\n}\n.sp-container.sp-buttons-disabled .sp-button-container {\n  display: none;\n}\n.sp-container.sp-palette-buttons-disabled .sp-palette-button-container {\n  display: none;\n}\n.sp-palette-only .sp-picker-container {\n  display: none;\n}\n.sp-palette-disabled .sp-palette-container {\n  display: none;\n}\n.sp-initial-disabled .sp-initial {\n  display: none;\n}\n/* Gradients for hue, saturation and value instead of images.  Not pretty... but it works */\n.sp-sat {\n  background-image: -webkit-gradient(linear,  0 0, 100% 0, from(#FFF), to(rgba(204, 154, 129, 0)));\n  background-image: -webkit-linear-gradient(left, #FFF, rgba(204, 154, 129, 0));\n  background-image: -moz-linear-gradient(left, #fff, rgba(204, 154, 129, 0));\n  background-image: -o-linear-gradient(left, #fff, rgba(204, 154, 129, 0));\n  background-image: -ms-linear-gradient(left, #fff, rgba(204, 154, 129, 0));\n  background-image: linear-gradient(to right, #fff, rgba(204, 154, 129, 0));\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr=#FFFFFFFF, endColorstr=#00CC9A81)\";\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr='#FFFFFFFF', endColorstr='#00CC9A81');\n}\n.sp-val {\n  background-image: -webkit-gradient(linear, 0 100%, 0 0, from(#000000), to(rgba(204, 154, 129, 0)));\n  background-image: -webkit-linear-gradient(bottom, #000000, rgba(204, 154, 129, 0));\n  background-image: -moz-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));\n  background-image: -o-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));\n  background-image: -ms-linear-gradient(bottom, #000, rgba(204, 154, 129, 0));\n  background-image: linear-gradient(to top, #000, rgba(204, 154, 129, 0));\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00CC9A81, endColorstr=#FF000000)\";\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00CC9A81', endColorstr='#FF000000');\n}\n.sp-hue {\n  background: -moz-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n  background: -ms-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n  background: -o-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n  background: -webkit-gradient(linear, left top, left bottom, from(#ff0000), color-stop(0.17, #ffff00), color-stop(0.33, #00ff00), color-stop(0.5, #00ffff), color-stop(0.67, #0000ff), color-stop(0.83, #ff00ff), to(#ff0000));\n  background: -webkit-linear-gradient(top, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n  background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n/* IE filters do not support multiple color stops.\r\n   Generate 6 divs, line them up, and do two color gradients for each.\r\n   Yes, really.\r\n */\n.sp-1 {\n  height: 17%;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0000', endColorstr='#ffff00');\n}\n.sp-2 {\n  height: 16%;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff00', endColorstr='#00ff00');\n}\n.sp-3 {\n  height: 17%;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ff00', endColorstr='#00ffff');\n}\n.sp-4 {\n  height: 17%;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffff', endColorstr='#0000ff');\n}\n.sp-5 {\n  height: 16%;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0000ff', endColorstr='#ff00ff');\n}\n.sp-6 {\n  height: 17%;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff00ff', endColorstr='#ff0000');\n}\n.sp-hidden {\n  display: none !important;\n}\n/* Clearfix hack */\n.sp-cf:before,\n.sp-cf:after {\n  content: \"\";\n  display: table;\n}\n.sp-cf:after {\n  clear: both;\n}\n.sp-cf {\n  *zoom: 1;\n}\n/* Mobile devices, make hue slider bigger so it is easier to slide */\n@media (max-device-width: 480px) {\n  .sp-color {\n    right: 40%;\n  }\n\n  .sp-hue {\n    left: 63%;\n  }\n\n  .sp-fill {\n    padding-top: 60%;\n  }\n}\n.sp-dragger {\n  border-radius: 5px;\n  height: 5px;\n  width: 5px;\n  border: 1px solid #fff;\n  background: #000;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.sp-slider {\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  height: 3px;\n  left: -1px;\n  right: -1px;\n  border: 1px solid #000;\n  background: white;\n  opacity: .8;\n}\n/*\r\nTheme authors:\r\nHere are the basic themeable display options (colors, fonts, global widths).\r\nSee http://bgrins.github.io/spectrum/themes/ for instructions.\r\n*/\n.sp-container {\n  border-radius: 0;\n  background-color: #ECECEC;\n  border: solid 1px #f0c49B;\n  padding: 0;\n}\n.sp-container,\n.sp-container button,\n.sp-container input,\n.sp-color,\n.sp-hue,\n.sp-clear {\n  font: normal 12px \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Verdana, sans-serif;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.sp-top {\n  margin-bottom: 3px;\n}\n.sp-color,\n.sp-hue,\n.sp-clear {\n  border: solid 1px #666;\n}\n/* Input */\n.sp-input-container {\n  float: right;\n  width: 100px;\n  margin-bottom: 4px;\n}\n.sp-initial-disabled  .sp-input-container {\n  width: 100%;\n}\n.sp-input {\n  font-size: 12px !important;\n  border: 1px inset;\n  padding: 4px 5px;\n  margin: 0;\n  width: 100%;\n  background: transparent;\n  border-radius: 3px;\n  color: #222;\n}\n.sp-input:focus {\n  border: 1px solid orange;\n}\n.sp-input.sp-validation-error {\n  border: 1px solid red;\n  background: #fdd;\n}\n.sp-picker-container,\n.sp-palette-container {\n  float: left;\n  position: relative;\n  padding: 10px;\n  padding-bottom: 300px;\n  margin-bottom: -290px;\n}\n.sp-picker-container {\n  width: 172px;\n  border-left: solid 1px #fff;\n}\n/* Palettes */\n.sp-palette-container {\n  border-right: solid 1px #ccc;\n}\n.sp-palette-only .sp-palette-container {\n  border: 0;\n}\n.sp-palette .sp-thumb-el {\n  display: block;\n  position: relative;\n  float: left;\n  width: 24px;\n  height: 15px;\n  margin: 3px;\n  cursor: pointer;\n  border: solid 2px transparent;\n}\n.sp-palette .sp-thumb-el:hover,\n.sp-palette .sp-thumb-el.sp-thumb-active {\n  border-color: orange;\n}\n.sp-thumb-el {\n  position: relative;\n}\n/* Initial */\n.sp-initial {\n  float: left;\n  border: solid 1px #333;\n}\n.sp-initial span {\n  width: 30px;\n  height: 25px;\n  border: none;\n  display: block;\n  float: left;\n  margin: 0;\n}\n.sp-initial .sp-clear-display {\n  background-position: center;\n}\n/* Buttons */\n.sp-palette-button-container,\n.sp-button-container {\n  float: right;\n}\n/* Replacer (the little preview div that shows up instead of the <input>) */\n.sp-replacer {\n  margin: 0;\n  overflow: hidden;\n  cursor: pointer;\n  padding: 4px;\n  display: inline-block;\n  *zoom: 1;\n  *display: inline;\n  border: solid 1px #91765d;\n  background: #eee;\n  color: #333;\n  vertical-align: middle;\n}\n.sp-replacer:hover,\n.sp-replacer.sp-active {\n  border-color: #F0C49B;\n  color: #111;\n}\n.sp-replacer.sp-disabled {\n  cursor: default;\n  border-color: silver;\n  color: silver;\n}\n.sp-dd {\n  padding: 2px 0;\n  height: 16px;\n  line-height: 16px;\n  float: left;\n  font-size: 10px;\n}\n.sp-preview {\n  position: relative;\n  width: 25px;\n  height: 20px;\n  border: solid 1px #222;\n  margin-right: 5px;\n  float: left;\n  z-index: 0;\n}\n.sp-palette {\n  *width: 220px;\n  max-width: 220px;\n}\n.sp-palette .sp-thumb-el {\n  width: 16px;\n  height: 16px;\n  margin: 2px 1px;\n  border: solid 1px #d0d0d0;\n}\n.sp-container {\n  padding-bottom: 0;\n}\n/* Buttons: http://hellohappy.org/css3-buttons/ */\n.sp-container button {\n  background-color: #eeeeee;\n  background-image: -webkit-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: -moz-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: -ms-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: -o-linear-gradient(top, #eeeeee, #cccccc);\n  background-image: linear-gradient(to bottom, #eeeeee, #cccccc);\n  border: 1px solid #ccc;\n  border-bottom: 1px solid #bbb;\n  border-radius: 3px;\n  color: #333;\n  font-size: 14px;\n  line-height: 1;\n  padding: 5px 4px;\n  text-align: center;\n  text-shadow: 0 1px 0 #eee;\n  vertical-align: middle;\n}\n.sp-container button:hover {\n  background-color: #dddddd;\n  background-image: -webkit-linear-gradient(top, #dddddd, #bbbbbb);\n  background-image: -moz-linear-gradient(top, #dddddd, #bbbbbb);\n  background-image: -ms-linear-gradient(top, #dddddd, #bbbbbb);\n  background-image: -o-linear-gradient(top, #dddddd, #bbbbbb);\n  background-image: linear-gradient(to bottom, #dddddd, #bbbbbb);\n  border: 1px solid #bbb;\n  border-bottom: 1px solid #999;\n  cursor: pointer;\n  text-shadow: 0 1px 0 #ddd;\n}\n.sp-container button:active {\n  border: 1px solid #aaa;\n  border-bottom: 1px solid #888;\n  -webkit-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n  -moz-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n  -ms-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n  -o-box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n  box-shadow: inset 0 0 5px 2px #aaaaaa, 0 1px 0 0 #eeeeee;\n}\n.sp-cancel {\n  font-size: 11px;\n  color: #d93f3f !important;\n  margin: 0;\n  padding: 2px;\n  margin-right: 5px;\n  vertical-align: middle;\n  text-decoration: none;\n}\n.sp-cancel:hover {\n  color: #d93f3f !important;\n  text-decoration: underline;\n}\n.sp-palette span:hover,\n.sp-palette span.sp-thumb-active {\n  border-color: #000;\n}\n.sp-preview,\n.sp-alpha,\n.sp-thumb-el {\n  position: relative;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n}\n.sp-preview-inner,\n.sp-alpha-inner,\n.sp-thumb-inner {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.sp-palette .sp-thumb-inner {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n}\n.sp-palette .sp-thumb-light.sp-thumb-active .sp-thumb-inner {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiYBhsgJFMffxAXABlN5JruT4Q3wfi/0DsT64h8UD8HmpIPCWG/KemIfOJCUB+Aoacx6EGBZyHBqI+WsDCwuQ9mhxeg2A210Ntfo8klk9sOMijaURm7yc1UP2RNCMbKE9ODK1HM6iegYLkfx8pligC9lCD7KmRof0ZhjQACDAAceovrtpVBRkAAAAASUVORK5CYII=);\n}\n.sp-palette .sp-thumb-dark.sp-thumb-active .sp-thumb-inner {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAMdJREFUOE+tkgsNwzAMRMugEAahEAahEAZhEAqlEAZhEAohEAYh81X2dIm8fKpEspLGvudPOsUYpxE2BIJCroJmEW9qJ+MKaBFhEMNabSy9oIcIPwrB+afvAUFoK4H0tMaQ3XtlrggDhOVVMuT4E5MMG0FBbCEYzjYT7OxLEvIHQLY2zWwQ3D+9luyOQTfKDiFD3iUIfPk8VqrKjgAiSfGFPecrg6HN6m/iBcwiDAo7WiBeawa+Kwh7tZoSCGLMqwlSAzVDhoK+6vH4G0P5wdkAAAAASUVORK5CYII=);\n}\n.sp-clear-display {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(data:image/gif;base64,R0lGODlhFAAUAPcAAAAAAJmZmZ2dnZ6enqKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq/Hx8fLy8vT09PX19ff39/j4+Pn5+fr6+vv7+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAUABQAAAihAP9FoPCvoMGDBy08+EdhQAIJCCMybCDAAYUEARBAlFiQQoMABQhKUJBxY0SPICEYHBnggEmDKAuoPMjS5cGYMxHW3IiT478JJA8M/CjTZ0GgLRekNGpwAsYABHIypcAgQMsITDtWJYBR6NSqMico9cqR6tKfY7GeBCuVwlipDNmefAtTrkSzB1RaIAoXodsABiZAEFB06gIBWC1mLVgBa0AAOw==);\n}\n/* ConfigurationPane */\n.ConfigurationPaneClass {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n.ConfigurationPaneClass label {\n  font-size: small;\n}\n.ConfigurationPaneClass table {\n  width: 100%;\n}\n.ConfigurationPaneClass div,\n.ConfigurationPaneClass .panel-body,\n.ConfigurationPaneClass .panel-heading,\n.ConfigurationPaneClass table,\n.ConfigurationPaneClass td > label,\n.ConfigurationPaneClass th,\n.ConfigurationPaneClass td,\n.ConfigurationPaneClass h1,\n.ConfigurationPaneClass h2,\n.ConfigurationPaneClass h3,\n.ConfigurationPaneClass h4,\n.ConfigurationPaneClass h5 {\n  padding: 1px !important;\n  margin: 0px !important;\n}\n.ConfigurationPaneClass h1 {\n  font-size: 3em !important;\n  font-weight: normal !important;\n  color: white;\n  background-color: #878787;\n  text-align: center;\n}\n.ConfigurationPaneClass h2 {\n  font-size: 2.5em !important;\n  font-weight: normal !important;\n  color: white;\n  background-color: #3288bd;\n  text-align: center;\n}\n.ConfigurationPaneClass h3 {\n  font-size: 2.25em !important;\n  font-weight: normal !important;\n  color: white;\n  background-color: #1a9850;\n  text-align: center;\n}\n.ConfigurationPaneClass h4 {\n  font-size: 2em !important;\n  font-weight: normal !important;\n  color: white;\n  background-color: #d58512;\n  text-align: center;\n}\n.ConfigurationPaneClass h5 {\n  font-size: 1.5em !important;\n  font-weight: normal !important;\n  color: white;\n  background-color: #3e999f;\n  text-align: center;\n}\n.ConfigurationPaneClass h1:hover,\n.ConfigurationPaneClass h2:hover,\n.ConfigurationPaneClass h3:hover,\n.ConfigurationPaneClass h4:hover,\n.ConfigurationPaneClass h5:hover {\n  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);\n  color: yellow;\n}\n.ConfigurationPaneClass .control-boolean label,\n.ConfigurationPaneClass .control-boolean input,\n.ConfigurationPaneClass .control-string label,\n.ConfigurationPaneClass .control-string input {\n  padding: 1px !important;\n  margin: 0px !important;\n}\n.ConfigurationPaneClass .control-float {\n  margin: 10px;\n}\n.ConfigurationPaneClass .slider {\n  margin-left: 5px !important;\n  margin-bottom: 15px !important;\n  margin-top: 0px !important;\n}\n.ConfigurationPaneClass .slider-handle {\n  top: 5px !important;\n}\n/* DataFilterPane */\n.DataFilterPaneClass {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n.DataFilterPaneClass h4 {\n  text-align: center;\n  width: 100%;\n  background: #428bca;\n  color: white;\n  padding: 0px;\n  margin-right: 0px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 0px;\n}\n.DataFilterPaneClass h5 {\n  width: 100%;\n  color: black;\n  padding: 0px;\n  text-align: center;\n  margin-right: 0px;\n  margin-top: 10px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n}\n/* Trigger button */\n.DataFilterPaneClass .btn-group {\n  width: 100%;\n}\n.DataFilterPaneClass #ColumnSelector {\n  height: 160px;\n  margin-bottom: 5px;\n  width: 100%;\n}\n.DataFilterPaneClass .slider {\n  width: 95% !important;\n  margin-left: 5px;\n}\n.DataFilterPaneClass .multiselect {\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n/* GuiPane */\n/** Treemap **/\n.TreemapClass text {\n  pointer-events: none;\n}\n.TreemapClass .grandparent text {\n  font-weight: bold;\n}\n.TreemapClass rect {\n  fill: none;\n  stroke: #fff;\n}\n.TreemapClass rect.parent,\n.grandparent rect {\n  stroke-width: 2px;\n}\n.TreemapClass .grandparent rect {\n  fill: steelblue;\n}\n.grandparent:hover rect {\n  fill: #ee9700;\n}\n.TreemapClass .children rect.parent,\n.grandparent rect {\n  cursor: pointer;\n}\n.TreemapClass .children rect.parent {\n  fill-opacity: .1;\n}\n.TreemapClass .children:hover rect.child {\n  fill-opacity: .8;\n}\n/** Treemap Bar Chart **/\n.TreemapBarChartClass label {\n  font-family: sans-serif;\n  font-size: 14px;\n  position: absolute;\n  left: 92px;\n  top: 26px;\n}\n.TreemapBarChartClass .axis .domain {\n  display: none;\n}\n.TreemapBarChartClass .axis line {\n  stroke: #ccc;\n}\n.TreemapBarChartClass .axis.x0 text {\n  font-weight: 700;\n}\n.TreemapBarChartClass .hover-active rect {\n  opacity: .75;\n}\n.TreemapBarChartClass .hover-active rect.hover {\n  opacity: 1;\n}\n.BumpChartClass .x.axis path,\n.BumpChartClass .x.axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n.BumpChartClass .y.axis path {\n  fill: none;\n}\n.BumpChartClass .y.axis line {\n  fill: none;\n  stroke: #eeeeee;\n  shape-rendering: crispEdges;\n}\n"; (require("browserify-css").createStyle(css, { "href": "css\\dex.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":9}],2:[function(require,module,exports){
/**
 * Bootstrap Multiselect (https://github.com/davidstutz/bootstrap-multiselect)
 *
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2015 David Stutz
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2015 David Stutz
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function ($) {

  if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
    ko.bindingHandlers.multiselect = {
      after: ['options', 'value', 'selectedOptions', 'enable', 'disable'],

      init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $element = $(element);
        var config = ko.toJS(valueAccessor());

        $element.multiselect(config);

        if (allBindings.has('options')) {
          var options = allBindings.get('options');
          if (ko.isObservable(options)) {
            ko.computed({
              read: function() {
                options();
                setTimeout(function() {
                  var ms = $element.data('multiselect');
                  if (ms)
                    ms.updateOriginalOptions();//Not sure how beneficial this is.
                  $element.multiselect('rebuild');
                }, 1);
              },
              disposeWhenNodeIsRemoved: element
            });
          }
        }

        //value and selectedOptions are two-way, so these will be triggered even by our own actions.
        //It needs some way to tell if they are triggered because of us or because of outside change.
        //It doesn't loop but it's a waste of processing.
        if (allBindings.has('value')) {
          var value = allBindings.get('value');
          if (ko.isObservable(value)) {
            ko.computed({
              read: function() {
                value();
                setTimeout(function() {
                  $element.multiselect('refresh');
                }, 1);
              },
              disposeWhenNodeIsRemoved: element
            }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
          }
        }

        //Switched from arrayChange subscription to general subscription using 'refresh'.
        //Not sure performance is any better using 'select' and 'deselect'.
        if (allBindings.has('selectedOptions')) {
          var selectedOptions = allBindings.get('selectedOptions');
          if (ko.isObservable(selectedOptions)) {
            ko.computed({
              read: function() {
                selectedOptions();
                setTimeout(function() {
                  $element.multiselect('refresh');
                }, 1);
              },
              disposeWhenNodeIsRemoved: element
            }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
          }
        }

        var setEnabled = function (enable) {
          setTimeout(function () {
            if (enable)
              $element.multiselect('enable');
            else
              $element.multiselect('disable');
          });
        };

        if (allBindings.has('enable')) {
          var enable = allBindings.get('enable');
          if (ko.isObservable(enable)) {
            ko.computed({
              read: function () {
                setEnabled(enable());
              },
              disposeWhenNodeIsRemoved: element
            }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
          } else {
            setEnabled(enable);
          }
        }

        if (allBindings.has('disable')) {
          var disable = allBindings.get('disable');
          if (ko.isObservable(disable)) {
            ko.computed({
              read: function () {
                setEnabled(!disable());
              },
              disposeWhenNodeIsRemoved: element
            }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
          } else {
            setEnabled(!disable);
          }
        }

        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
          $element.multiselect('destroy');
        });
      },

      update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $element = $(element);
        var config = ko.toJS(valueAccessor());

        $element.multiselect('setOptions', config);
        $element.multiselect('rebuild');
      }
    };
  }

  function forEach(array, callback) {
    for (var index = 0; index < array.length; ++index) {
      callback(array[index], index);
    }
  }

  /**
   * Constructor to create a new multiselect using the given select.
   *
   * @param {jQuery} select
   * @param {Object} options
   * @returns {Multiselect}
   */
  function Multiselect(select, options) {

    this.$select = $(select);

    // Placeholder via data attributes
    if (this.$select.attr("data-placeholder")) {
      options.nonSelectedText = this.$select.data("placeholder");
    }

    this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

    // Initialization.
    // We have to clone to create a new reference.
    this.originalOptions = this.$select.clone()[0].options;
    this.query = '';
    this.searchTimeout = null;
    this.lastToggledInput = null;

    this.options.multiple = this.$select.attr('multiple') === "multiple";
    this.options.onChange = $.proxy(this.options.onChange, this);
    this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
    this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
    this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
    this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
    this.options.onInitialized = $.proxy(this.options.onInitialized, this);

    // Build select all if enabled.
    this.buildContainer();
    this.buildButton();
    this.buildDropdown();
    this.buildSelectAll();
    this.buildDropdownOptions();
    this.buildFilter();

    this.updateButtonText();
    this.updateSelectAll(true);

    if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
      this.disable();
    }

    this.$select.hide().after(this.$container);
    this.options.onInitialized(this.$select, this.$container);
  }

  Multiselect.prototype = {

    defaults: {
      /**
       * Default text function will either print 'None selected' in case no
       * option is selected or a list of the selected options up to a length
       * of 3 selected options.
       *
       * @param {jQuery} options
       * @param {jQuery} select
       * @returns {String}
       */
      buttonText: function(options, select) {
        if (this.disabledText.length > 0
          && (this.disableIfEmpty || select.prop('disabled'))
          && options.length == 0) {

          return this.disabledText;
        }
        else if (options.length === 0) {
          return this.nonSelectedText;
        }
        else if (this.allSelectedText
          && options.length === $('option', $(select)).length
          && $('option', $(select)).length !== 1
          && this.multiple) {

          if (this.selectAllNumber) {
            return this.allSelectedText + ' (' + options.length + ')';
          }
          else {
            return this.allSelectedText;
          }
        }
        else if (options.length > this.numberDisplayed) {
          return options.length + ' ' + this.nSelectedText;
        }
        else {
          var selected = '';
          var delimiter = this.delimiterText;

          options.each(function() {
            var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
            selected += label + delimiter;
          });

          return selected.substr(0, selected.length - 2);
        }
      },
      /**
       * Updates the title of the button similar to the buttonText function.
       *
       * @param {jQuery} options
       * @param {jQuery} select
       * @returns {@exp;selected@call;substr}
       */
      buttonTitle: function(options, select) {
        if (options.length === 0) {
          return this.nonSelectedText;
        }
        else {
          var selected = '';
          var delimiter = this.delimiterText;

          options.each(function () {
            var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
            selected += label + delimiter;
          });
          return selected.substr(0, selected.length - 2);
        }
      },
      /**
       * Create a label.
       *
       * @param {jQuery} element
       * @returns {String}
       */
      optionLabel: function(element){
        return $(element).attr('label') || $(element).text();
      },
      /**
       * Create a class.
       *
       * @param {jQuery} element
       * @returns {String}
       */
      optionClass: function(element) {
        return $(element).attr('class') || '';
      },
      /**
       * Triggered on change of the multiselect.
       *
       * Not triggered when selecting/deselecting options manually.
       *
       * @param {jQuery} option
       * @param {Boolean} checked
       */
      onChange : function(option, checked) {

      },
      /**
       * Triggered when the dropdown is shown.
       *
       * @param {jQuery} event
       */
      onDropdownShow: function(event) {

      },
      /**
       * Triggered when the dropdown is hidden.
       *
       * @param {jQuery} event
       */
      onDropdownHide: function(event) {

      },
      /**
       * Triggered after the dropdown is shown.
       *
       * @param {jQuery} event
       */
      onDropdownShown: function(event) {

      },
      /**
       * Triggered after the dropdown is hidden.
       *
       * @param {jQuery} event
       */
      onDropdownHidden: function(event) {

      },
      /**
       * Triggered on select all.
       */
      onSelectAll: function(checked) {

      },
      /**
       * Triggered after initializing.
       *
       * @param {jQuery} $select
       * @param {jQuery} $container
       */
      onInitialized: function($select, $container) {

      },
      enableHTML: false,
      buttonClass: 'btn btn-default',
      inheritClass: false,
      buttonWidth: 'auto',
      buttonContainer: '<div class="btn-group" />',
      dropRight: false,
      dropUp: false,
      selectedClass: 'active',
      // Maximum height of the dropdown menu.
      // If maximum height is exceeded a scrollbar will be displayed.
      maxHeight: false,
      checkboxName: false,
      includeSelectAllOption: false,
      includeSelectAllIfMoreThan: 0,
      selectAllText: ' Select all',
      selectAllValue: 'multiselect-all',
      selectAllName: false,
      selectAllNumber: true,
      selectAllJustVisible: true,
      enableFiltering: false,
      enableCaseInsensitiveFiltering: false,
      enableFullValueFiltering: false,
      enableClickableOptGroups: false,
      enableCollapsibelOptGroups: false,
      filterPlaceholder: 'Search',
      // possible options: 'text', 'value', 'both'
      filterBehavior: 'text',
      includeFilterClearBtn: true,
      preventInputChangeEvent: false,
      nonSelectedText: 'None selected',
      nSelectedText: 'selected',
      allSelectedText: 'All selected',
      numberDisplayed: 3,
      disableIfEmpty: false,
      disabledText: '',
      delimiterText: ', ',
      templates: {
        button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
        ul: '<ul class="multiselect-container dropdown-menu"></ul>',
        filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
        filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
        li: '<li><a tabindex="0"><label></label></a></li>',
        divider: '<li class="multiselect-item divider"></li>',
        liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
      }
    },

    constructor: Multiselect,

    /**
     * Builds the container of the multiselect.
     */
    buildContainer: function() {
      this.$container = $(this.options.buttonContainer);
      this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
      this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
      this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
      this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
    },

    /**
     * Builds the button of the multiselect.
     */
    buildButton: function() {
      this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);
      if (this.$select.attr('class') && this.options.inheritClass) {
        this.$button.addClass(this.$select.attr('class'));
      }
      // Adopt active state.
      if (this.$select.prop('disabled')) {
        this.disable();
      }
      else {
        this.enable();
      }

      // Manually add button width if set.
      if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
        this.$button.css({
          'width' : this.options.buttonWidth,
          'overflow' : 'hidden',
          'text-overflow' : 'ellipsis'
        });
        this.$container.css({
          'width': this.options.buttonWidth
        });
      }

      // Keep the tab index from the select.
      var tabindex = this.$select.attr('tabindex');
      if (tabindex) {
        this.$button.attr('tabindex', tabindex);
      }

      this.$container.prepend(this.$button);
    },

    /**
     * Builds the ul representing the dropdown menu.
     */
    buildDropdown: function() {

      // Build ul.
      this.$ul = $(this.options.templates.ul);

      if (this.options.dropRight) {
        this.$ul.addClass('pull-right');
      }

      // Set max height of dropdown menu to activate auto scrollbar.
      if (this.options.maxHeight) {
        // TODO: Add a class for this option to move the css declarations.
        this.$ul.css({
          'max-height': this.options.maxHeight + 'px',
          'overflow-y': 'auto',
          'overflow-x': 'hidden'
        });
      }

      if (this.options.dropUp) {

        var height = Math.min(this.options.maxHeight, $('option[data-role!="divider"]', this.$select).length*26 + $('option[data-role="divider"]', this.$select).length*19 + (this.options.includeSelectAllOption ? 26 : 0) + (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering ? 44 : 0));
        var moveCalc = height + 34;

        this.$ul.css({
          'max-height': height + 'px',
          'overflow-y': 'auto',
          'overflow-x': 'hidden',
          'margin-top': "-" + moveCalc + 'px'
        });
      }

      this.$container.append(this.$ul);
    },

    /**
     * Build the dropdown options and binds all nessecary events.
     *
     * Uses createDivider and createOptionValue to create the necessary options.
     */
    buildDropdownOptions: function() {

      this.$select.children().each($.proxy(function(index, element) {

        var $element = $(element);
        // Support optgroups and options without a group simultaneously.
        var tag = $element.prop('tagName')
          .toLowerCase();

        if ($element.prop('value') === this.options.selectAllValue) {
          return;
        }

        if (tag === 'optgroup') {
          this.createOptgroup(element);
        }
        else if (tag === 'option') {

          if ($element.data('role') === 'divider') {
            this.createDivider();
          }
          else {
            this.createOptionValue(element);
          }

        }

        // Other illegal tags will be ignored.
      }, this));

      // Bind the change event on the dropdown elements.
      $('li input', this.$ul).on('change', $.proxy(function(event) {
        var $target = $(event.target);

        var checked = $target.prop('checked') || false;
        var isSelectAllOption = $target.val() === this.options.selectAllValue;

        // Apply or unapply the configured selected class.
        if (this.options.selectedClass) {
          if (checked) {
            $target.closest('li')
              .addClass(this.options.selectedClass);
          }
          else {
            $target.closest('li')
              .removeClass(this.options.selectedClass);
          }
        }

        // Get the corresponding option.
        var value = $target.val();
        var $option = this.getOptionByValue(value);

        var $optionsNotThis = $('option', this.$select).not($option);
        var $checkboxesNotThis = $('input', this.$container).not($target);

        if (isSelectAllOption) {
          if (checked) {
            this.selectAll(this.options.selectAllJustVisible);
          }
          else {
            this.deselectAll(this.options.selectAllJustVisible);
          }
        }
        else {
          if (checked) {
            $option.prop('selected', true);

            if (this.options.multiple) {
              // Simply select additional option.
              $option.prop('selected', true);
            }
            else {
              // Unselect all other options and corresponding checkboxes.
              if (this.options.selectedClass) {
                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
              }

              $($checkboxesNotThis).prop('checked', false);
              $optionsNotThis.prop('selected', false);

              // It's a single selection, so close.
              this.$button.click();
            }

            if (this.options.selectedClass === "active") {
              $optionsNotThis.closest("a").css("outline", "");
            }
          }
          else {
            // Unselect option.
            $option.prop('selected', false);
          }

          // To prevent select all from firing onChange: #575
          this.options.onChange($option, checked);
        }

        this.$select.change();

        this.updateButtonText();
        this.updateSelectAll();

        if(this.options.preventInputChangeEvent) {
          return false;
        }
      }, this));

      $('li a', this.$ul).on('mousedown', function(e) {
        if (e.shiftKey) {
          // Prevent selecting text by Shift+click
          return false;
        }
      });

      $('li a', this.$ul).on('touchstart click', $.proxy(function(event) {
        event.stopPropagation();

        var $target = $(event.target);

        if (event.shiftKey && this.options.multiple) {
          if($target.is("label")){ // Handles checkbox selection manually (see https://github.com/davidstutz/bootstrap-multiselect/issues/431)
            event.preventDefault();
            $target = $target.find("input");
            $target.prop("checked", !$target.prop("checked"));
          }
          var checked = $target.prop('checked') || false;

          if (this.lastToggledInput !== null && this.lastToggledInput !== $target) { // Make sure we actually have a range
            var from = $target.closest("li").index();
            var to = this.lastToggledInput.closest("li").index();

            if (from > to) { // Swap the indices
              var tmp = to;
              to = from;
              from = tmp;
            }

            // Make sure we grab all elements since slice excludes the last index
            ++to;

            // Change the checkboxes and underlying options
            var range = this.$ul.find("li").slice(from, to).find("input");

            range.prop('checked', checked);

            if (this.options.selectedClass) {
              range.closest('li')
                .toggleClass(this.options.selectedClass, checked);
            }

            for (var i = 0, j = range.length; i < j; i++) {
              var $checkbox = $(range[i]);

              var $option = this.getOptionByValue($checkbox.val());

              $option.prop('selected', checked);
            }
          }

          // Trigger the select "change" event
          $target.trigger("change");
        }

        // Remembers last clicked option
        if($target.is("input") && !$target.closest("li").is(".multiselect-item")){
          this.lastToggledInput = $target;
        }

        $target.blur();
      }, this));

      // Keyboard support.
      this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
        if ($('input[type="text"]', this.$container).is(':focus')) {
          return;
        }

        if (event.keyCode === 9 && this.$container.hasClass('open')) {
          this.$button.click();
        }
        else {
          var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

          if (!$items.length) {
            return;
          }

          var index = $items.index($items.filter(':focus'));

          // Navigation up.
          if (event.keyCode === 38 && index > 0) {
            index--;
          }
          // Navigate down.
          else if (event.keyCode === 40 && index < $items.length - 1) {
            index++;
          }
          else if (!~index) {
            index = 0;
          }

          var $current = $items.eq(index);
          $current.focus();

          if (event.keyCode === 32 || event.keyCode === 13) {
            var $checkbox = $current.find('input');

            $checkbox.prop("checked", !$checkbox.prop("checked"));
            $checkbox.change();
          }

          event.stopPropagation();
          event.preventDefault();
        }
      }, this));

      if(this.options.enableClickableOptGroups && this.options.multiple) {
        $('li.multiselect-group', this.$ul).on('click', $.proxy(function(event) {
          event.stopPropagation();
          console.log('test');
          var group = $(event.target).parent();

          // Search all option in optgroup
          var $options = group.nextUntil('li.multiselect-group');
          var $visibleOptions = $options.filter(":visible:not(.disabled)");

          // check or uncheck items
          var allChecked = true;
          var optionInputs = $visibleOptions.find('input');
          var values = [];

          optionInputs.each(function() {
            allChecked = allChecked && $(this).prop('checked');
            values.push($(this).val());
          });

          if (!allChecked) {
            this.select(values, false);
          }
          else {
            this.deselect(values, false);
          }

          this.options.onChange(optionInputs, !allChecked);
        }, this));
      }

      if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
        $("li.multiselect-group input", this.$ul).off();
        $("li.multiselect-group", this.$ul).siblings().not("li.multiselect-group, li.multiselect-all", this.$ul).each( function () {
          $(this).toggleClass('hidden', true);
        });

        $("li.multiselect-group", this.$ul).on("click", $.proxy(function(group) {
          group.stopPropagation();
        }, this));

        $("li.multiselect-group > a > b", this.$ul).on("click", $.proxy(function(t) {
          t.stopPropagation();
          var n = $(t.target).closest('li');
          var r = n.nextUntil("li.multiselect-group");
          var i = true;

          r.each(function() {
            i = i && $(this).hasClass('hidden');
          });

          r.toggleClass('hidden', !i);
        }, this));

        $("li.multiselect-group > a > input", this.$ul).on("change", $.proxy(function(t) {
          t.stopPropagation();
          var n = $(t.target).closest('li');
          var r = n.nextUntil("li.multiselect-group", ':not(.disabled)');
          var s = r.find("input");

          var i = true;
          s.each(function() {
            i = i && $(this).prop("checked");
          });

          s.prop("checked", !i).trigger("change");
        }, this));

        // Set the initial selection state of the groups.
        $('li.multiselect-group', this.$ul).each(function() {
          var r = $(this).nextUntil("li.multiselect-group", ':not(.disabled)');
          var s = r.find("input");

          var i = true;
          s.each(function() {
            i = i && $(this).prop("checked");
          });

          $(this).find('input').prop("checked", i);
        });

        // Update the group checkbox based on new selections among the
        // corresponding children.
        $("li input", this.$ul).on("change", $.proxy(function(t) {
          t.stopPropagation();
          var n = $(t.target).closest('li');
          var r1 = n.prevUntil("li.multiselect-group", ':not(.disabled)');
          var r2 = n.nextUntil("li.multiselect-group", ':not(.disabled)');
          var s1 = r1.find("input");
          var s2 = r2.find("input");

          var i = $(t.target).prop('checked');
          s1.each(function() {
            i = i && $(this).prop("checked");
          });

          s2.each(function() {
            i = i && $(this).prop("checked");
          });

          n.prevAll('.multiselect-group').find('input').prop('checked', i);
        }, this));

        $("li.multiselect-all", this.$ul).css('background', '#f3f3f3').css('border-bottom', '1px solid #eaeaea');
        $("li.multiselect-group > a, li.multiselect-all > a > label.checkbox", this.$ul).css('padding', '3px 20px 3px 35px');
        $("li.multiselect-group > a > input", this.$ul).css('margin', '4px 0px 5px -20px');
      }
    },

    /**
     * Create an option using the given select option.
     *
     * @param {jQuery} element
     */
    createOptionValue: function(element) {
      var $element = $(element);
      if ($element.is(':selected')) {
        $element.prop('selected', true);
      }

      // Support the label attribute on options.
      var label = this.options.optionLabel(element);
      var classes = this.options.optionClass(element);
      var value = $element.val();
      var inputType = this.options.multiple ? "checkbox" : "radio";

      var $li = $(this.options.templates.li);
      var $label = $('label', $li);
      $label.addClass(inputType);
      $li.addClass(classes);

      if (this.options.enableHTML) {
        $label.html(" " + label);
      }
      else {
        $label.text(" " + label);
      }

      var $checkbox = $('<input/>').attr('type', inputType);

      if (this.options.checkboxName) {
        $checkbox.attr('name', this.options.checkboxName);
      }
      $label.prepend($checkbox);

      var selected = $element.prop('selected') || false;
      $checkbox.val(value);

      if (value === this.options.selectAllValue) {
        $li.addClass("multiselect-item multiselect-all");
        $checkbox.parent().parent()
          .addClass('multiselect-all');
      }

      $label.attr('title', $element.attr('title'));

      this.$ul.append($li);

      if ($element.is(':disabled')) {
        $checkbox.attr('disabled', 'disabled')
          .prop('disabled', true)
          .closest('a')
          .attr("tabindex", "-1")
          .closest('li')
          .addClass('disabled');
      }

      $checkbox.prop('checked', selected);

      if (selected && this.options.selectedClass) {
        $checkbox.closest('li')
          .addClass(this.options.selectedClass);
      }
    },

    /**
     * Creates a divider using the given select option.
     *
     * @param {jQuery} element
     */
    createDivider: function(element) {
      var $divider = $(this.options.templates.divider);
      this.$ul.append($divider);
    },

    /**
     * Creates an optgroup.
     *
     * @param {jQuery} group
     */
    createOptgroup: function(group) {
      if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
        var label = $(group).attr("label");
        var value = $(group).attr("value");
        var r = $('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><input type="checkbox" value="' + value + '"/><b> ' + label + '<b class="caret"></b></b></a></li>');

        if (this.options.enableClickableOptGroups) {
          r.addClass("multiselect-group-clickable")
        }
        this.$ul.append(r);
        if ($(group).is(":disabled")) {
          r.addClass("disabled")
        }
        $("option", group).each($.proxy(function($, group) {
          this.createOptionValue(group)
        }, this))
      }
      else {
        var groupName = $(group).prop('label');

        // Add a header for the group.
        var $li = $(this.options.templates.liGroup);

        if (this.options.enableHTML) {
          $('label', $li).html(groupName);
        }
        else {
          $('label', $li).text(groupName);
        }

        if (this.options.enableClickableOptGroups) {
          $li.addClass('multiselect-group-clickable');
        }

        this.$ul.append($li);

        if ($(group).is(':disabled')) {
          $li.addClass('disabled');
        }

        // Add the options of the group.
        $('option', group).each($.proxy(function(index, element) {
          this.createOptionValue(element);
        }, this));
      }
    },

    /**
     * Build the select all.
     *
     * Checks if a select all has already been created.
     */
    buildSelectAll: function() {
      if (typeof this.options.selectAllValue === 'number') {
        this.options.selectAllValue = this.options.selectAllValue.toString();
      }

      var alreadyHasSelectAll = this.hasSelectAll();

      if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
        && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {

        // Check whether to add a divider after the select all.
        if (this.options.includeSelectAllDivider) {
          this.$ul.prepend($(this.options.templates.divider));
        }

        var $li = $(this.options.templates.li);
        $('label', $li).addClass("checkbox");

        if (this.options.enableHTML) {
          $('label', $li).html(" " + this.options.selectAllText);
        }
        else {
          $('label', $li).text(" " + this.options.selectAllText);
        }

        if (this.options.selectAllName) {
          $('label', $li).prepend('<input type="checkbox" name="' + this.options.selectAllName + '" />');
        }
        else {
          $('label', $li).prepend('<input type="checkbox" />');
        }

        var $checkbox = $('input', $li);
        $checkbox.val(this.options.selectAllValue);

        $li.addClass("multiselect-item multiselect-all");
        $checkbox.parent().parent()
          .addClass('multiselect-all');

        this.$ul.prepend($li);

        $checkbox.prop('checked', false);
      }
    },

    /**
     * Builds the filter.
     */
    buildFilter: function() {

      // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
      if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
        var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

        if (this.$select.find('option').length >= enableFilterLength) {

          this.$filter = $(this.options.templates.filter);
          $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);

          // Adds optional filter clear button
          if(this.options.includeFilterClearBtn){
            var clearBtn = $(this.options.templates.filterClearBtn);
            clearBtn.on('click', $.proxy(function(event){
              clearTimeout(this.searchTimeout);
              this.$filter.find('.multiselect-search').val('');
              $('li', this.$ul).show().removeClass("filter-hidden");
              this.updateSelectAll();
            }, this));
            this.$filter.find('.input-group').append(clearBtn);
          }

          this.$ul.prepend(this.$filter);

          this.$filter.val(this.query).on('click', function(event) {
            event.stopPropagation();
          }).on('input keydown', $.proxy(function(event) {
            // Cancel enter key default behaviour
            if (event.which === 13) {
              event.preventDefault();
            }

            // This is useful to catch "keydown" events after the browser has updated the control.
            clearTimeout(this.searchTimeout);

            this.searchTimeout = this.asyncFunction($.proxy(function() {

              if (this.query !== event.target.value) {
                this.query = event.target.value;

                var currentGroup, currentGroupVisible;
                $.each($('li', this.$ul), $.proxy(function(index, element) {
                  var value = $('input', element).length > 0 ? $('input', element).val() : "";
                  var text = $('label', element).text();

                  var filterCandidate = '';
                  if ((this.options.filterBehavior === 'text')) {
                    filterCandidate = text;
                  }
                  else if ((this.options.filterBehavior === 'value')) {
                    filterCandidate = value;
                  }
                  else if (this.options.filterBehavior === 'both') {
                    filterCandidate = text + '\n' + value;
                  }

                  if (value !== this.options.selectAllValue && text) {

                    // By default lets assume that element is not
                    // interesting for this search.
                    var showElement = false;

                    if (this.options.enableCaseInsensitiveFiltering) {
                      filterCandidate = filterCandidate.toLowerCase();
                      this.query = this.query.toLowerCase();
                    }

                    if (this.options.enableFullValueFiltering && this.options.filterBehavior !== 'both') {
                      var valueToMatch = filterCandidate.trim().substring(0, this.query.length);
                      if (this.query.indexOf(valueToMatch) > -1) {
                        showElement = true;
                      }
                    }
                    else if (filterCandidate.indexOf(this.query) > -1) {
                      showElement = true;
                    }

                    // Toggle current element (group or group item) according to showElement boolean.
                    $(element).toggle(showElement).toggleClass('filter-hidden', !showElement);

                    // Differentiate groups and group items.
                    if ($(element).hasClass('multiselect-group')) {
                      // Remember group status.
                      currentGroup = element;
                      currentGroupVisible = showElement;
                    }
                    else {
                      // Show group name when at least one of its items is visible.
                      if (showElement) {
                        $(currentGroup).show().removeClass('filter-hidden');
                      }

                      // Show all group items when group name satisfies filter.
                      if (!showElement && currentGroupVisible) {
                        $(element).show().removeClass('filter-hidden');
                      }
                    }
                  }
                }, this));
              }

              this.updateSelectAll();
            }, this), 300, this);
          }, this));
        }
      }
    },

    /**
     * Unbinds the whole plugin.
     */
    destroy: function() {
      this.$container.remove();
      this.$select.show();
      this.$select.data('multiselect', null);
    },

    /**
     * Refreshs the multiselect based on the selected options of the select.
     */
    refresh: function () {
      var inputs = $.map($('li input', this.$ul), $);

      $('option', this.$select).each($.proxy(function (index, element) {
        var $elem = $(element);
        var value = $elem.val();
        var $input;
        for (var i = inputs.length; 0 < i--; /**/) {
          if (value !== ($input = inputs[i]).val())
            continue; // wrong li

          if ($elem.is(':selected')) {
            $input.prop('checked', true);

            if (this.options.selectedClass) {
              $input.closest('li')
                .addClass(this.options.selectedClass);
            }
          }
          else {
            $input.prop('checked', false);

            if (this.options.selectedClass) {
              $input.closest('li')
                .removeClass(this.options.selectedClass);
            }
          }

          if ($elem.is(":disabled")) {
            $input.attr('disabled', 'disabled')
              .prop('disabled', true)
              .closest('li')
              .addClass('disabled');
          }
          else {
            $input.prop('disabled', false)
              .closest('li')
              .removeClass('disabled');
          }
          break; // assumes unique values
        }
      }, this));

      this.updateButtonText();
      this.updateSelectAll();
    },

    /**
     * Select all options of the given values.
     *
     * If triggerOnChange is set to true, the on change event is triggered if
     * and only if one value is passed.
     *
     * @param {Array} selectValues
     * @param {Boolean} triggerOnChange
     */
    select: function(selectValues, triggerOnChange) {
      if(!$.isArray(selectValues)) {
        selectValues = [selectValues];
      }

      for (var i = 0; i < selectValues.length; i++) {
        var value = selectValues[i];

        if (value === null || value === undefined) {
          continue;
        }

        var $option = this.getOptionByValue(value);
        var $checkbox = this.getInputByValue(value);

        if($option === undefined || $checkbox === undefined) {
          continue;
        }

        if (!this.options.multiple) {
          this.deselectAll(false);
        }

        if (this.options.selectedClass) {
          $checkbox.closest('li')
            .addClass(this.options.selectedClass);
        }

        $checkbox.prop('checked', true);
        $option.prop('selected', true);

        if (triggerOnChange) {
          this.options.onChange($option, true);
        }
      }

      this.updateButtonText();
      this.updateSelectAll();
    },

    /**
     * Clears all selected items.
     */
    clearSelection: function () {
      this.deselectAll(false);
      this.updateButtonText();
      this.updateSelectAll();
    },

    /**
     * Deselects all options of the given values.
     *
     * If triggerOnChange is set to true, the on change event is triggered, if
     * and only if one value is passed.
     *
     * @param {Array} deselectValues
     * @param {Boolean} triggerOnChange
     */
    deselect: function(deselectValues, triggerOnChange) {
      if(!$.isArray(deselectValues)) {
        deselectValues = [deselectValues];
      }

      for (var i = 0; i < deselectValues.length; i++) {
        var value = deselectValues[i];

        if (value === null || value === undefined) {
          continue;
        }

        var $option = this.getOptionByValue(value);
        var $checkbox = this.getInputByValue(value);

        if($option === undefined || $checkbox === undefined) {
          continue;
        }

        if (this.options.selectedClass) {
          $checkbox.closest('li')
            .removeClass(this.options.selectedClass);
        }

        $checkbox.prop('checked', false);
        $option.prop('selected', false);

        if (triggerOnChange) {
          this.options.onChange($option, false);
        }
      }

      this.updateButtonText();
      this.updateSelectAll();
    },

    /**
     * Selects all enabled & visible options.
     *
     * If justVisible is true or not specified, only visible options are selected.
     *
     * @param {Boolean} justVisible
     * @param {Boolean} triggerOnSelectAll
     */
    selectAll: function (justVisible, triggerOnSelectAll) {
      justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;

      var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
      var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
      var visibleCheckboxes = allCheckboxes.filter(":visible");
      var allCheckboxesCount = allCheckboxes.length;
      var visibleCheckboxesCount = visibleCheckboxes.length;

      if(justVisible) {
        visibleCheckboxes.prop('checked', true);
        $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
      }
      else {
        allCheckboxes.prop('checked', true);
        $("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass);
      }

      if (allCheckboxesCount === visibleCheckboxesCount || justVisible === false) {
        $("option:not([data-role='divider']):enabled", this.$select).prop('selected', true);
      }
      else {
        var values = visibleCheckboxes.map(function() {
          return $(this).val();
        }).get();

        $("option:enabled", this.$select).filter(function(index) {
          return $.inArray($(this).val(), values) !== -1;
        }).prop('selected', true);
      }

      if (triggerOnSelectAll) {
        this.options.onSelectAll();
      }
    },

    /**
     * Deselects all options.
     *
     * If justVisible is true or not specified, only visible options are deselected.
     *
     * @param {Boolean} justVisible
     */
    deselectAll: function (justVisible) {
      justVisible = (this.options.enableCollapsibleOptGroups && this.options.multiple) ? false : justVisible;
      justVisible = typeof justVisible === 'undefined' ? true : justVisible;

      if(justVisible) {
        var visibleCheckboxes = $("li input[type='checkbox']:not(:disabled)", this.$ul).filter(":visible");
        visibleCheckboxes.prop('checked', false);

        var values = visibleCheckboxes.map(function() {
          return $(this).val();
        }).get();

        $("option:enabled", this.$select).filter(function(index) {
          return $.inArray($(this).val(), values) !== -1;
        }).prop('selected', false);

        if (this.options.selectedClass) {
          $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
        }
      }
      else {
        $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
        $("option:enabled", this.$select).prop('selected', false);

        if (this.options.selectedClass) {
          $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
        }
      }
    },

    /**
     * Rebuild the plugin.
     *
     * Rebuilds the dropdown, the filter and the select all option.
     */
    rebuild: function() {
      this.$ul.html('');

      // Important to distinguish between radios and checkboxes.
      this.options.multiple = this.$select.attr('multiple') === "multiple";

      this.buildSelectAll();
      this.buildDropdownOptions();
      this.buildFilter();

      this.updateButtonText();
      this.updateSelectAll(true);

      if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
        this.disable();
      }
      else {
        this.enable();
      }

      if (this.options.dropRight) {
        this.$ul.addClass('pull-right');
      }
    },

    /**
     * The provided data will be used to build the dropdown.
     */
    dataprovider: function(dataprovider) {

      var groupCounter = 0;
      var $select = this.$select.empty();

      $.each(dataprovider, function (index, option) {
        var $tag;

        if ($.isArray(option.children)) { // create optiongroup tag
          groupCounter++;

          $tag = $('<optgroup/>').attr({
            label: option.label || 'Group ' + groupCounter,
            disabled: !!option.disabled
          });

          forEach(option.children, function(subOption) { // add children option tags
            $tag.append($('<option/>').attr({
              value: subOption.value,
              label: subOption.label || subOption.value,
              title: subOption.title,
              selected: !!subOption.selected,
              disabled: !!subOption.disabled
            }));
          });
        }
        else {
          $tag = $('<option/>').attr({
            value: option.value,
            label: option.label || option.value,
            title: option.title,
            class: option.class,
            selected: !!option.selected,
            disabled: !!option.disabled
          });
          $tag.text(option.label || option.value);
        }

        $select.append($tag);
      });

      this.rebuild();
    },

    /**
     * Enable the multiselect.
     */
    enable: function() {
      this.$select.prop('disabled', false);
      this.$button.prop('disabled', false)
        .removeClass('disabled');
    },

    /**
     * Disable the multiselect.
     */
    disable: function() {
      this.$select.prop('disabled', true);
      this.$button.prop('disabled', true)
        .addClass('disabled');
    },

    /**
     * Set the options.
     *
     * @param {Array} options
     */
    setOptions: function(options) {
      this.options = this.mergeOptions(options);
    },

    /**
     * Merges the given options with the default options.
     *
     * @param {Array} options
     * @returns {Array}
     */
    mergeOptions: function(options) {
      return $.extend(true, {}, this.defaults, this.options, options);
    },

    /**
     * Checks whether a select all checkbox is present.
     *
     * @returns {Boolean}
     */
    hasSelectAll: function() {
      return $('li.multiselect-all', this.$ul).length > 0;
    },

    /**
     * Updates the select all checkbox based on the currently displayed and selected checkboxes.
     */
    updateSelectAll: function(notTriggerOnSelectAll) {
      if (this.hasSelectAll()) {
        var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
        var allBoxesLength = allBoxes.length;
        var checkedBoxesLength = allBoxes.filter(":checked").length;
        var selectAllLi  = $("li.multiselect-all", this.$ul);
        var selectAllInput = selectAllLi.find("input");

        if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
          selectAllInput.prop("checked", true);
          selectAllLi.addClass(this.options.selectedClass);
          this.options.onSelectAll(true);
        }
        else {
          selectAllInput.prop("checked", false);
          selectAllLi.removeClass(this.options.selectedClass);
          if (checkedBoxesLength === 0) {
            if (!notTriggerOnSelectAll) {
              this.options.onSelectAll(false);
            }
          }
        }
      }
    },

    /**
     * Update the button text and its title based on the currently selected options.
     */
    updateButtonText: function() {
      var options = this.getSelected();

      // First update the displayed button text.
      if (this.options.enableHTML) {
        $('.multiselect .multiselect-selected-text', this.$container).html(this.options.buttonText(options, this.$select));
      }
      else {
        $('.multiselect .multiselect-selected-text', this.$container).text(this.options.buttonText(options, this.$select));
      }

      // Now update the title attribute of the button.
      $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
    },

    /**
     * Get all selected options.
     *
     * @returns {jQUery}
     */
    getSelected: function() {
      return $('option', this.$select).filter(":selected");
    },

    /**
     * Gets a select option by its value.
     *
     * @param {String} value
     * @returns {jQuery}
     */
    getOptionByValue: function (value) {

      var options = $('option', this.$select);
      var valueToCompare = value.toString();

      for (var i = 0; i < options.length; i = i + 1) {
        var option = options[i];
        if (option.value === valueToCompare) {
          return $(option);
        }
      }
    },

    /**
     * Get the input (radio/checkbox) by its value.
     *
     * @param {String} value
     * @returns {jQuery}
     */
    getInputByValue: function (value) {

      var checkboxes = $('li input', this.$ul);
      var valueToCompare = value.toString();

      for (var i = 0; i < checkboxes.length; i = i + 1) {
        var checkbox = checkboxes[i];
        if (checkbox.value === valueToCompare) {
          return $(checkbox);
        }
      }
    },

    /**
     * Used for knockout integration.
     */
    updateOriginalOptions: function() {
      this.originalOptions = this.$select.clone()[0].options;
    },

    asyncFunction: function(callback, timeout, self) {
      var args = Array.prototype.slice.call(arguments, 3);
      return setTimeout(function() {
        callback.apply(self || window, args);
      }, timeout);
    },

    setAllSelectedText: function(allSelectedText) {
      this.options.allSelectedText = allSelectedText;
      this.updateButtonText();
    }
  };

  $.fn.multiselect = function(option, parameter, extraOptions) {
    return this.each(function() {
      var data = $(this).data('multiselect');
      var options = typeof option === 'object' && option;

      // Initialize the multiselect.
      if (!data) {
        data = new Multiselect(this, options);
        $(this).data('multiselect', data);
      }

      // Call multiselect method.
      if (typeof option === 'string') {
        data[option](parameter, extraOptions);

        if (option === 'destroy') {
          $(this).data('multiselect', false);
        }
      }
    });
  };

  $.fn.multiselect.Constructor = Multiselect;

  $(function() {
    $("select[data-role=multiselect]").multiselect();
  });

}(window.jQuery);
},{}],3:[function(require,module,exports){
/*! ========================================================================
 * Bootstrap Toggle: bootstrap-toggle.js v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */


+function ($) {


  // TOGGLE PUBLIC CLASS DEFINITION
  // ==============================

  var Toggle = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, this.defaults(), options)
    this.render()
  }

  Toggle.VERSION  = '2.2.0'

  Toggle.DEFAULTS = {
    on: 'On',
    off: 'Off',
    onstyle: 'primary',
    offstyle: 'default',
    size: 'normal',
    style: '',
    width: null,
    height: null
  }

  Toggle.prototype.defaults = function() {
    return {
      on: this.$element.attr('data-on') || Toggle.DEFAULTS.on,
      off: this.$element.attr('data-off') || Toggle.DEFAULTS.off,
      onstyle: this.$element.attr('data-onstyle') || Toggle.DEFAULTS.onstyle,
      offstyle: this.$element.attr('data-offstyle') || Toggle.DEFAULTS.offstyle,
      size: this.$element.attr('data-size') || Toggle.DEFAULTS.size,
      style: this.$element.attr('data-style') || Toggle.DEFAULTS.style,
      width: this.$element.attr('data-width') || Toggle.DEFAULTS.width,
      height: this.$element.attr('data-height') || Toggle.DEFAULTS.height
    }
  }

  Toggle.prototype.render = function () {
    this._onstyle = 'btn-' + this.options.onstyle
    this._offstyle = 'btn-' + this.options.offstyle
    var size = this.options.size === 'large' ? 'btn-lg'
      : this.options.size === 'small' ? 'btn-sm'
        : this.options.size === 'mini' ? 'btn-xs'
          : ''
    var $toggleOn = $('<label class="btn">').html(this.options.on)
      .addClass(this._onstyle + ' ' + size)
    var $toggleOff = $('<label class="btn">').html(this.options.off)
      .addClass(this._offstyle + ' ' + size + ' active')
    var $toggleHandle = $('<span class="toggle-handle btn btn-default">')
      .addClass(size)
    var $toggleGroup = $('<div class="toggle-group">')
      .append($toggleOn, $toggleOff, $toggleHandle)
    var $toggle = $('<div class="toggle btn" data-toggle="toggle">')
      .addClass( this.$element.prop('checked') ? this._onstyle : this._offstyle+' off' )
      .addClass(size).addClass(this.options.style)

    this.$element.wrap($toggle)
    $.extend(this, {
      $toggle: this.$element.parent(),
      $toggleOn: $toggleOn,
      $toggleOff: $toggleOff,
      $toggleGroup: $toggleGroup
    })
    this.$toggle.append($toggleGroup)

    var width = this.options.width || Math.max($toggleOn.outerWidth(), $toggleOff.outerWidth())+($toggleHandle.outerWidth()/2)
    var height = this.options.height || Math.max($toggleOn.outerHeight(), $toggleOff.outerHeight())
    $toggleOn.addClass('toggle-on')
    $toggleOff.addClass('toggle-off')
    this.$toggle.css({ width: width, height: height })
    if (this.options.height) {
      $toggleOn.css('line-height', $toggleOn.height() + 'px')
      $toggleOff.css('line-height', $toggleOff.height() + 'px')
    }
    this.update(true)
    this.trigger(true)
  }

  Toggle.prototype.toggle = function () {
    if (this.$element.prop('checked')) this.off()
    else this.on()
  }

  Toggle.prototype.on = function (silent) {
    if (this.$element.prop('disabled')) return false
    this.$toggle.removeClass(this._offstyle + ' off').addClass(this._onstyle)
    this.$element.prop('checked', true)
    if (!silent) this.trigger()
  }

  Toggle.prototype.off = function (silent) {
    if (this.$element.prop('disabled')) return false
    this.$toggle.removeClass(this._onstyle).addClass(this._offstyle + ' off')
    this.$element.prop('checked', false)
    if (!silent) this.trigger()
  }

  Toggle.prototype.enable = function () {
    this.$toggle.removeAttr('disabled')
    this.$element.prop('disabled', false)
  }

  Toggle.prototype.disable = function () {
    this.$toggle.attr('disabled', 'disabled')
    this.$element.prop('disabled', true)
  }

  Toggle.prototype.update = function (silent) {
    if (this.$element.prop('disabled')) this.disable()
    else this.enable()
    if (this.$element.prop('checked')) this.on(silent)
    else this.off(silent)
  }

  Toggle.prototype.trigger = function (silent) {
    this.$element.off('change.bs.toggle')
    if (!silent) this.$element.change()
    this.$element.on('change.bs.toggle', $.proxy(function() {
      this.update()
    }, this))
  }

  Toggle.prototype.destroy = function() {
    this.$element.off('change.bs.toggle')
    this.$toggleGroup.remove()
    this.$element.removeData('bs.toggle')
    this.$element.unwrap()
  }

  // TOGGLE PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.toggle')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.toggle', (data = new Toggle(this, options)))
      if (typeof option == 'string' && data[option]) data[option]()
    })
  }

  var old = $.fn.bootstrapToggle

  $.fn.bootstrapToggle             = Plugin
  $.fn.bootstrapToggle.Constructor = Toggle

  // TOGGLE NO CONFLICT
  // ==================

  $.fn.toggle.noConflict = function () {
    $.fn.bootstrapToggle = old
    return this
  }

  // TOGGLE DATA-API
  // ===============

  $(function() {
    $('input[type=checkbox][data-toggle^=toggle]').bootstrapToggle()
  })

  $(document).on('click.bs.toggle', 'div[data-toggle^=toggle]', function(e) {
    var $checkbox = $(this).find('input[type=checkbox]')
    $checkbox.bootstrapToggle('toggle')
    e.preventDefault()
  })

}(jQuery);
},{}],4:[function(require,module,exports){
/**
 * @preserve
 * jquery.layout 1.4.4
 * $Date: 2014-11-29 08:00:00 (Sat, 29 November 2014) $
 * $Rev: 1.0404 $
 *
 * Copyright (c) 2014 Kevin Dalman (http://jquery-dev.com)
 * Based on work by Fabrizio Balliano (http://www.fabrizioballiano.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * SEE: http://layout.jquery-dev.com/LICENSE.txt
 *
 * Changelog: http://layout.jquery-dev.com/changelog.cfm
 *
 * Docs: http://layout.jquery-dev.com/documentation.html
 * Tips: http://layout.jquery-dev.com/tips.html
 * Help: http://groups.google.com/group/jquery-ui-layout
 */

/* JavaDoc Info: http://code.google.com/closure/compiler/docs/js-for-compiler.html
 * {!Object}	non-nullable type (never NULL)
 * {?string}	nullable type (sometimes NULL) - default for {Object}
 * {number=}	optional parameter
 * {*}			ALL types
 */
/*	TODO for jQ 2.x
 *	check $.fn.disableSelection - this is in jQuery UI 1.9.x
 */

// NOTE: For best readability, view with a fixed-width font and tabs equal to 4-chars

;(function ($) {

// alias Math methods - used a lot!
  var	min		= Math.min
    ,	max		= Math.max
    ,	round	= Math.floor

    ,	isStr	=  function (v) { return $.type(v) === "string"; }

    /**
     * @param {!Object}			Instance
     * @param {Array.<string>}	a_fn
     */
    ,	runPluginCallbacks = function (Instance, a_fn) {
      if ($.isArray(a_fn))
        for (var i=0, c=a_fn.length; i<c; i++) {
          var fn = a_fn[i];
          try {
            if (isStr(fn)) // 'name' of a function
              fn = eval(fn);
            if ($.isFunction(fn))
              g(fn)( Instance );
          } catch (ex) {}
        }
      function g (f) { return f; }; // compiler hack
    }
  ;

  /*
   *	GENERIC $.layout METHODS - used by all layouts
   */
  $.layout = {

    version:	"1.4.4"
    ,	revision:	1.0404 // eg: ver 1.4.4 = rev 1.0404 - major(n+).minor(nn)+patch(nn+)

    // $.layout.browser REPLACES $.browser
    ,	browser:	{} // set below

    // *PREDEFINED* EFFECTS & DEFAULTS
    // MUST list effect here - OR MUST set an fxSettings option (can be an empty hash: {})
    ,	effects: {

      //	Pane Open/Close Animations
      slide: {
        all:	{ duration:  "fast"	} // eg: duration: 1000, easing: "easeOutBounce"
        ,	north:	{ direction: "up"	}
        ,	south:	{ direction: "down"	}
        ,	east:	{ direction: "right"}
        ,	west:	{ direction: "left"	}
      }
      ,	drop: {
        all:	{ duration:  "slow"	}
        ,	north:	{ direction: "up"	}
        ,	south:	{ direction: "down"	}
        ,	east:	{ direction: "right"}
        ,	west:	{ direction: "left"	}
      }
      ,	scale: {
        all:	{ duration:	"fast"	}
      }
      //	these are not recommended, but can be used
      ,	blind:		{}
      ,	clip:		{}
      ,	explode:	{}
      ,	fade:		{}
      ,	fold:		{}
      ,	puff:		{}

      //	Pane Resize Animations
      ,	size: {
        all:	{ easing:	"swing"	}
      }
    }

    // INTERNAL CONFIG DATA - DO NOT CHANGE THIS!
    ,	config: {
      optionRootKeys:	"effects,panes,north,south,west,east,center".split(",")
      ,	allPanes:		"north,south,west,east,center".split(",")
      ,	borderPanes:	"north,south,west,east".split(",")
      ,	oppositeEdge: {
        north:	"south"
        ,	south:	"north"
        ,	east: 	"west"
        ,	west: 	"east"
      }
      //	offscreen data
      ,	offscreenCSS:	{ left: "-99999px", right: "auto" } // used by hide/close if useOffscreenClose=true
      ,	offscreenReset:	"offscreenReset" // key used for data
      //	CSS used in multiple places
      ,	hidden:		{ visibility: "hidden" }
      ,	visible:	{ visibility: "visible" }
      //	layout element settings
      ,	resizers: {
        cssReq: {
          position: 	"absolute"
          ,	padding: 	0
          ,	margin: 	0
          ,	fontSize:	"1px"
          ,	textAlign:	"left"	// to counter-act "center" alignment!
          ,	overflow: 	"hidden" // prevent toggler-button from overflowing
          //	SEE $.layout.defaults.zIndexes.resizer_normal
        }
        ,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
          background: "#DDD"
          ,	border:		"none"
        }
      }
      ,	togglers: {
        cssReq: {
          position: 	"absolute"
          ,	display: 	"block"
          ,	padding: 	0
          ,	margin: 	0
          ,	overflow:	"hidden"
          ,	textAlign:	"center"
          ,	fontSize:	"1px"
          ,	cursor: 	"pointer"
          ,	zIndex: 	1
        }
        ,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
          background: "#AAA"
        }
      }
      ,	content: {
        cssReq: {
          position:	"relative" /* contain floated or positioned elements */
        }
        ,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
          overflow:	"auto"
          ,	padding:	"10px"
        }
        ,	cssDemoPane: { // DEMO CSS - REMOVE scrolling from 'pane' when it has a content-div
          overflow:	"hidden"
          ,	padding:	0
        }
      }
      ,	panes: { // defaults for ALL panes - overridden by 'per-pane settings' below
        cssReq: {
          position: 	"absolute"
          ,	margin:		0
          //	$.layout.defaults.zIndexes.pane_normal
        }
        ,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
          padding:	"10px"
          ,	background:	"#FFF"
          ,	border:		"1px solid #BBB"
          ,	overflow:	"auto"
        }
      }
      ,	north: {
        side:			"top"
        ,	sizeType:		"Height"
        ,	dir:			"horz"
        ,	cssReq: {
          top: 		0
          ,	bottom: 	"auto"
          ,	left: 		0
          ,	right: 		0
          ,	width: 		"auto"
          //	height: 	DYNAMIC
        }
      }
      ,	south: {
        side:			"bottom"
        ,	sizeType:		"Height"
        ,	dir:			"horz"
        ,	cssReq: {
          top: 		"auto"
          ,	bottom: 	0
          ,	left: 		0
          ,	right: 		0
          ,	width: 		"auto"
          //	height: 	DYNAMIC
        }
      }
      ,	east: {
        side:			"right"
        ,	sizeType:		"Width"
        ,	dir:			"vert"
        ,	cssReq: {
          left: 		"auto"
          ,	right: 		0
          ,	top: 		"auto" // DYNAMIC
          ,	bottom: 	"auto" // DYNAMIC
          ,	height: 	"auto"
          //	width: 		DYNAMIC
        }
      }
      ,	west: {
        side:			"left"
        ,	sizeType:		"Width"
        ,	dir:			"vert"
        ,	cssReq: {
          left: 		0
          ,	right: 		"auto"
          ,	top: 		"auto" // DYNAMIC
          ,	bottom: 	"auto" // DYNAMIC
          ,	height: 	"auto"
          //	width: 		DYNAMIC
        }
      }
      ,	center: {
        dir:			"center"
        ,	cssReq: {
          left: 		"auto" // DYNAMIC
          ,	right: 		"auto" // DYNAMIC
          ,	top: 		"auto" // DYNAMIC
          ,	bottom: 	"auto" // DYNAMIC
          ,	height: 	"auto"
          ,	width: 		"auto"
        }
      }
    }

    // CALLBACK FUNCTION NAMESPACE - used to store reusable callback functions
    ,	callbacks: {}

    ,	getParentPaneElem: function (el) {
      // must pass either a container or pane element
      var $el = $(el)
        ,	layout = $el.data("layout") || $el.data("parentLayout");
      if (layout) {
        var $cont = layout.container;
        // see if this container is directly-nested inside an outer-pane
        if ($cont.data("layoutPane")) return $cont;
        var $pane = $cont.closest("."+ $.layout.defaults.panes.paneClass);
        // if a pane was found, return it
        if ($pane.data("layoutPane")) return $pane;
      }
      return null;
    }

    ,	getParentPaneInstance: function (el) {
      // must pass either a container or pane element
      var $pane = $.layout.getParentPaneElem(el);
      return $pane ? $pane.data("layoutPane") : null;
    }

    ,	getParentLayoutInstance: function (el) {
      // must pass either a container or pane element
      var $pane = $.layout.getParentPaneElem(el);
      return $pane ? $pane.data("parentLayout") : null;
    }

    ,	getEventObject: function (evt) {
      return typeof evt === "object" && evt.stopPropagation ? evt : null;
    }
    ,	parsePaneName: function (evt_or_pane) {
      var evt = $.layout.getEventObject( evt_or_pane )
        ,	pane = evt_or_pane;
      if (evt) {
        // ALWAYS stop propagation of events triggered in Layout!
        evt.stopPropagation();
        pane = $(this).data("layoutEdge");
      }
      if (pane && !/^(west|east|north|south|center)$/.test(pane)) {
        $.layout.msg('LAYOUT ERROR - Invalid pane-name: "'+ pane +'"');
        pane = "error";
      }
      return pane;
    }


    // LAYOUT-PLUGIN REGISTRATION
    // more plugins can added beyond this default list
    ,	plugins: {
      draggable:		!!$.fn.draggable // resizing
      ,	effects: {
        core:		!!$.effects		// animimations (specific effects tested by initOptions)
        ,	slide:		$.effects && ($.effects.slide || ($.effects.effect && $.effects.effect.slide)) // default effect
      }
    }

//	arrays of plugin or other methods to be triggered for events in *each layout* - will be passed 'Instance'
    ,	onCreate:	[]	// runs when layout is just starting to be created - right after options are set
    ,	onLoad:		[]	// runs after layout container and global events init, but before initPanes is called
    ,	onReady:	[]	// runs after initialization *completes* - ie, after initPanes completes successfully
    ,	onDestroy:	[]	// runs after layout is destroyed
    ,	onUnload:	[]	// runs after layout is destroyed OR when page unloads
    ,	afterOpen:	[]	// runs after setAsOpen() completes
    ,	afterClose:	[]	// runs after setAsClosed() completes

    /*
     *	GENERIC UTILITY METHODS
     */

    // calculate and return the scrollbar width, as an integer
    ,	scrollbarWidth:		function () { return window.scrollbarWidth  || $.layout.getScrollbarSize('width'); }
    ,	scrollbarHeight:	function () { return window.scrollbarHeight || $.layout.getScrollbarSize('height'); }
    ,	getScrollbarSize:	function (dim) {
      var $c	= $('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; border: 0; overflow: scroll;"></div>').appendTo("body")
        ,	d	= { width: $c.outerWidth - $c[0].clientWidth, height: 100 - $c[0].clientHeight };
      $c.remove();
      window.scrollbarWidth	= d.width;
      window.scrollbarHeight	= d.height;
      return dim.match(/^(width|height)$/) ? d[dim] : d;
    }


    ,	disableTextSelection: function () {
      var $d	= $(document)
        ,	s	= 'textSelectionDisabled'
        ,	x	= 'textSelectionInitialized'
      ;
      if ($.fn.disableSelection) {
        if (!$d.data(x)) // document hasn't been initialized yet
          $d.on('mouseup', $.layout.enableTextSelection ).data(x, true);
        if (!$d.data(s))
          $d.disableSelection().data(s, true);
      }
    }
    ,	enableTextSelection: function () {
      var $d	= $(document)
        ,	s	= 'textSelectionDisabled';
      if ($.fn.enableSelection && $d.data(s))
        $d.enableSelection().data(s, false);
    }


    /**
     * Returns hash container 'display' and 'visibility'
     *
     * @see	$.swap() - swaps CSS, runs callback, resets CSS
     * @param  {!Object}		$E				jQuery element
     * @param  {boolean=}	[force=false]	Run even if display != none
     * @return {!Object}						Returns current style props, if applicable
     */
    ,	showInvisibly: function ($E, force) {
      if ($E && $E.length && (force || $E.css("display") === "none")) { // only if not *already hidden*
        var s = $E[0].style
          // save ONLY the 'style' props because that is what we must restore
          ,	CSS = { display: s.display || '', visibility: s.visibility || '' };
        // show element 'invisibly' so can be measured
        $E.css({ display: "block", visibility: "hidden" });
        return CSS;
      }
      return {};
    }

    /**
     * Returns data for setting size of an element (container or a pane).
     *
     * @see  _create(), onWindowResize() for container, plus others for pane
     * @return JSON  Returns a hash of all dimensions: top, bottom, left, right, outerWidth, innerHeight, etc
     */
    ,	getElementDimensions: function ($E, inset) {
      var
        //	dimensions hash - start with current data IF passed
        d	= { css: {}, inset: {} }
        ,	x	= d.css			// CSS hash
        ,	i	= { bottom: 0 }	// TEMP insets (bottom = complier hack)
        ,	N	= $.layout.cssNum
        ,	R	= Math.round
        ,	off = $E.offset()
        ,	b, p, ei			// TEMP border, padding
      ;
      d.offsetLeft = off.left;
      d.offsetTop  = off.top;

      if (!inset) inset = {}; // simplify logic below

      $.each("Left,Right,Top,Bottom".split(","), function (idx, e) { // e = edge
        b = x["border" + e] = $.layout.borderWidth($E, e);
        p = x["padding"+ e] = $.layout.cssNum($E, "padding"+e);
        ei = e.toLowerCase();
        d.inset[ei] = inset[ei] >= 0 ? inset[ei] : p; // any missing insetX value = paddingX
        i[ei] = d.inset[ei] + b; // total offset of content from outer side
      });

      x.width		= R($E.width());
      x.height	= R($E.height());
      x.top		= N($E,"top",true);
      x.bottom	= N($E,"bottom",true);
      x.left		= N($E,"left",true);
      x.right		= N($E,"right",true);

      d.outerWidth	= R($E.outerWidth());
      d.outerHeight	= R($E.outerHeight());
      // calc the TRUE inner-dimensions, even in quirks-mode!
      d.innerWidth	= max(0, d.outerWidth  - i.left - i.right);
      d.innerHeight	= max(0, d.outerHeight - i.top  - i.bottom);
      // layoutWidth/Height is used in calcs for manual resizing
      // layoutW/H only differs from innerW/H when in quirks-mode - then is like outerW/H
      d.layoutWidth	= R($E.innerWidth());
      d.layoutHeight	= R($E.innerHeight());

      //if ($E.prop('tagName') === 'BODY') { debugData( d, $E.prop('tagName') ); } // DEBUG

      //d.visible	= $E.is(":visible");// && x.width > 0 && x.height > 0;

      return d;
    }

    ,	getElementStyles: function ($E, list) {
      var
        CSS	= {}
        ,	style	= $E[0].style
        ,	props	= list.split(",")
        ,	sides	= "Top,Bottom,Left,Right".split(",")
        ,	attrs	= "Color,Style,Width".split(",")
        ,	p, s, a, i, j, k
      ;
      for (i=0; i < props.length; i++) {
        p = props[i];
        if (p.match(/(border|padding|margin)$/))
          for (j=0; j < 4; j++) {
            s = sides[j];
            if (p === "border")
              for (k=0; k < 3; k++) {
                a = attrs[k];
                CSS[p+s+a] = style[p+s+a];
              }
            else
              CSS[p+s] = style[p+s];
          }
        else
          CSS[p] = style[p];
      };
      return CSS
    }

    /**
     * Return the innerWidth for the current browser/doctype
     *
     * @see  initPanes(), sizeMidPanes(), initHandles(), sizeHandles()
     * @param  {Array.<Object>}	$E  Must pass a jQuery object - first element is processed
     * @param  {number=}			outerWidth (optional) Can pass a width, allowing calculations BEFORE element is resized
     * @return {number}			Returns the innerWidth of the elem by subtracting padding and borders
     */
    ,	cssWidth: function ($E, outerWidth) {
      // a 'calculated' outerHeight can be passed so borders and/or padding are removed if needed
      if (outerWidth <= 0) return 0;

      var lb	= $.layout.browser
        ,	bs	= !lb.boxModel ? "border-box" : lb.boxSizing ? $E.css("boxSizing") : "content-box"
        ,	b	= $.layout.borderWidth
        ,	n	= $.layout.cssNum
        ,	W	= outerWidth
      ;
      // strip border and/or padding from outerWidth to get CSS Width
      if (bs !== "border-box")
        W -= (b($E, "Left") + b($E, "Right"));
      if (bs === "content-box")
        W -= (n($E, "paddingLeft") + n($E, "paddingRight"));
      return max(0,W);
    }

    /**
     * Return the innerHeight for the current browser/doctype
     *
     * @see  initPanes(), sizeMidPanes(), initHandles(), sizeHandles()
     * @param  {Array.<Object>}	$E  Must pass a jQuery object - first element is processed
     * @param  {number=}			outerHeight  (optional) Can pass a width, allowing calculations BEFORE element is resized
     * @return {number}			Returns the innerHeight of the elem by subtracting padding and borders
     */
    ,	cssHeight: function ($E, outerHeight) {
      // a 'calculated' outerHeight can be passed so borders and/or padding are removed if needed
      if (outerHeight <= 0) return 0;

      var lb	= $.layout.browser
        ,	bs	= !lb.boxModel ? "border-box" : lb.boxSizing ? $E.css("boxSizing") : "content-box"
        ,	b	= $.layout.borderWidth
        ,	n	= $.layout.cssNum
        ,	H	= outerHeight
      ;
      // strip border and/or padding from outerHeight to get CSS Height
      if (bs !== "border-box")
        H -= (b($E, "Top") + b($E, "Bottom"));
      if (bs === "content-box")
        H -= (n($E, "paddingTop") + n($E, "paddingBottom"));
      return max(0,H);
    }

    /**
     * Returns the 'current CSS numeric value' for a CSS property - 0 if property does not exist
     *
     * @see  Called by many methods
     * @param {Array.<Object>}	$E					Must pass a jQuery object - first element is processed
     * @param {string}			prop				The name of the CSS property, eg: top, width, etc.
     * @param {boolean=}			[allowAuto=false]	true = return 'auto' if that is value; false = return 0
     * @return {(string|number)}						Usually used to get an integer value for position (top, left) or size (height, width)
     */
    ,	cssNum: function ($E, prop, allowAuto) {
      if (!$E.jquery) $E = $($E);
      var CSS = $.layout.showInvisibly($E)
        ,	p	= $.css($E[0], prop, true)
        ,	v	= allowAuto && p=="auto" ? p : Math.round(parseFloat(p) || 0);
      $E.css( CSS ); // RESET
      return v;
    }

    ,	borderWidth: function (el, side) {
      if (el.jquery) el = el[0];
      var b = "border"+ side.substr(0,1).toUpperCase() + side.substr(1); // left => Left
      return $.css(el, b+"Style", true) === "none" ? 0 : Math.round(parseFloat($.css(el, b+"Width", true)) || 0);
    }

    /**
     * Mouse-tracking utility - FUTURE REFERENCE
     *
     * init: if (!window.mouse) {
	 *			window.mouse = { x: 0, y: 0 };
	 *			$(document).mousemove( $.layout.trackMouse );
	 *		}
     *
     * @param {Object}		evt
     *
     ,	trackMouse: function (evt) {
		window.mouse = { x: evt.clientX, y: evt.clientY };
	}
     */

    /**
     * SUBROUTINE for preventPrematureSlideClose option
     *
     * @param {Object}		evt
     * @param {Object=}		el
     */
    ,	isMouseOverElem: function (evt, el) {
      var
        $E	= $(el || this)
        ,	d	= $E.offset()
        ,	T	= d.top
        ,	L	= d.left
        ,	R	= L + $E.outerWidth()
        ,	B	= T + $E.outerHeight()
        ,	x	= evt.pageX	// evt.clientX ?
        ,	y	= evt.pageY	// evt.clientY ?
      ;
      // if X & Y are < 0, probably means is over an open SELECT
      return ($.layout.browser.msie && x < 0 && y < 0) || ((x >= L && x <= R) && (y >= T && y <= B));
    }

    /**
     * Message/Logging Utility
     *
     * @example $.layout.msg("My message");				// log text
     * @example $.layout.msg("My message", true);		// alert text
     * @example $.layout.msg({ foo: "bar" }, "Title");	// log hash-data, with custom title
     * @example $.layout.msg({ foo: "bar" }, true, "Title", { sort: false }); -OR-
     * @example $.layout.msg({ foo: "bar" }, "Title", { sort: false, display: true }); // alert hash-data
     *
     * @param {(Object|string)}			info			String message OR Hash/Array
     * @param {(Boolean|string|Object)=}	[popup=false]	True means alert-box - can be skipped
     * @param {(Object|string)=}			[debugTitle=""]	Title for Hash data - can be skipped
     * @param {Object=}					[debugOpts]		Extra options for debug output
     */
    ,	msg: function (info, popup, debugTitle, debugOpts) {
      if ($.isPlainObject(info) && window.debugData) {
        if (typeof popup === "string") {
          debugOpts	= debugTitle;
          debugTitle	= popup;
        }
        else if (typeof debugTitle === "object") {
          debugOpts	= debugTitle;
          debugTitle	= null;
        }
        var t = debugTitle || "log( <object> )"
          ,	o = $.extend({ sort: false, returnHTML: false, display: false }, debugOpts);
        if (popup === true || o.display)
          debugData( info, t, o );
        else if (window.console)
          console.log(debugData( info, t, o ));
      }
      else if (popup)
        alert(info);
      else if (window.console)
        console.log(info);
      else {
        var id	= "#layoutLogger"
          ,	$l = $(id);
        if (!$l.length)
          $l = createLog();
        $l.children("ul").append('<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">'+ info.replace(/\</g,"&lt;").replace(/\>/g,"&gt;") +'</li>');
      }

      function createLog () {
        var pos = $.support.fixedPosition ? 'fixed' : 'absolute'
          ,	$e = $('<div id="layoutLogger" style="position: '+ pos +'; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">'
          +	'<div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;">'
          +	'<span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div>'
          +	'<ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul>'
          + '</div>'
        ).appendTo("body");
        $e.css('left', $(window).width() - $e.outerWidth() - 5)
        if ($.ui.draggable) $e.draggable({ handle: ':first-child' });
        return $e;
      };
    }

  };


  /*
   *	$.layout.browser REPLACES removed $.browser, with extra data
   *	Parsing code here adapted from jQuery 1.8 $.browse
   */
  (function(){
    var u = navigator.userAgent.toLowerCase()
      ,	m = /(chrome)[ \/]([\w.]+)/.exec( u )
      ||	/(webkit)[ \/]([\w.]+)/.exec( u )
      ||	/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( u )
      ||	/(msie) ([\w.]+)/.exec( u )
      ||	u.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( u )
      ||	[]
      ,	b = m[1] || ""
      ,	v = m[2] || 0
      ,	ie = b === "msie"
      ,	cm = document.compatMode
      ,	$s = $.support
      ,	bs = $s.boxSizing !== undefined ? $s.boxSizing : $s.boxSizingReliable
      ,	bm = !ie || !cm || cm === "CSS1Compat" || $s.boxModel || false
      ,	lb = $.layout.browser = {
      version:	v
      ,	safari:		b === "webkit"	// webkit (NOT chrome) = safari
      ,	webkit:		b === "chrome"	// chrome = webkit
      ,	msie:		ie
      ,	isIE6:		ie && v == 6
      // ONLY IE reverts to old box-model - Note that compatMode was deprecated as of IE8
      ,	boxModel:	bm
      ,	boxSizing:	!!(typeof bs === "function" ? bs() : bs)
    };
    ;
    if (b) lb[b] = true; // set CURRENT browser
    /*	OLD versions of jQuery only set $.support.boxModel after page is loaded
     *	so if this is IE, use support.boxModel to test for quirks-mode (ONLY IE changes boxModel) */
    if (!bm && !cm) $(function(){ lb.boxModel = $s.boxModel; });
  })();


// DEFAULT OPTIONS
  $.layout.defaults = {
    /*
     *	LAYOUT & LAYOUT-CONTAINER OPTIONS
     *	- none of these options are applicable to individual panes
     */
    name:						""			// Not required, but useful for buttons and used for the state-cookie
    ,	containerClass:				"ui-layout-container" // layout-container element
    ,	inset:						null		// custom container-inset values (override padding)
    ,	scrollToBookmarkOnLoad:		true		// after creating a layout, scroll to bookmark in URL (.../page.htm#myBookmark)
    ,	resizeWithWindow:			true		// bind thisLayout.resizeAll() to the window.resize event
    ,	resizeWithWindowDelay:		200			// delay calling resizeAll because makes window resizing very jerky
    ,	resizeWithWindowMaxDelay:	0			// 0 = none - force resize every XX ms while window is being resized
    ,	maskPanesEarly:				false		// true = create pane-masks on resizer.mouseDown instead of waiting for resizer.dragstart
    ,	onresizeall_start:			null		// CALLBACK when resizeAll() STARTS	- NOT pane-specific
    ,	onresizeall_end:			null		// CALLBACK when resizeAll() ENDS	- NOT pane-specific
    ,	onload_start:				null		// CALLBACK when Layout inits - after options initialized, but before elements
    ,	onload_end:					null		// CALLBACK when Layout inits - after EVERYTHING has been initialized
    ,	onunload_start:				null		// CALLBACK when Layout is destroyed OR onWindowUnload
    ,	onunload_end:				null		// CALLBACK when Layout is destroyed OR onWindowUnload
    ,	initPanes:					true		// false = DO NOT initialize the panes onLoad - will init later
    ,	showErrorMessages:			true		// enables fatal error messages to warn developers of common errors
    ,	showDebugMessages:			false		// display console-and-alert debug msgs - IF this Layout version _has_ debugging code!
//	Changing this zIndex value will cause other zIndex values to automatically change
    ,	zIndex:						null		// the PANE zIndex - resizers and masks will be +1
//	DO NOT CHANGE the zIndex values below unless you clearly understand their relationships
    ,	zIndexes: {								// set _default_ z-index values here...
      pane_normal:			0			// normal z-index for panes
      ,	content_mask:			1			// applied to overlays used to mask content INSIDE panes during resizing
      ,	resizer_normal:			2			// normal z-index for resizer-bars
      ,	pane_sliding:			100			// applied to *BOTH* the pane and its resizer when a pane is 'slid open'
      ,	pane_animate:			1000		// applied to the pane when being animated - not applied to the resizer
      ,	resizer_drag:			10000		// applied to the CLONED resizer-bar when being 'dragged'
    }
    ,	errors: {
      pane:					"pane"		// description of "layout pane element" - used only in error messages
      ,	selector:				"selector"	// description of "jQuery-selector" - used only in error messages
      ,	addButtonError:			"Error Adding Button\nInvalid "
      ,	containerMissing:		"UI Layout Initialization Error\nThe specified layout-container does not exist."
      ,	centerPaneMissing:		"UI Layout Initialization Error\nThe center-pane element does not exist.\nThe center-pane is a required element."
      ,	noContainerHeight:		"UI Layout Initialization Warning\nThe layout-container \"CONTAINER\" has no height.\nTherefore the layout is 0-height and hence 'invisible'!"
      ,	callbackError:			"UI Layout Callback Error\nThe EVENT callback is not a valid function."
    }
    /*
     *	PANE DEFAULT SETTINGS
     *	- settings under the 'panes' key become the default settings for *all panes*
     *	- ALL pane-options can also be set specifically for each panes, which will override these 'default values'
     */
    ,	panes: { // default options for 'all panes' - will be overridden by 'per-pane settings'
      applyDemoStyles: 		false		// NOTE: renamed from applyDefaultStyles for clarity
      ,	closable:				true		// pane can open & close
      ,	resizable:				true		// when open, pane can be resized
      ,	slidable:				true		// when closed, pane can 'slide open' over other panes - closes on mouse-out
      ,	initClosed:				false		// true = init pane as 'closed'
      ,	initHidden: 			false 		// true = init pane as 'hidden' - no resizer-bar/spacing
      //	SELECTORS
      //,	paneSelector:			""			// MUST be pane-specific - jQuery selector for pane
      ,	contentSelector:		".ui-layout-content" // INNER div/element to auto-size so only it scrolls, not the entire pane!
      ,	contentIgnoreSelector:	".ui-layout-ignore"	// element(s) to 'ignore' when measuring 'content'
      ,	findNestedContent:		false		// true = $P.find(contentSelector), false = $P.children(contentSelector)
      //	GENERIC ROOT-CLASSES - for auto-generated classNames
      ,	paneClass:				"ui-layout-pane"	// Layout Pane
      ,	resizerClass:			"ui-layout-resizer"	// Resizer Bar
      ,	togglerClass:			"ui-layout-toggler"	// Toggler Button
      ,	buttonClass:			"ui-layout-button"	// CUSTOM Buttons	- eg: '[ui-layout-button]-toggle/-open/-close/-pin'
      //	ELEMENT SIZE & SPACING
      //,	size:					100			// MUST be pane-specific -initial size of pane
      ,	minSize:				0			// when manually resizing a pane
      ,	maxSize:				0			// ditto, 0 = no limit
      ,	spacing_open:			6			// space between pane and adjacent panes - when pane is 'open'
      ,	spacing_closed:			6			// ditto - when pane is 'closed'
      ,	togglerLength_open:		50			// Length = WIDTH of toggler button on north/south sides - HEIGHT on east/west sides
      ,	togglerLength_closed: 	50			// 100% OR -1 means 'full height/width of resizer bar' - 0 means 'hidden'
      ,	togglerAlign_open:		"center"	// top/left, bottom/right, center, OR...
      ,	togglerAlign_closed:	"center"	// 1 => nn = offset from top/left, -1 => -nn == offset from bottom/right
      ,	togglerContent_open:	""			// text or HTML to put INSIDE the toggler
      ,	togglerContent_closed:	""			// ditto
      //	RESIZING OPTIONS
      ,	resizerDblClickToggle:	true		//
      ,	autoResize:				true		// IF size is 'auto' or a percentage, then recalc 'pixel size' whenever the layout resizes
      ,	autoReopen:				true		// IF a pane was auto-closed due to noRoom, reopen it when there is room? False = leave it closed
      ,	resizerDragOpacity:		1			// option for ui.draggable
      //,	resizerCursor:			""			// MUST be pane-specific - cursor when over resizer-bar
      ,	maskContents:			false		// true = add DIV-mask over-or-inside this pane so can 'drag' over IFRAMES
      ,	maskObjects:			false		// true = add IFRAME-mask over-or-inside this pane to cover objects/applets - content-mask will overlay this mask
      ,	maskZindex:				null		// will override zIndexes.content_mask if specified - not applicable to iframe-panes
      ,	resizingGrid:			false		// grid size that the resizers will snap-to during resizing, eg: [20,20]
      ,	livePaneResizing:		false		// true = LIVE Resizing as resizer is dragged
      ,	liveContentResizing:	false		// true = re-measure header/footer heights as resizer is dragged
      ,	liveResizingTolerance:	1			// how many px change before pane resizes, to control performance
      //	SLIDING OPTIONS
      ,	sliderCursor:			"pointer"	// cursor when resizer-bar will trigger 'sliding'
      ,	slideTrigger_open:		"click"		// click, dblclick, mouseenter
      ,	slideTrigger_close:		"mouseleave"// click, mouseleave
      ,	slideDelay_open:		300			// applies only for mouseenter event - 0 = instant open
      ,	slideDelay_close:		300			// applies only for mouseleave event (300ms is the minimum!)
      ,	hideTogglerOnSlide:		false		// when pane is slid-open, should the toggler show?
      ,	preventQuickSlideClose:	$.layout.browser.webkit // Chrome triggers slideClosed as it is opening
      ,	preventPrematureSlideClose: false	// handle incorrect mouseleave trigger, like when over a SELECT-list in IE
      //	PANE-SPECIFIC TIPS & MESSAGES
      ,	tips: {
        Open:				"Open"		// eg: "Open Pane"
        ,	Close:				"Close"
        ,	Resize:				"Resize"
        ,	Slide:				"Slide Open"
        ,	Pin:				"Pin"
        ,	Unpin:				"Un-Pin"
        ,	noRoomToOpen:		"Not enough room to show this panel."	// alert if user tries to open a pane that cannot
        ,	minSizeWarning:		"Panel has reached its minimum size"	// displays in browser statusbar
        ,	maxSizeWarning:		"Panel has reached its maximum size"	// ditto
      }
      //	HOT-KEYS & MISC
      ,	showOverflowOnHover:	false		// will bind allowOverflow() utility to pane.onMouseOver
      ,	enableCursorHotkey:		true		// enabled 'cursor' hotkeys
      //,	customHotkey:			""			// MUST be pane-specific - EITHER a charCode OR a character
      ,	customHotkeyModifier:	"SHIFT"		// either 'SHIFT', 'CTRL' or 'CTRL+SHIFT' - NOT 'ALT'
      //	PANE ANIMATION
      //	NOTE: fxSss_open, fxSss_close & fxSss_size options (eg: fxName_open) are auto-generated if not passed
      ,	fxName:					"slide" 	// ('none' or blank), slide, drop, scale -- only relevant to 'open' & 'close', NOT 'size'
      ,	fxSpeed:				null		// slow, normal, fast, 200, nnn - if passed, will OVERRIDE fxSettings.duration
      ,	fxSettings:				{}			// can be passed, eg: { easing: "easeOutBounce", duration: 1500 }
      ,	fxOpacityFix:			true		// tries to fix opacity in IE to restore anti-aliasing after animation
      ,	animatePaneSizing:		false		// true = animate resizing after dragging resizer-bar OR sizePane() is called
      /*  NOTE: Action-specific FX options are auto-generated from the options above if not specifically set:
       fxName_open:			"slide"		// 'Open' pane animation
       fnName_close:			"slide"		// 'Close' pane animation
       fxName_size:			"slide"		// 'Size' pane animation - when animatePaneSizing = true
       fxSpeed_open:			null
       fxSpeed_close:			null
       fxSpeed_size:			null
       fxSettings_open:		{}
       fxSettings_close:		{}
       fxSettings_size:		{}
       */
      //	CHILD/NESTED LAYOUTS
      ,	children:				null		// Layout-options for nested/child layout - even {} is valid as options
      ,	containerSelector:		''			// if child is NOT 'directly nested', a selector to find it/them (can have more than one child layout!)
      ,	initChildren:			true		// true = child layout will be created as soon as _this_ layout completes initialization
      ,	destroyChildren:		true		// true = destroy child-layout if this pane is destroyed
      ,	resizeChildren:			true		// true = trigger child-layout.resizeAll() when this pane is resized
      //	EVENT TRIGGERING
      ,	triggerEventsOnLoad:	false		// true = trigger onopen OR onclose callbacks when layout initializes
      ,	triggerEventsDuringLiveResize: true	// true = trigger onresize callback REPEATEDLY if livePaneResizing==true
      //	PANE CALLBACKS
      ,	onshow_start:			null		// CALLBACK when pane STARTS to Show	- BEFORE onopen/onhide_start
      ,	onshow_end:				null		// CALLBACK when pane ENDS being Shown	- AFTER  onopen/onhide_end
      ,	onhide_start:			null		// CALLBACK when pane STARTS to Close	- BEFORE onclose_start
      ,	onhide_end:				null		// CALLBACK when pane ENDS being Closed	- AFTER  onclose_end
      ,	onopen_start:			null		// CALLBACK when pane STARTS to Open
      ,	onopen_end:				null		// CALLBACK when pane ENDS being Opened
      ,	onclose_start:			null		// CALLBACK when pane STARTS to Close
      ,	onclose_end:			null		// CALLBACK when pane ENDS being Closed
      ,	onresize_start:			null		// CALLBACK when pane STARTS being Resized ***FOR ANY REASON***
      ,	onresize_end:			null		// CALLBACK when pane ENDS being Resized ***FOR ANY REASON***
      ,	onsizecontent_start:	null		// CALLBACK when sizing of content-element STARTS
      ,	onsizecontent_end:		null		// CALLBACK when sizing of content-element ENDS
      ,	onswap_start:			null		// CALLBACK when pane STARTS to Swap
      ,	onswap_end:				null		// CALLBACK when pane ENDS being Swapped
      ,	ondrag_start:			null		// CALLBACK when pane STARTS being ***MANUALLY*** Resized
      ,	ondrag_end:				null		// CALLBACK when pane ENDS being ***MANUALLY*** Resized
    }
    /*
     *	PANE-SPECIFIC SETTINGS
     *	- options listed below MUST be specified per-pane - they CANNOT be set under 'panes'
     *	- all options under the 'panes' key can also be set specifically for any pane
     *	- most options under the 'panes' key apply only to 'border-panes' - NOT the the center-pane
     */
    ,	north: {
      paneSelector:			".ui-layout-north"
      ,	size:					"auto"		// eg: "auto", "30%", .30, 200
      ,	resizerCursor:			"n-resize"	// custom = url(myCursor.cur)
      ,	customHotkey:			""			// EITHER a charCode (43) OR a character ("o")
    }
    ,	south: {
      paneSelector:			".ui-layout-south"
      ,	size:					"auto"
      ,	resizerCursor:			"s-resize"
      ,	customHotkey:			""
    }
    ,	east: {
      paneSelector:			".ui-layout-east"
      ,	size:					200
      ,	resizerCursor:			"e-resize"
      ,	customHotkey:			""
    }
    ,	west: {
      paneSelector:			".ui-layout-west"
      ,	size:					200
      ,	resizerCursor:			"w-resize"
      ,	customHotkey:			""
    }
    ,	center: {
      paneSelector:			".ui-layout-center"
      ,	minWidth:				0
      ,	minHeight:				0
    }
  };

  $.layout.optionsMap = {
    // layout/global options - NOT pane-options
    layout: ("name,instanceKey,stateManagement,effects,inset,zIndexes,errors,"
    +	"zIndex,scrollToBookmarkOnLoad,showErrorMessages,maskPanesEarly,"
    +	"outset,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,"
    +	"onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end").split(",")
//	borderPanes: [ ALL options that are NOT specified as 'layout' ]
    // default.panes options that apply to the center-pane (most options apply _only_ to border-panes)
    ,	center: ("paneClass,contentSelector,contentIgnoreSelector,findNestedContent,applyDemoStyles,triggerEventsOnLoad,"
    +	"showOverflowOnHover,maskContents,maskObjects,liveContentResizing,"
    +	"containerSelector,children,initChildren,resizeChildren,destroyChildren,"
    +	"onresize,onresize_start,onresize_end,onsizecontent,onsizecontent_start,onsizecontent_end").split(",")
    // options that MUST be specifically set 'per-pane' - CANNOT set in the panes (defaults) key
    ,	noDefault: ("paneSelector,resizerCursor,customHotkey").split(",")
  };

  /**
   * Processes options passed in converts flat-format data into subkey (JSON) format
   * In flat-format, subkeys are _currently_ separated with 2 underscores, like north__optName
   * Plugins may also call this method so they can transform their own data
   *
   * @param  {!Object}	hash			Data/options passed by user - may be a single level or nested levels
   * @param  {boolean=}	[addKeys=false]	Should the primary layout.options keys be added if they do not exist?
   * @return {Object}						Returns hash of minWidth & minHeight
   */
  $.layout.transformData = function (hash, addKeys) {
    var	json = addKeys ? { panes: {}, center: {} } : {} // init return object
      ,	branch, optKey, keys, key, val, i, c;

    if (typeof hash !== "object") return json; // no options passed

    // convert all 'flat-keys' to 'sub-key' format
    for (optKey in hash) {
      branch	= json;
      val		= hash[ optKey ];
      keys	= optKey.split("__"); // eg: west__size or north__fxSettings__duration
      c		= keys.length - 1;
      // convert underscore-delimited to subkeys
      for (i=0; i <= c; i++) {
        key = keys[i];
        if (i === c) {	// last key = value
          if ($.isPlainObject( val ))
            branch[key] = $.layout.transformData( val ); // RECURSE
          else
            branch[key] = val;
        }
        else {
          if (!branch[key])
            branch[key] = {}; // create the subkey
          // recurse to sub-key for next loop - if not done
          branch = branch[key];
        }
      }
    }
    return json;
  };

// INTERNAL CONFIG DATA - DO NOT CHANGE THIS!
  $.layout.backwardCompatibility = {
    // data used by renameOldOptions()
    map: {
      //	OLD Option Name:			NEW Option Name
      applyDefaultStyles:			"applyDemoStyles"
      //	CHILD/NESTED LAYOUTS
      ,	childOptions:				"children"
      ,	initChildLayout:			"initChildren"
      ,	destroyChildLayout:			"destroyChildren"
      ,	resizeChildLayout:			"resizeChildren"
      ,	resizeNestedLayout:			"resizeChildren"
      //	MISC Options
      ,	resizeWhileDragging:		"livePaneResizing"
      ,	resizeContentWhileDragging:	"liveContentResizing"
      ,	triggerEventsWhileDragging:	"triggerEventsDuringLiveResize"
      ,	maskIframesOnResize:		"maskContents"
      //	STATE MANAGEMENT
      ,	useStateCookie:				"stateManagement.enabled"
      ,	"cookie.autoLoad":			"stateManagement.autoLoad"
      ,	"cookie.autoSave":			"stateManagement.autoSave"
      ,	"cookie.keys":				"stateManagement.stateKeys"
      ,	"cookie.name":				"stateManagement.cookie.name"
      ,	"cookie.domain":			"stateManagement.cookie.domain"
      ,	"cookie.path":				"stateManagement.cookie.path"
      ,	"cookie.expires":			"stateManagement.cookie.expires"
      ,	"cookie.secure":			"stateManagement.cookie.secure"
      //	OLD Language options
      ,	noRoomToOpenTip:			"tips.noRoomToOpen"
      ,	togglerTip_open:			"tips.Close"	// open   = Close
      ,	togglerTip_closed:			"tips.Open"		// closed = Open
      ,	resizerTip:					"tips.Resize"
      ,	sliderTip:					"tips.Slide"
    }

    /**
     * @param {Object}	opts
     */
    ,	renameOptions: function (opts) {
      var map = $.layout.backwardCompatibility.map
        ,	oldData, newData, value
      ;
      for (var itemPath in map) {
        oldData	= getBranch( itemPath );
        value	= oldData.branch[ oldData.key ];
        if (value !== undefined) {
          newData = getBranch( map[itemPath], true );
          newData.branch[ newData.key ] = value;
          delete oldData.branch[ oldData.key ];
        }
      }

      /**
       * @param {string}	path
       * @param {boolean=}	[create=false]	Create path if does not exist
       */
      function getBranch (path, create) {
        var a = path.split(".") // split keys into array
          ,	c = a.length - 1
          ,	D = { branch: opts, key: a[c] } // init branch at top & set key (last item)
          ,	i = 0, k, undef;
        for (; i<c; i++) { // skip the last key (data)
          k = a[i];
          if (D.branch[ k ] == undefined) { // child-key does not exist
            if (create) {
              D.branch = D.branch[ k ] = {}; // create child-branch
            }
            else // can't go any farther
              D.branch = {}; // branch is undefined
          }
          else
            D.branch = D.branch[ k ]; // get child-branch
        }
        return D;
      };
    }

    /**
     * @param {Object}	opts
     */
    ,	renameAllOptions: function (opts) {
      var ren = $.layout.backwardCompatibility.renameOptions;
      // rename root (layout) options
      ren( opts );
      // rename 'defaults' to 'panes'
      if (opts.defaults) {
        if (typeof opts.panes !== "object")
          opts.panes = {};
        $.extend(true, opts.panes, opts.defaults);
        delete opts.defaults;
      }
      // rename options in the the options.panes key
      if (opts.panes) ren( opts.panes );
      // rename options inside *each pane key*, eg: options.west
      $.each($.layout.config.allPanes, function (i, pane) {
        if (opts[pane]) ren( opts[pane] );
      });
      return opts;
    }
  };




  /*	============================================================
   *	BEGIN WIDGET: $( selector ).layout( {options} );
   *	============================================================
   */
  $.fn.layout = function (opts) {
    var

      // local aliases to global data
      browser	= $.layout.browser
      ,	_c		= $.layout.config

      // local aliases to utlity methods
      ,	cssW	= $.layout.cssWidth
      ,	cssH	= $.layout.cssHeight
      ,	elDims	= $.layout.getElementDimensions
      ,	styles	= $.layout.getElementStyles
      ,	evtObj	= $.layout.getEventObject
      ,	evtPane	= $.layout.parsePaneName

      /**
       * options - populated by initOptions()
       */
      ,	options = $.extend(true, {}, $.layout.defaults)
      ,	effects	= options.effects = $.extend(true, {}, $.layout.effects)

      /**
       * layout-state object
       */
      ,	state = {
        // generate unique ID to use for event.namespace so can unbind only events added by 'this layout'
        id:				"layout"+ $.now()	// code uses alias: sID
        ,	initialized:	false
        ,	paneResizing:	false
        ,	panesSliding:	{}
        ,	container:	{ 	// list all keys referenced in code to avoid compiler error msgs
          innerWidth:		0
          ,	innerHeight:	0
          ,	outerWidth:		0
          ,	outerHeight:	0
          ,	layoutWidth:	0
          ,	layoutHeight:	0
        }
        ,	north:		{ childIdx: 0 }
        ,	south:		{ childIdx: 0 }
        ,	east:		{ childIdx: 0 }
        ,	west:		{ childIdx: 0 }
        ,	center:		{ childIdx: 0 }
      }

      /**
       * parent/child-layout pointers
       */
//,	hasParentLayout	= false	- exists ONLY inside Instance so can be set externally
      ,	children = {
        north:		null
        ,	south:		null
        ,	east:		null
        ,	west:		null
        ,	center:		null
      }

      /*
       * ###########################
       *  INTERNAL HELPER FUNCTIONS
       * ###########################
       */

      /**
       * Manages all internal timers
       */
      ,	timer = {
        data:	{}
        ,	set:	function (s, fn, ms) { timer.clear(s); timer.data[s] = setTimeout(fn, ms); }
        ,	clear:	function (s) { var t=timer.data; if (t[s]) {clearTimeout(t[s]); delete t[s];} }
      }

      /**
       * Alert or console.log a message - IF option is enabled.
       *
       * @param {(string|!Object)}	msg				Message (or debug-data) to display
       * @param {boolean=}			[popup=false]	True by default, means 'alert', false means use console.log
       * @param {boolean=}			[debug=false]	True means is a widget debugging message
       */
      ,	_log = function (msg, popup, debug) {
        var o = options;
        if ((o.showErrorMessages && !debug) || (debug && o.showDebugMessages))
          $.layout.msg( o.name +' / '+ msg, (popup !== false) );
        return false;
      }

      /**
       * Executes a Callback function after a trigger event, like resize, open or close
       *
       * @param {string}				evtName					Name of the layout callback, eg "onresize_start"
       * @param {(string|boolean)=}	[pane=""]				This is passed only so we can pass the 'pane object' to the callback
       * @param {(string|boolean)=}	[skipBoundEvents=false]	True = do not run events bound to the elements - only the callbacks set in options
       */
      ,	_runCallbacks = function (evtName, pane, skipBoundEvents) {
        var	hasPane	= pane && isStr(pane)
          ,	s		= hasPane ? state[pane] : state
          ,	o		= hasPane ? options[pane] : options
          ,	lName	= options.name
          // names like onopen and onopen_end separate are interchangeable in options...
          ,	lng		= evtName + (evtName.match(/_/) ? "" : "_end")
          ,	shrt	= lng.match(/_end$/) ? lng.substr(0, lng.length - 4) : ""
          ,	fn		= o[lng] || o[shrt]
          ,	retVal	= "NC" // NC = No Callback
          ,	args	= []
          ,	$P		= hasPane ? $Ps[pane] : 0
        ;
        if (hasPane && !$P) // a pane is specified, but does not exist!
          return retVal;
        if ( !hasPane && $.type(pane) === "boolean" ) {
          skipBoundEvents = pane; // allow pane param to be skipped for Layout callback
          pane = "";
        }

        // first trigger the callback set in the options
        if (fn) {
          try {
            // convert function name (string) to function object
            if (isStr( fn )) {
              if (fn.match(/,/)) {
                // function name cannot contain a comma,
                // so must be a function name AND a parameter to pass
                args = fn.split(",")
                  ,	fn = eval(args[0]);
              }
              else // just the name of an external function?
                fn = eval(fn);
            }
            // execute the callback, if exists
            if ($.isFunction( fn )) {
              if (args.length)
                retVal = g(fn)(args[1]); // pass the argument parsed from 'list'
              else if ( hasPane )
              // pass data: pane-name, pane-element, pane-state, pane-options, and layout-name
                retVal = g(fn)( pane, $Ps[pane], s, o, lName );
              else // must be a layout/container callback - pass suitable info
                retVal = g(fn)( Instance, s, o, lName );
            }
          }
          catch (ex) {
            _log( options.errors.callbackError.replace(/EVENT/, $.trim((pane || "") +" "+ lng)), false );
            if ($.type(ex) === "string" && string.length)
              _log("Exception:  "+ ex, false );
          }
        }

        // trigger additional events bound directly to the pane
        if (!skipBoundEvents && retVal !== false) {
          if ( hasPane ) { // PANE events can be bound to each pane-elements
            o	= options[pane];
            s	= state[pane];
            $P.triggerHandler("layoutpane"+ lng, [ pane, $P, s, o, lName ]);
            if (shrt)
              $P.triggerHandler("layoutpane"+ shrt, [ pane, $P, s, o, lName ]);
          }
          else { // LAYOUT events can be bound to the container-element
            $N.triggerHandler("layout"+ lng, [ Instance, s, o, lName ]);
            if (shrt)
              $N.triggerHandler("layout"+ shrt, [ Instance, s, o, lName ]);
          }
        }

        // ALWAYS resizeChildren after an onresize_end event - even during initialization
        // IGNORE onsizecontent_end event because causes child-layouts to resize TWICE
        if (hasPane && evtName === "onresize_end") // BAD: || evtName === "onsizecontent_end"
          resizeChildren(pane+"", true); // compiler hack -force string

        return retVal;

        function g (f) { return f; }; // compiler hack
      }


      /**
       * cure iframe display issues in IE & other browsers
       */
      ,	_fixIframe = function (pane) {
        if (browser.mozilla) return; // skip FireFox - it auto-refreshes iframes onShow
        var $P = $Ps[pane];
        // if the 'pane' is an iframe, do it
        if (state[pane].tagName === "IFRAME")
          $P.css(_c.hidden).css(_c.visible);
        else // ditto for any iframes INSIDE the pane
          $P.find('IFRAME').css(_c.hidden).css(_c.visible);
      }

      /**
       * @param  {string}		pane		Can accept ONLY a 'pane' (east, west, etc)
       * @param  {number=}		outerSize	(optional) Can pass a width, allowing calculations BEFORE element is resized
       * @return {number}		Returns the innerHeight/Width of el by subtracting padding and borders
       */
      ,	cssSize = function (pane, outerSize) {
        var fn = _c[pane].dir=="horz" ? cssH : cssW;
        return fn($Ps[pane], outerSize);
      }

      /**
       * @param  {string}		pane		Can accept ONLY a 'pane' (east, west, etc)
       * @return {Object}		Returns hash of minWidth & minHeight
       */
      ,	cssMinDims = function (pane) {
        // minWidth/Height means CSS width/height = 1px
        var	$P	= $Ps[pane]
          ,	dir	= _c[pane].dir
          ,	d	= {
            minWidth:	1001 - cssW($P, 1000)
            ,	minHeight:	1001 - cssH($P, 1000)
          }
        ;
        if (dir === "horz") d.minSize = d.minHeight;
        if (dir === "vert") d.minSize = d.minWidth;
        return d;
      }

      // TODO: see if these methods can be made more useful...
      // TODO: *maybe* return cssW/H from these so caller can use this info

      /**
       * @param {(string|!Object)}		el
       * @param {number=}				outerWidth
       * @param {boolean=}				[autoHide=false]
       */
      ,	setOuterWidth = function (el, outerWidth, autoHide) {
        var $E = el, w;
        if (isStr(el)) $E = $Ps[el]; // west
        else if (!el.jquery) $E = $(el);
        w = cssW($E, outerWidth);
        $E.css({ width: w });
        if (w > 0) {
          if (autoHide && $E.data('autoHidden') && $E.innerHeight() > 0) {
            $E.show().data('autoHidden', false);
            if (!browser.mozilla) // FireFox refreshes iframes - IE does not
            // make hidden, then visible to 'refresh' display after animation
              $E.css(_c.hidden).css(_c.visible);
          }
        }
        else if (autoHide && !$E.data('autoHidden'))
          $E.hide().data('autoHidden', true);
      }

      /**
       * @param {(string|!Object)}		el
       * @param {number=}				outerHeight
       * @param {boolean=}				[autoHide=false]
       */
      ,	setOuterHeight = function (el, outerHeight, autoHide) {
        var $E = el, h;
        if (isStr(el)) $E = $Ps[el]; // west
        else if (!el.jquery) $E = $(el);
        h = cssH($E, outerHeight);
        $E.css({ height: h, visibility: "visible" }); // may have been 'hidden' by sizeContent
        if (h > 0 && $E.innerWidth() > 0) {
          if (autoHide && $E.data('autoHidden')) {
            $E.show().data('autoHidden', false);
            if (!browser.mozilla) // FireFox refreshes iframes - IE does not
              $E.css(_c.hidden).css(_c.visible);
          }
        }
        else if (autoHide && !$E.data('autoHidden'))
          $E.hide().data('autoHidden', true);
      }


      /**
       * Converts any 'size' params to a pixel/integer size, if not already
       * If 'auto' or a decimal/percentage is passed as 'size', a pixel-size is calculated
       *
       /**
       * @param  {string}				pane
       * @param  {(string|number)=}	size
       * @param  {string=}				[dir]
       * @return {number}
       */
      ,	_parseSize = function (pane, size, dir) {
        if (!dir) dir = _c[pane].dir;

        if (isStr(size) && size.match(/%/))
          size = (size === '100%') ? -1 : parseInt(size, 10) / 100; // convert % to decimal

        if (size === 0)
          return 0;
        else if (size >= 1)
          return parseInt(size, 10);

        var o = options, avail = 0;
        if (dir=="horz") // north or south or center.minHeight
          avail = sC.innerHeight - ($Ps.north ? o.north.spacing_open : 0) - ($Ps.south ? o.south.spacing_open : 0);
        else if (dir=="vert") // east or west or center.minWidth
          avail = sC.innerWidth - ($Ps.west ? o.west.spacing_open : 0) - ($Ps.east ? o.east.spacing_open : 0);

        if (size === -1) // -1 == 100%
          return avail;
        else if (size > 0) // percentage, eg: .25
          return round(avail * size);
        else if (pane=="center")
          return 0;
        else { // size < 0 || size=='auto' || size==Missing || size==Invalid
          // auto-size the pane
          var	dim	= (dir === "horz" ? "height" : "width")
            ,	$P	= $Ps[pane]
            ,	$C	= dim === 'height' ? $Cs[pane] : false
            ,	vis	= $.layout.showInvisibly($P) // show pane invisibly if hidden
            ,	szP	= $P.css(dim) // SAVE current pane size
            ,	szC	= $C ? $C.css(dim) : 0 // SAVE current content size
          ;
          $P.css(dim, "auto");
          if ($C) $C.css(dim, "auto");
          size = (dim === "height") ? $P.outerHeight() : $P.outerWidth(); // MEASURE
          $P.css(dim, szP).css(vis); // RESET size & visibility
          if ($C) $C.css(dim, szC);
          return size;
        }
      }

      /**
       * Calculates current 'size' (outer-width or outer-height) of a border-pane - optionally with 'pane-spacing' added
       *
       * @param  {(string|!Object)}	pane
       * @param  {boolean=}			[inclSpace=false]
       * @return {number}				Returns EITHER Width for east/west panes OR Height for north/south panes
       */
      ,	getPaneSize = function (pane, inclSpace) {
        var
          $P	= $Ps[pane]
          ,	o	= options[pane]
          ,	s	= state[pane]
          ,	oSp	= (inclSpace ? o.spacing_open : 0)
          ,	cSp	= (inclSpace ? o.spacing_closed : 0)
        ;
        if (!$P || s.isHidden)
          return 0;
        else if (s.isClosed || (s.isSliding && inclSpace))
          return cSp;
        else if (_c[pane].dir === "horz")
          return $P.outerHeight() + oSp;
        else // dir === "vert"
          return $P.outerWidth() + oSp;
      }

      /**
       * Calculate min/max pane dimensions and limits for resizing
       *
       * @param  {string}		pane
       * @param  {boolean=}	[slide=false]
       */
      ,	setSizeLimits = function (pane, slide) {
        if (!isInitialized()) return;
        var
          o				= options[pane]
          ,	s				= state[pane]
          ,	c				= _c[pane]
          ,	dir				= c.dir
          ,	type			= c.sizeType.toLowerCase()
          ,	isSliding		= (slide != undefined ? slide : s.isSliding) // only open() passes 'slide' param
          ,	$P				= $Ps[pane]
          ,	paneSpacing		= o.spacing_open
          //	measure the pane on the *opposite side* from this pane
          ,	altPane			= _c.oppositeEdge[pane]
          ,	altS			= state[altPane]
          ,	$altP			= $Ps[altPane]
          ,	altPaneSize		= (!$altP || altS.isVisible===false || altS.isSliding ? 0 : (dir=="horz" ? $altP.outerHeight() : $altP.outerWidth()))
          ,	altPaneSpacing	= ((!$altP || altS.isHidden ? 0 : options[altPane][ altS.isClosed !== false ? "spacing_closed" : "spacing_open" ]) || 0)
          //	limitSize prevents this pane from 'overlapping' opposite pane
          ,	containerSize	= (dir=="horz" ? sC.innerHeight : sC.innerWidth)
          ,	minCenterDims	= cssMinDims("center")
          ,	minCenterSize	= dir=="horz" ? max(options.center.minHeight, minCenterDims.minHeight) : max(options.center.minWidth, minCenterDims.minWidth)
          //	if pane is 'sliding', then ignore center and alt-pane sizes - because 'overlays' them
          ,	limitSize		= (containerSize - paneSpacing - (isSliding ? 0 : (_parseSize("center", minCenterSize, dir) + altPaneSize + altPaneSpacing)))
          ,	minSize			= s.minSize = max( _parseSize(pane, o.minSize), cssMinDims(pane).minSize )
          ,	maxSize			= s.maxSize = min( (o.maxSize ? _parseSize(pane, o.maxSize) : 100000), limitSize )
          ,	r				= s.resizerPosition = {} // used to set resizing limits
          ,	top				= sC.inset.top
          ,	left			= sC.inset.left
          ,	W				= sC.innerWidth
          ,	H				= sC.innerHeight
          ,	rW				= o.spacing_open // subtract resizer-width to get top/left position for south/east
        ;
        switch (pane) {
          case "north":	r.min = top + minSize;
            r.max = top + maxSize;
            break;
          case "west":	r.min = left + minSize;
            r.max = left + maxSize;
            break;
          case "south":	r.min = top + H - maxSize - rW;
            r.max = top + H - minSize - rW;
            break;
          case "east":	r.min = left + W - maxSize - rW;
            r.max = left + W - minSize - rW;
            break;
        };
      }

      /**
       * Returns data for setting the size/position of center pane. Also used to set Height for east/west panes
       *
       * @return JSON  Returns a hash of all dimensions: top, bottom, left, right, (outer) width and (outer) height
       */
      ,	calcNewCenterPaneDims = function () {
        var d = {
          top:	getPaneSize("north", true) // true = include 'spacing' value for pane
          ,	bottom:	getPaneSize("south", true)
          ,	left:	getPaneSize("west", true)
          ,	right:	getPaneSize("east", true)
          ,	width:	0
          ,	height:	0
        };

        // NOTE: sC = state.container
        // calc center-pane outer dimensions
        d.width		= sC.innerWidth - d.left - d.right;  // outerWidth
        d.height	= sC.innerHeight - d.bottom - d.top; // outerHeight
        // add the 'container border/padding' to get final positions relative to the container
        d.top		+= sC.inset.top;
        d.bottom	+= sC.inset.bottom;
        d.left		+= sC.inset.left;
        d.right		+= sC.inset.right;

        return d;
      }


      /**
       * @param {!Object}		el
       * @param {boolean=}		[allStates=false]
       */
      ,	getHoverClasses = function (el, allStates) {
        var
          $El		= $(el)
          ,	type	= $El.data("layoutRole")
          ,	pane	= $El.data("layoutEdge")
          ,	o		= options[pane]
          ,	root	= o[type +"Class"]
          ,	_pane	= "-"+ pane // eg: "-west"
          ,	_open	= "-open"
          ,	_closed	= "-closed"
          ,	_slide	= "-sliding"
          ,	_hover	= "-hover " // NOTE the trailing space
          ,	_state	= $El.hasClass(root+_closed) ? _closed : _open
          ,	_alt	= _state === _closed ? _open : _closed
          ,	classes = (root+_hover) + (root+_pane+_hover) + (root+_state+_hover) + (root+_pane+_state+_hover)
        ;
        if (allStates) // when 'removing' classes, also remove alternate-state classes
          classes += (root+_alt+_hover) + (root+_pane+_alt+_hover);

        if (type=="resizer" && $El.hasClass(root+_slide))
          classes += (root+_slide+_hover) + (root+_pane+_slide+_hover);

        return $.trim(classes);
      }
      ,	addHover	= function (evt, el) {
        var $E = $(el || this);
        if (evt && $E.data("layoutRole") === "toggler")
          evt.stopPropagation(); // prevent triggering 'slide' on Resizer-bar
        $E.addClass( getHoverClasses($E) );
      }
      ,	removeHover	= function (evt, el) {
        var $E = $(el || this);
        $E.removeClass( getHoverClasses($E, true) );
      }

      ,	onResizerEnter	= function (evt) { // ALSO called by toggler.mouseenter
        var pane	= $(this).data("layoutEdge")
          ,	s		= state[pane]
          ,	$d		= $(document)
        ;
        // ignore closed-panes and mouse moving back & forth over resizer!
        // also ignore if ANY pane is currently resizing
        if ( s.isResizing || state.paneResizing ) return;

        if (options.maskPanesEarly)
          showMasks( pane, { resizing: true });
      }
      ,	onResizerLeave	= function (evt, el) {
        var	e		= el || this // el is only passed when called by the timer
          ,	pane	= $(e).data("layoutEdge")
          ,	name	= pane +"ResizerLeave"
          ,	$d		= $(document)
        ;
        timer.clear(pane+"_openSlider"); // cancel slideOpen timer, if set
        timer.clear(name); // cancel enableSelection timer - may re/set below
        // this method calls itself on a timer because it needs to allow
        // enough time for dragging to kick-in and set the isResizing flag
        // dragging has a 100ms delay set, so this delay must be >100
        if (!el) // 1st call - mouseleave event
          timer.set(name, function(){ onResizerLeave(evt, e); }, 200);
        // if user is resizing, dragStop will reset everything, so skip it here
        else if (options.maskPanesEarly && !state.paneResizing) // 2nd call - by timer
          hideMasks();
      }

      /*
       * ###########################
       *   INITIALIZATION METHODS
       * ###########################
       */

      /**
       * Initialize the layout - called automatically whenever an instance of layout is created
       *
       * @see  none - triggered onInit
       * @return  mixed	true = fully initialized | false = panes not initialized (yet) | 'cancel' = abort
       */
      ,	_create = function () {
        // initialize config/options
        initOptions();
        var o = options
          ,	s = state;

        // TEMP state so isInitialized returns true during init process
        s.creatingLayout = true;

        // init plugins for this layout, if there are any (eg: stateManagement)
        runPluginCallbacks( Instance, $.layout.onCreate );

        // options & state have been initialized, so now run beforeLoad callback
        // onload will CANCEL layout creation if it returns false
        if (false === _runCallbacks("onload_start"))
          return 'cancel';

        // initialize the container element
        _initContainer();

        // bind hotkey function - keyDown - if required
        initHotkeys();

        // bind window.onunload
        $(window).bind("unload."+ sID, unload);

        // init plugins for this layout, if there are any (eg: customButtons)
        runPluginCallbacks( Instance, $.layout.onLoad );

        // if layout elements are hidden, then layout WILL NOT complete initialization!
        // initLayoutElements will set initialized=true and run the onload callback IF successful
        if (o.initPanes) _initLayoutElements();

        delete s.creatingLayout;

        return state.initialized;
      }

      /**
       * Initialize the layout IF not already
       *
       * @see  All methods in Instance run this test
       * @return  boolean	true = layoutElements have been initialized | false = panes are not initialized (yet)
       */
      ,	isInitialized = function () {
        if (state.initialized || state.creatingLayout) return true;	// already initialized
        else return _initLayoutElements();	// try to init panes NOW
      }

      /**
       * Initialize the layout - called automatically whenever an instance of layout is created
       *
       * @see  _create() & isInitialized
       * @param {boolean=}		[retry=false]	// indicates this is a 2nd try
       * @return  An object pointer to the instance created
       */
      ,	_initLayoutElements = function (retry) {
        // initialize config/options
        var o = options;
        // CANNOT init panes inside a hidden container!
        if (!$N.is(":visible")) {
          // handle Chrome bug where popup window 'has no height'
          // if layout is BODY element, try again in 50ms
          // SEE: http://layout.jquery-dev.com/samples/test_popup_window.html
          if ( !retry && browser.webkit && $N[0].tagName === "BODY" )
            setTimeout(function(){ _initLayoutElements(true); }, 50);
          return false;
        }

        // a center pane is required, so make sure it exists
        if (!getPane("center").length) {
          return _log( o.errors.centerPaneMissing );
        }

        // TEMP state so isInitialized returns true during init process
        state.creatingLayout = true;

        // update Container dims
        $.extend(sC, elDims( $N, o.inset )); // passing inset means DO NOT include insetX values

        // initialize all layout elements
        initPanes();	// size & position panes - calls initHandles() - which calls initResizable()

        if (o.scrollToBookmarkOnLoad) {
          var l = self.location;
          if (l.hash) l.replace( l.hash ); // scrollTo Bookmark
        }

        // check to see if this layout 'nested' inside a pane
        if (Instance.hasParentLayout)
          o.resizeWithWindow = false;
        // bind resizeAll() for 'this layout instance' to window.resize event
        else if (o.resizeWithWindow)
          $(window).bind("resize."+ sID, windowResize);

        delete state.creatingLayout;
        state.initialized = true;

        // init plugins for this layout, if there are any
        runPluginCallbacks( Instance, $.layout.onReady );

        // now run the onload callback, if exists
        _runCallbacks("onload_end");

        return true; // elements initialized successfully
      }

      /**
       * Initialize nested layouts for a specific pane - can optionally pass layout-options
       *
       * @param {(string|Object)}	evt_or_pane	The pane being opened, ie: north, south, east, or west
       * @param {Object=}			[opts]		Layout-options - if passed, will OVERRRIDE options[pane].children
       * @return  An object pointer to the layout instance created - or null
       */
      ,	createChildren = function (evt_or_pane, opts) {
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$P	= $Ps[pane]
        ;
        if (!$P) return;
        var	$C	= $Cs[pane]
          ,	s	= state[pane]
          ,	o	= options[pane]
          ,	sm	= options.stateManagement || {}
          ,	cos = opts ? (o.children = opts) : o.children
        ;
        if ( $.isPlainObject( cos ) )
          cos = [ cos ]; // convert a hash to a 1-elem array
        else if (!cos || !$.isArray( cos ))
          return;

        $.each( cos, function (idx, co) {
          if ( !$.isPlainObject( co ) ) return;

          // determine which element is supposed to be the 'child container'
          // if pane has a 'containerSelector' OR a 'content-div', use those instead of the pane
          var $containers = co.containerSelector ? $P.find( co.containerSelector ) : ($C || $P);

          $containers.each(function(){
            var $cont	= $(this)
              ,	child	= $cont.data("layout") //	see if a child-layout ALREADY exists on this element
            ;
            // if no layout exists, but children are set, try to create the layout now
            if (!child) {
              // TODO: see about moving this to the stateManagement plugin, as a method
              // set a unique child-instance key for this layout, if not already set
              setInstanceKey({ container: $cont, options: co }, s );
              // If THIS layout has a hash in stateManagement.autoLoad,
              // then see if it also contains state-data for this child-layout
              // If so, copy the stateData to child.options.stateManagement.autoLoad
              if ( sm.includeChildren && state.stateData[pane] ) {
                //	THIS layout's state was cached when its state was loaded
                var	paneChildren = state.stateData[pane].children || {}
                  ,	childState	= paneChildren[ co.instanceKey ]
                  ,	co_sm		= co.stateManagement || (co.stateManagement = { autoLoad: true })
                ;
                // COPY the stateData into the autoLoad key
                if ( co_sm.autoLoad === true && childState ) {
                  co_sm.autoSave			= false; // disable autoSave because saving handled by parent-layout
                  co_sm.includeChildren	= true;  // cascade option - FOR NOW
                  co_sm.autoLoad = $.extend(true, {}, childState); // COPY the state-hash
                }
              }

              // create the layout
              child = $cont.layout( co );

              // if successful, update data
              if (child) {
                // add the child and update all layout-pointers
                // MAY have already been done by child-layout calling parent.refreshChildren()
                refreshChildren( pane, child );
              }
            }
          });
        });
      }

      ,	setInstanceKey = function (child, parentPaneState) {
        // create a named key for use in state and instance branches
        var	$c	= child.container
          ,	o	= child.options
          ,	sm	= o.stateManagement
          ,	key	= o.instanceKey || $c.data("layoutInstanceKey")
        ;
        if (!key) key = (sm && sm.cookie ? sm.cookie.name : '') || o.name; // look for a name/key
        if (!key) key = "layout"+ (++parentPaneState.childIdx);	// if no name/key found, generate one
        else key = key.replace(/[^\w-]/gi, '_').replace(/_{2,}/g, '_');	 // ensure is valid as a hash key
        o.instanceKey = key;
        $c.data("layoutInstanceKey", key); // useful if layout is destroyed and then recreated
        return key;
      }

      /**
       * @param {string}		pane		The pane being opened, ie: north, south, east, or west
       * @param {Object=}		newChild	New child-layout Instance to add to this pane
       */
      ,	refreshChildren = function (pane, newChild) {
        var	$P	= $Ps[pane]
          ,	pC	= children[pane]
          ,	s	= state[pane]
          ,	o
        ;
        // check for destroy()ed layouts and update the child pointers & arrays
        if ($.isPlainObject( pC )) {
          $.each( pC, function (key, child) {
            if (child.destroyed) delete pC[key]
          });
          // if no more children, remove the children hash
          if ($.isEmptyObject( pC ))
            pC = children[pane] = null; // clear children hash
        }

        // see if there is a directly-nested layout inside this pane
        // if there is, then there can be only ONE child-layout, so check that...
        if (!newChild && !pC) {
          newChild = $P.data("layout");
        }

        // if a newChild instance was passed, add it to children[pane]
        if (newChild) {
          // update child.state
          newChild.hasParentLayout = true; // set parent-flag in child
          // instanceKey is a key-name used in both state and children
          o = newChild.options;
          // set a unique child-instance key for this layout, if not already set
          setInstanceKey( newChild, s );
          // add pointer to pane.children hash
          if (!pC) pC = children[pane] = {}; // create an empty children hash
          pC[ o.instanceKey ] = newChild.container.data("layout"); // add childLayout instance
        }

        // ALWAYS refresh the pane.children alias, even if null
        Instance[pane].children = children[pane];

        // if newChild was NOT passed - see if there is a child layout NOW
        if (!newChild) {
          createChildren(pane); // MAY create a child and re-call this method
        }
      }

      ,	windowResize = function () {
        var	o = options
          ,	delay = Number(o.resizeWithWindowDelay);
        if (delay < 10) delay = 100; // MUST have a delay!
        // resizing uses a delay-loop because the resize event fires repeatly - except in FF, but delay anyway
        timer.clear("winResize"); // if already running
        timer.set("winResize", function(){
          timer.clear("winResize");
          timer.clear("winResizeRepeater");
          var dims = elDims( $N, o.inset );
          // only trigger resizeAll() if container has changed size
          if (dims.innerWidth !== sC.innerWidth || dims.innerHeight !== sC.innerHeight)
            resizeAll();
        }, delay);
        // ALSO set fixed-delay timer, if not already running
        if (!timer.data["winResizeRepeater"]) setWindowResizeRepeater();
      }

      ,	setWindowResizeRepeater = function () {
        var delay = Number(options.resizeWithWindowMaxDelay);
        if (delay > 0)
          timer.set("winResizeRepeater", function(){ setWindowResizeRepeater(); resizeAll(); }, delay);
      }

      ,	unload = function () {
        var o = options;

        _runCallbacks("onunload_start");

        // trigger plugin callabacks for this layout (eg: stateManagement)
        runPluginCallbacks( Instance, $.layout.onUnload );

        _runCallbacks("onunload_end");
      }

      /**
       * Validate and initialize container CSS and events
       *
       * @see  _create()
       */
      ,	_initContainer = function () {
        var
          N		= $N[0]
          ,	$H		= $("html")
          ,	tag		= sC.tagName = N.tagName
          ,	id		= sC.id = N.id
          ,	cls		= sC.className = N.className
          ,	o		= options
          ,	name	= o.name
          ,	props	= "position,margin,padding,border"
          ,	css		= "layoutCSS"
          ,	CSS		= {}
          ,	hid		= "hidden" // used A LOT!
          //	see if this container is a 'pane' inside an outer-layout
          ,	parent	= $N.data("parentLayout")	// parent-layout Instance
          ,	pane	= $N.data("layoutEdge")		// pane-name in parent-layout
          ,	isChild	= parent && pane
          ,	num		= $.layout.cssNum
          ,	$parent, n
        ;
        // sC = state.container
        //sC.selector = $N.selector.split(".slice")[0];
        sC.ref		= (o.name ? o.name +' layout / ' : '') + tag + (id ? "#"+id : cls ? '.['+cls+']' : ''); // used in messages
        sC.isBody	= (tag === "BODY");

        // try to find a parent-layout
        if (!isChild && !sC.isBody) {
          $parent = $N.closest("."+ $.layout.defaults.panes.paneClass);
          parent	= $parent.data("parentLayout");
          pane	= $parent.data("layoutEdge");
          isChild	= parent && pane;
        }

        $N	.data({
          layout: Instance
          ,	layoutContainer: sID // FLAG to indicate this is a layout-container - contains unique internal ID
        })
          .addClass(o.containerClass)
        ;
        var layoutMethods = {
          destroy:	''
          ,	initPanes:	''
          ,	resizeAll:	'resizeAll'
          ,	resize:		'resizeAll'
        };
        // loop hash and bind all methods - include layoutID namespacing
        for (name in layoutMethods) {
          $N.bind("layout"+ name.toLowerCase() +"."+ sID, Instance[ layoutMethods[name] || name ]);
        }

        // if this container is another layout's 'pane', then set child/parent pointers
        if (isChild) {
          // update parent flag
          Instance.hasParentLayout = true;
          // set pointers to THIS child-layout (Instance) in parent-layout
          parent.refreshChildren( pane, Instance );
        }

        // SAVE original container CSS for use in destroy()
        if (!$N.data(css)) {
          // handle props like overflow different for BODY & HTML - has 'system default' values
          if (sC.isBody) {
            // SAVE <BODY> CSS
            $N.data(css, $.extend( styles($N, props), {
              height:		$N.css("height")
              ,	overflow:	$N.css("overflow")
              ,	overflowX:	$N.css("overflowX")
              ,	overflowY:	$N.css("overflowY")
            }));
            // ALSO SAVE <HTML> CSS
            $H.data(css, $.extend( styles($H, 'padding'), {
              height:		"auto" // FF would return a fixed px-size!
              ,	overflow:	$H.css("overflow")
              ,	overflowX:	$H.css("overflowX")
              ,	overflowY:	$H.css("overflowY")
            }));
          }
          else // handle props normally for non-body elements
            $N.data(css, styles($N, props+",top,bottom,left,right,width,height,overflow,overflowX,overflowY") );
        }

        try {
          // common container CSS
          CSS = {
            overflow:	hid
            ,	overflowX:	hid
            ,	overflowY:	hid
          };
          $N.css( CSS );

          if (o.inset && !$.isPlainObject(o.inset)) {
            // can specify a single number for equal outset all-around
            n = parseInt(o.inset, 10) || 0
            o.inset = {
              top:	n
              ,	bottom:	n
              ,	left:	n
              ,	right:	n
            };
          }

          // format html & body if this is a full page layout
          if (sC.isBody) {
            // if HTML has padding, use this as an outer-spacing around BODY
            if (!o.outset) {
              // use padding from parent-elem (HTML) as outset
              o.outset = {
                top:	num($H, "paddingTop")
                ,	bottom:	num($H, "paddingBottom")
                ,	left:	num($H, "paddingLeft")
                ,	right:	num($H, "paddingRight")
              };
            }
            else if (!$.isPlainObject(o.outset)) {
              // can specify a single number for equal outset all-around
              n = parseInt(o.outset, 10) || 0
              o.outset = {
                top:	n
                ,	bottom:	n
                ,	left:	n
                ,	right:	n
              };
            }
            // HTML
            $H.css( CSS ).css({
              height:		"100%"
              ,	border:		"none"	// no border or padding allowed when using height = 100%
              ,	padding:	0		// ditto
              ,	margin:		0
            });
            // BODY
            if (browser.isIE6) {
              // IE6 CANNOT use the trick of setting absolute positioning on all 4 sides - must have 'height'
              $N.css({
                width:		"100%"
                ,	height:		"100%"
                ,	border:		"none"	// no border or padding allowed when using height = 100%
                ,	padding:	0		// ditto
                ,	margin:		0
                ,	position:	"relative"
              });
              // convert body padding to an inset option - the border cannot be measured in IE6!
              if (!o.inset) o.inset = elDims( $N ).inset;
            }
            else { // use absolute positioning for BODY to allow borders & padding without overflow
              $N.css({
                width:		"auto"
                ,	height:		"auto"
                ,	margin:		0
                ,	position:	"absolute"	// allows for border and padding on BODY
              });
              // apply edge-positioning created above
              $N.css( o.outset );
            }
            // set current layout-container dimensions
            $.extend(sC, elDims( $N, o.inset )); // passing inset means DO NOT include insetX values
          }
          else {
            // container MUST have 'position'
            var	p = $N.css("position");
            if (!p || !p.match(/(fixed|absolute|relative)/))
              $N.css("position","relative");

            // set current layout-container dimensions
            if ( $N.is(":visible") ) {
              $.extend(sC, elDims( $N, o.inset )); // passing inset means DO NOT change insetX (padding) values
              if (sC.innerHeight < 1) // container has no 'height' - warn developer
                _log( o.errors.noContainerHeight.replace(/CONTAINER/, sC.ref) );
            }
          }

          // if container has min-width/height, then enable scrollbar(s)
          if ( num($N, "minWidth")  ) $N.parent().css("overflowX","auto");
          if ( num($N, "minHeight") ) $N.parent().css("overflowY","auto");

        } catch (ex) {}
      }

      /**
       * Bind layout hotkeys - if options enabled
       *
       * @see  _create() and addPane()
       * @param {string=}	[panes=""]	The edge(s) to process
       */
      ,	initHotkeys = function (panes) {
        panes = panes ? panes.split(",") : _c.borderPanes;
        // bind keyDown to capture hotkeys, if option enabled for ANY pane
        $.each(panes, function (i, pane) {
          var o = options[pane];
          if (o.enableCursorHotkey || o.customHotkey) {
            $(document).bind("keydown."+ sID, keyDown); // only need to bind this ONCE
            return false; // BREAK - binding was done
          }
        });
      }

      /**
       * Build final OPTIONS data
       *
       * @see  _create()
       */
      ,	initOptions = function () {
        var data, d, pane, key, val, i, c, o;

        // reprocess user's layout-options to have correct options sub-key structure
        opts = $.layout.transformData( opts, true ); // panes = default subkey

        // auto-rename old options for backward compatibility
        opts = $.layout.backwardCompatibility.renameAllOptions( opts );

        // if user-options has 'panes' key (pane-defaults), clean it...
        if (!$.isEmptyObject(opts.panes)) {
          // REMOVE any pane-defaults that MUST be set per-pane
          data = $.layout.optionsMap.noDefault;
          for (i=0, c=data.length; i<c; i++) {
            key = data[i];
            delete opts.panes[key]; // OK if does not exist
          }
          // REMOVE any layout-options specified under opts.panes
          data = $.layout.optionsMap.layout;
          for (i=0, c=data.length; i<c; i++) {
            key = data[i];
            delete opts.panes[key]; // OK if does not exist
          }
        }

        // MOVE any NON-layout-options from opts-root to opts.panes
        data = $.layout.optionsMap.layout;
        var rootKeys = $.layout.config.optionRootKeys;
        for (key in opts) {
          val = opts[key];
          if ($.inArray(key, rootKeys) < 0 && $.inArray(key, data) < 0) {
            if (!opts.panes[key])
              opts.panes[key] = $.isPlainObject(val) ? $.extend(true, {}, val) : val;
            delete opts[key]
          }
        }

        // START by updating ALL options from opts
        $.extend(true, options, opts);

        // CREATE final options (and config) for EACH pane
        $.each(_c.allPanes, function (i, pane) {

          // apply 'pane-defaults' to CONFIG.[PANE]
          _c[pane] = $.extend(true, {}, _c.panes, _c[pane]);

          d = options.panes;
          o = options[pane];

          // center-pane uses SOME keys in defaults.panes branch
          if (pane === 'center') {
            // ONLY copy keys from opts.panes listed in: $.layout.optionsMap.center
            data = $.layout.optionsMap.center;		// list of 'center-pane keys'
            for (i=0, c=data.length; i<c; i++) {	// loop the list...
              key = data[i];
              // only need to use pane-default if pane-specific value not set
              if (!opts.center[key] && (opts.panes[key] || !o[key]))
                o[key] = d[key]; // pane-default
            }
          }
          else {
            // border-panes use ALL keys in defaults.panes branch
            o = options[pane] = $.extend(true, {}, d, o); // re-apply pane-specific opts AFTER pane-defaults
            createFxOptions( pane );
            // ensure all border-pane-specific base-classes exist
            if (!o.resizerClass)	o.resizerClass	= "ui-layout-resizer";
            if (!o.togglerClass)	o.togglerClass	= "ui-layout-toggler";
          }
          // ensure we have base pane-class (ALL panes)
          if (!o.paneClass) o.paneClass = "ui-layout-pane";
        });

        // update options.zIndexes if a zIndex-option specified
        var zo	= opts.zIndex
          ,	z	= options.zIndexes;
        if (zo > 0) {
          z.pane_normal		= zo;
          z.content_mask		= max(zo+1, z.content_mask);	// MIN = +1
          z.resizer_normal	= max(zo+2, z.resizer_normal);	// MIN = +2
        }

        // DELETE 'panes' key now that we are done - values were copied to EACH pane
        delete options.panes;


        function createFxOptions ( pane ) {
          var	o = options[pane]
            ,	d = options.panes;
          // ensure fxSettings key to avoid errors
          if (!o.fxSettings) o.fxSettings = {};
          if (!d.fxSettings) d.fxSettings = {};

          $.each(["_open","_close","_size"], function (i,n) {
            var
              sName		= "fxName"+ n
              ,	sSpeed		= "fxSpeed"+ n
              ,	sSettings	= "fxSettings"+ n
              // recalculate fxName according to specificity rules
              ,	fxName = o[sName] =
                o[sName]	// options.west.fxName_open
                ||	d[sName]	// options.panes.fxName_open
                ||	o.fxName	// options.west.fxName
                ||	d.fxName	// options.panes.fxName
                ||	"none"		// MEANS $.layout.defaults.panes.fxName == "" || false || null || 0
              ,	fxExists	= $.effects && ($.effects[fxName] || ($.effects.effect && $.effects.effect[fxName]))
            ;
            // validate fxName to ensure is valid effect - MUST have effect-config data in options.effects
            if (fxName === "none" || !options.effects[fxName] || !fxExists)
              fxName = o[sName] = "none"; // effect not loaded OR unrecognized fxName

            // set vars for effects subkeys to simplify logic
            var	fx		= options.effects[fxName] || {}	// effects.slide
              ,	fx_all	= fx.all	|| null				// effects.slide.all
              ,	fx_pane	= fx[pane]	|| null				// effects.slide.west
            ;
            // create fxSpeed[_open|_close|_size]
            o[sSpeed] =
              o[sSpeed]				// options.west.fxSpeed_open
              ||	d[sSpeed]				// options.west.fxSpeed_open
              ||	o.fxSpeed				// options.west.fxSpeed
              ||	d.fxSpeed				// options.panes.fxSpeed
              ||	null					// DEFAULT - let fxSetting.duration control speed
            ;
            // create fxSettings[_open|_close|_size]
            o[sSettings] = $.extend(
              true
              ,	{}
              ,	fx_all					// effects.slide.all
              ,	fx_pane					// effects.slide.west
              ,	d.fxSettings			// options.panes.fxSettings
              ,	o.fxSettings			// options.west.fxSettings
              ,	d[sSettings]			// options.panes.fxSettings_open
              ,	o[sSettings]			// options.west.fxSettings_open
            );
          });

          // DONE creating action-specific-settings for this pane,
          // so DELETE generic options - are no longer meaningful
          delete o.fxName;
          delete o.fxSpeed;
          delete o.fxSettings;
        }
      }

      /**
       * Initialize module objects, styling, size and position for all panes
       *
       * @see  _initElements()
       * @param {string}	pane		The pane to process
       */
      ,	getPane = function (pane) {
        var sel = options[pane].paneSelector
        if (sel.substr(0,1)==="#") // ID selector
        // NOTE: elements selected 'by ID' DO NOT have to be 'children'
          return $N.find(sel).eq(0);
        else { // class or other selector
          var $P = $N.children(sel).eq(0);
          // look for the pane nested inside a 'form' element
          return $P.length ? $P : $N.children("form:first").children(sel).eq(0);
        }
      }

      /**
       * @param {Object=}		evt
       */
      ,	initPanes = function (evt) {
        // stopPropagation if called by trigger("layoutinitpanes") - use evtPane utility
        evtPane(evt);

        // NOTE: do north & south FIRST so we can measure their height - do center LAST
        $.each(_c.allPanes, function (idx, pane) {
          addPane( pane, true );
        });

        // init the pane-handles NOW in case we have to hide or close the pane below
        initHandles();

        // now that all panes have been initialized and initially-sized,
        // make sure there is really enough space available for each pane
        $.each(_c.borderPanes, function (i, pane) {
          if ($Ps[pane] && state[pane].isVisible) { // pane is OPEN
            setSizeLimits(pane);
            makePaneFit(pane); // pane may be Closed, Hidden or Resized by makePaneFit()
          }
        });
        // size center-pane AGAIN in case we 'closed' a border-pane in loop above
        sizeMidPanes("center");

        //	Chrome/Webkit sometimes fires callbacks BEFORE it completes resizing!
        //	Before RC30.3, there was a 10ms delay here, but that caused layout
        //	to load asynchrously, which is BAD, so try skipping delay for now

        // process pane contents and callbacks, and init/resize child-layout if exists
        $.each(_c.allPanes, function (idx, pane) {
          afterInitPane(pane);
        });
      }

      /**
       * Add a pane to the layout - subroutine of initPanes()
       *
       * @see  initPanes()
       * @param {string}	pane			The pane to process
       * @param {boolean=}	[force=false]	Size content after init
       */
      ,	addPane = function (pane, force) {
        if ( !force && !isInitialized() ) return;
        var
          o		= options[pane]
          ,	s		= state[pane]
          ,	c		= _c[pane]
          ,	dir		= c.dir
          ,	fx		= s.fx
          ,	spacing	= o.spacing_open || 0
          ,	isCenter = (pane === "center")
          ,	CSS		= {}
          ,	$P		= $Ps[pane]
          ,	size, minSize, maxSize, child
        ;
        // if pane-pointer already exists, remove the old one first
        if ($P)
          removePane( pane, false, true, false );
        else
          $Cs[pane] = false; // init

        $P = $Ps[pane] = getPane(pane);
        if (!$P.length) {
          $Ps[pane] = false; // logic
          return;
        }

        // SAVE original Pane CSS
        if (!$P.data("layoutCSS")) {
          var props = "position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border";
          $P.data("layoutCSS", styles($P, props));
        }

        // create alias for pane data in Instance - initHandles will add more
        Instance[pane] = {
          name:		pane
          ,	pane:		$Ps[pane]
          ,	content:	$Cs[pane]
          ,	options:	options[pane]
          ,	state:		state[pane]
          ,	children:	children[pane]
        };

        // add classes, attributes & events
        $P	.data({
          parentLayout:	Instance		// pointer to Layout Instance
          ,	layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
          ,	layoutEdge:		pane
          ,	layoutRole:		"pane"
        })
          .css(c.cssReq).css("zIndex", options.zIndexes.pane_normal)
          .css(o.applyDemoStyles ? c.cssDemo : {}) // demo styles
          .addClass( o.paneClass +" "+ o.paneClass+"-"+pane ) // default = "ui-layout-pane ui-layout-pane-west" - may be a dupe of 'paneSelector'
          .bind("mouseenter."+ sID, addHover )
          .bind("mouseleave."+ sID, removeHover )
        ;
        var paneMethods = {
          hide:				''
          ,	show:				''
          ,	toggle:				''
          ,	close:				''
          ,	open:				''
          ,	slideOpen:			''
          ,	slideClose:			''
          ,	slideToggle:		''
          ,	size:				'sizePane'
          ,	sizePane:			'sizePane'
          ,	sizeContent:		''
          ,	sizeHandles:		''
          ,	enableClosable:		''
          ,	disableClosable:	''
          ,	enableSlideable:	''
          ,	disableSlideable:	''
          ,	enableResizable:	''
          ,	disableResizable:	''
          ,	swapPanes:			'swapPanes'
          ,	swap:				'swapPanes'
          ,	move:				'swapPanes'
          ,	removePane:			'removePane'
          ,	remove:				'removePane'
          ,	createChildren:		''
          ,	resizeChildren:		''
          ,	resizeAll:			'resizeAll'
          ,	resizeLayout:		'resizeAll'
        }
          ,	name;
        // loop hash and bind all methods - include layoutID namespacing
        for (name in paneMethods) {
          $P.bind("layoutpane"+ name.toLowerCase() +"."+ sID, Instance[ paneMethods[name] || name ]);
        }

        // see if this pane has a 'scrolling-content element'
        initContent(pane, false); // false = do NOT sizeContent() - called later

        if (!isCenter) {
          // call _parseSize AFTER applying pane classes & styles - but before making visible (if hidden)
          // if o.size is auto or not valid, then MEASURE the pane and use that as its 'size'
          size	= s.size = _parseSize(pane, o.size);
          minSize	= _parseSize(pane,o.minSize) || 1;
          maxSize	= _parseSize(pane,o.maxSize) || 100000;
          if (size > 0) size = max(min(size, maxSize), minSize);
          s.autoResize = o.autoResize; // used with percentage sizes

          // state for border-panes
          s.isClosed  = false; // true = pane is closed
          s.isSliding = false; // true = pane is currently open by 'sliding' over adjacent panes
          s.isResizing= false; // true = pane is in process of being resized
          s.isHidden	= false; // true = pane is hidden - no spacing, resizer or toggler is visible!

          // array for 'pin buttons' whose classNames are auto-updated on pane-open/-close
          if (!s.pins) s.pins = [];
        }
        //	states common to ALL panes
        s.tagName	= $P[0].tagName;
        s.edge		= pane;		// useful if pane is (or about to be) 'swapped' - easy find out where it is (or is going)
        s.noRoom	= false;	// true = pane 'automatically' hidden due to insufficient room - will unhide automatically
        s.isVisible	= true;		// false = pane is invisible - closed OR hidden - simplify logic

        // init pane positioning
        setPanePosition( pane );

        // if pane is not visible,
        if (dir === "horz") // north or south pane
          CSS.height = cssH($P, size);
        else if (dir === "vert") // east or west pane
          CSS.width = cssW($P, size);
        //else if (isCenter) {}

        $P.css(CSS); // apply size -- top, bottom & height will be set by sizeMidPanes
        if (dir != "horz") sizeMidPanes(pane, true); // true = skipCallback

        // if manually adding a pane AFTER layout initialization, then...
        if (state.initialized) {
          initHandles( pane );
          initHotkeys( pane );
        }

        // close or hide the pane if specified in settings
        if (o.initClosed && o.closable && !o.initHidden)
          close(pane, true, true); // true, true = force, noAnimation
        else if (o.initHidden || o.initClosed)
          hide(pane); // will be completely invisible - no resizer or spacing
        else if (!s.noRoom)
        // make the pane visible - in case was initially hidden
          $P.css("display","block");
        // ELSE setAsOpen() - called later by initHandles()

        // RESET visibility now - pane will appear IF display:block
        $P.css("visibility","visible");

        // check option for auto-handling of pop-ups & drop-downs
        if (o.showOverflowOnHover)
          $P.hover( allowOverflow, resetOverflow );

        // if manually adding a pane AFTER layout initialization, then...
        if (state.initialized) {
          afterInitPane( pane );
        }
      }

      ,	afterInitPane = function (pane) {
        var	$P	= $Ps[pane]
          ,	s	= state[pane]
          ,	o	= options[pane]
        ;
        if (!$P) return;

        // see if there is a directly-nested layout inside this pane
        if ($P.data("layout"))
          refreshChildren( pane, $P.data("layout") );

        // process pane contents and callbacks, and init/resize child-layout if exists
        if (s.isVisible) { // pane is OPEN
          if (state.initialized) // this pane was added AFTER layout was created
            resizeAll(); // will also sizeContent
          else
            sizeContent(pane);

          if (o.triggerEventsOnLoad)
            _runCallbacks("onresize_end", pane);
          else // automatic if onresize called, otherwise call it specifically
          // resize child - IF inner-layout already exists (created before this layout)
            resizeChildren(pane, true); // a previously existing childLayout
        }

        // init childLayouts - even if pane is not visible
        if (o.initChildren && o.children)
          createChildren(pane);
      }

      /**
       * @param {string=}	panes		The pane(s) to process
       */
      ,	setPanePosition = function (panes) {
        panes = panes ? panes.split(",") : _c.borderPanes;

        // create toggler DIVs for each pane, and set object pointers for them, eg: $R.north = north toggler DIV
        $.each(panes, function (i, pane) {
          var $P	= $Ps[pane]
            ,	$R	= $Rs[pane]
            ,	o	= options[pane]
            ,	s	= state[pane]
            ,	side =  _c[pane].side
            ,	CSS	= {}
          ;
          if (!$P) return; // pane does not exist - skip

          // set css-position to account for container borders & padding
          switch (pane) {
            case "north": 	CSS.top 	= sC.inset.top;
              CSS.left 	= sC.inset.left;
              CSS.right	= sC.inset.right;
              break;
            case "south": 	CSS.bottom	= sC.inset.bottom;
              CSS.left 	= sC.inset.left;
              CSS.right 	= sC.inset.right;
              break;
            case "west": 	CSS.left 	= sC.inset.left; // top, bottom & height set by sizeMidPanes()
              break;
            case "east": 	CSS.right 	= sC.inset.right; // ditto
              break;
            case "center":	// top, left, width & height set by sizeMidPanes()
          }
          // apply position
          $P.css(CSS);

          // update resizer position
          if ($R && s.isClosed)
            $R.css(side, sC.inset[side]);
          else if ($R && !s.isHidden)
            $R.css(side, sC.inset[side] + getPaneSize(pane));
        });
      }

      /**
       * Initialize module objects, styling, size and position for all resize bars and toggler buttons
       *
       * @see  _create()
       * @param {string=}	[panes=""]	The edge(s) to process
       */
      ,	initHandles = function (panes) {
        panes = panes ? panes.split(",") : _c.borderPanes;

        // create toggler DIVs for each pane, and set object pointers for them, eg: $R.north = north toggler DIV
        $.each(panes, function (i, pane) {
          var $P		= $Ps[pane];
          $Rs[pane]	= false; // INIT
          $Ts[pane]	= false;
          if (!$P) return; // pane does not exist - skip

          var	o		= options[pane]
            ,	s		= state[pane]
            ,	c		= _c[pane]
            ,	paneId	= o.paneSelector.substr(0,1) === "#" ? o.paneSelector.substr(1) : ""
            ,	rClass	= o.resizerClass
            ,	tClass	= o.togglerClass
            ,	spacing	= (s.isVisible ? o.spacing_open : o.spacing_closed)
            ,	_pane	= "-"+ pane // used for classNames
            ,	_state	= (s.isVisible ? "-open" : "-closed") // used for classNames
            ,	I		= Instance[pane]
            // INIT RESIZER BAR
            ,	$R		= I.resizer = $Rs[pane] = $("<div></div>")
            // INIT TOGGLER BUTTON
            ,	$T		= I.toggler = (o.closable ? $Ts[pane] = $("<div></div>") : false)
          ;

          //if (s.isVisible && o.resizable) ... handled by initResizable
          if (!s.isVisible && o.slidable)
            $R.attr("title", o.tips.Slide).css("cursor", o.sliderCursor);

          $R	// if paneSelector is an ID, then create a matching ID for the resizer, eg: "#paneLeft" => "paneLeft-resizer"
            .attr("id", paneId ? paneId +"-resizer" : "" )
            .data({
              parentLayout:	Instance
              ,	layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
              ,	layoutEdge:		pane
              ,	layoutRole:		"resizer"
            })
            .css(_c.resizers.cssReq).css("zIndex", options.zIndexes.resizer_normal)
            .css(o.applyDemoStyles ? _c.resizers.cssDemo : {}) // add demo styles
            .addClass(rClass +" "+ rClass+_pane)
            .hover(addHover, removeHover) // ALWAYS add hover-classes, even if resizing is not enabled - handle with CSS instead
            .hover(onResizerEnter, onResizerLeave) // ALWAYS NEED resizer.mouseleave to balance toggler.mouseenter
            .mousedown($.layout.disableTextSelection)	// prevent text-selection OUTSIDE resizer
            .mouseup($.layout.enableTextSelection)		// not really necessary, but just in case
            .appendTo($N) // append DIV to container
          ;
          if ($.fn.disableSelection)
            $R.disableSelection(); // prevent text-selection INSIDE resizer
          if (o.resizerDblClickToggle)
            $R.bind("dblclick."+ sID, toggle );

          if ($T) {
            $T	// if paneSelector is an ID, then create a matching ID for the resizer, eg: "#paneLeft" => "#paneLeft-toggler"
              .attr("id", paneId ? paneId +"-toggler" : "" )
              .data({
                parentLayout:	Instance
                ,	layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
                ,	layoutEdge:		pane
                ,	layoutRole:		"toggler"
              })
              .css(_c.togglers.cssReq) // add base/required styles
              .css(o.applyDemoStyles ? _c.togglers.cssDemo : {}) // add demo styles
              .addClass(tClass +" "+ tClass+_pane)
              .hover(addHover, removeHover) // ALWAYS add hover-classes, even if toggling is not enabled - handle with CSS instead
              .bind("mouseenter", onResizerEnter) // NEED toggler.mouseenter because mouseenter MAY NOT fire on resizer
              .appendTo($R) // append SPAN to resizer DIV
            ;
            // ADD INNER-SPANS TO TOGGLER
            if (o.togglerContent_open) // ui-layout-open
              $("<span>"+ o.togglerContent_open +"</span>")
                .data({
                  layoutEdge:		pane
                  ,	layoutRole:		"togglerContent"
                })
                .data("layoutRole", "togglerContent")
                .data("layoutEdge", pane)
                .addClass("content content-open")
                .css("display","none")
                .appendTo( $T )
              //.hover( addHover, removeHover ) // use ui-layout-toggler-west-hover .content-open instead!
              ;
            if (o.togglerContent_closed) // ui-layout-closed
              $("<span>"+ o.togglerContent_closed +"</span>")
                .data({
                  layoutEdge:		pane
                  ,	layoutRole:		"togglerContent"
                })
                .addClass("content content-closed")
                .css("display","none")
                .appendTo( $T )
              //.hover( addHover, removeHover ) // use ui-layout-toggler-west-hover .content-closed instead!
              ;
            // ADD TOGGLER.click/.hover
            enableClosable(pane);
          }

          // add Draggable events
          initResizable(pane);

          // ADD CLASSNAMES & SLIDE-BINDINGS - eg: class="resizer resizer-west resizer-open"
          if (s.isVisible)
            setAsOpen(pane);	// onOpen will be called, but NOT onResize
          else {
            setAsClosed(pane);	// onClose will be called
            bindStartSlidingEvents(pane, true); // will enable events IF option is set
          }

        });

        // SET ALL HANDLE DIMENSIONS
        sizeHandles();
      }


      /**
       * Initialize scrolling ui-layout-content div - if exists
       *
       * @see  initPane() - or externally after an Ajax injection
       * @param {string}	pane			The pane to process
       * @param {boolean=}	[resize=true]	Size content after init
       */
      ,	initContent = function (pane, resize) {
        if (!isInitialized()) return;
        var
          o	= options[pane]
          ,	sel	= o.contentSelector
          ,	I	= Instance[pane]
          ,	$P	= $Ps[pane]
          ,	$C
        ;
        if (sel) $C = I.content = $Cs[pane] = (o.findNestedContent)
          ? $P.find(sel).eq(0) // match 1-element only
          : $P.children(sel).eq(0)
        ;
        if ($C && $C.length) {
          $C.data("layoutRole", "content");
          // SAVE original Content CSS
          if (!$C.data("layoutCSS"))
            $C.data("layoutCSS", styles($C, "height"));
          $C.css( _c.content.cssReq );
          if (o.applyDemoStyles) {
            $C.css( _c.content.cssDemo ); // add padding & overflow: auto to content-div
            $P.css( _c.content.cssDemoPane ); // REMOVE padding/scrolling from pane
          }
          // ensure no vertical scrollbar on pane - will mess up measurements
          if ($P.css("overflowX").match(/(scroll|auto)/)) {
            $P.css("overflow", "hidden");
          }
          state[pane].content = {}; // init content state
          if (resize !== false) sizeContent(pane);
          // sizeContent() is called AFTER init of all elements
        }
        else
          I.content = $Cs[pane] = false;
      }


      /**
       * Add resize-bars to all panes that specify it in options
       * -dependancy: $.fn.resizable - will skip if not found
       *
       * @see  _create()
       * @param {string=}	[panes=""]	The edge(s) to process
       */
      ,	initResizable = function (panes) {
        var	draggingAvailable = $.layout.plugins.draggable
          ,	side // set in start()
        ;
        panes = panes ? panes.split(",") : _c.borderPanes;

        $.each(panes, function (idx, pane) {
          var o = options[pane];
          if (!draggingAvailable || !$Ps[pane] || !o.resizable) {
            o.resizable = false;
            return true; // skip to next
          }

          var s		= state[pane]
            ,	z		= options.zIndexes
            ,	c		= _c[pane]
            ,	side	= c.dir=="horz" ? "top" : "left"
            ,	$P 		= $Ps[pane]
            ,	$R		= $Rs[pane]
            ,	base	= o.resizerClass
            ,	lastPos	= 0 // used when live-resizing
            ,	r, live // set in start because may change
            //	'drag' classes are applied to the ORIGINAL resizer-bar while dragging is in process
            ,	resizerClass		= base+"-drag"				// resizer-drag
            ,	resizerPaneClass	= base+"-"+pane+"-drag"		// resizer-north-drag
            //	'helper' class is applied to the CLONED resizer-bar while it is being dragged
            ,	helperClass			= base+"-dragging"			// resizer-dragging
            ,	helperPaneClass		= base+"-"+pane+"-dragging" // resizer-north-dragging
            ,	helperLimitClass	= base+"-dragging-limit"	// resizer-drag
            ,	helperPaneLimitClass = base+"-"+pane+"-dragging-limit"	// resizer-north-drag
            ,	helperClassesSet	= false 					// logic var
          ;

          if (!s.isClosed)
            $R.attr("title", o.tips.Resize)
              .css("cursor", o.resizerCursor); // n-resize, s-resize, etc

          $R.draggable({
            containment:	$N[0] // limit resizing to layout container
            ,	axis:			(c.dir=="horz" ? "y" : "x") // limit resizing to horz or vert axis
            ,	delay:			0
            ,	distance:		1
            ,	grid:			o.resizingGrid
            //	basic format for helper - style it using class: .ui-draggable-dragging
            ,	helper:			"clone"
            ,	opacity:		o.resizerDragOpacity
            ,	addClasses:		false // avoid ui-state-disabled class when disabled
            //,	iframeFix:		o.draggableIframeFix // TODO: consider using when bug is fixed
            ,	zIndex:			z.resizer_drag

            ,	start: function (e, ui) {
              // REFRESH options & state pointers in case we used swapPanes
              o = options[pane];
              s = state[pane];
              // re-read options
              live = o.livePaneResizing;

              // ondrag_start callback - will CANCEL hide if returns false
              // TODO: dragging CANNOT be cancelled like this, so see if there is a way?
              if (false === _runCallbacks("ondrag_start", pane)) return false;

              s.isResizing		= true; // prevent pane from closing while resizing
              state.paneResizing	= pane; // easy to see if ANY pane is resizing
              timer.clear(pane+"_closeSlider"); // just in case already triggered

              // SET RESIZER LIMITS - used in drag()
              setSizeLimits(pane); // update pane/resizer state
              r = s.resizerPosition;
              lastPos = ui.position[ side ]

              $R.addClass( resizerClass +" "+ resizerPaneClass ); // add drag classes
              helperClassesSet = false; // reset logic var - see drag()

              // MASK PANES CONTAINING IFRAMES, APPLETS OR OTHER TROUBLESOME ELEMENTS
              showMasks( pane, { resizing: true });
            }

            ,	drag: function (e, ui) {
              if (!helperClassesSet) { // can only add classes after clone has been added to the DOM
                //$(".ui-draggable-dragging")
                ui.helper
                  .addClass( helperClass +" "+ helperPaneClass ) // add helper classes
                  .css({ right: "auto", bottom: "auto" })	// fix dir="rtl" issue
                  .children().css("visibility","hidden")	// hide toggler inside dragged resizer-bar
                ;
                helperClassesSet = true;
                // draggable bug!? RE-SET zIndex to prevent E/W resize-bar showing through N/S pane!
                if (s.isSliding) $Ps[pane].css("zIndex", z.pane_sliding);
              }
              // CONTAIN RESIZER-BAR TO RESIZING LIMITS
              var limit = 0;
              if (ui.position[side] < r.min) {
                ui.position[side] = r.min;
                limit = -1;
              }
              else if (ui.position[side] > r.max) {
                ui.position[side] = r.max;
                limit = 1;
              }
              // ADD/REMOVE dragging-limit CLASS
              if (limit) {
                ui.helper.addClass( helperLimitClass +" "+ helperPaneLimitClass ); // at dragging-limit
                window.defaultStatus = (limit>0 && pane.match(/(north|west)/)) || (limit<0 && pane.match(/(south|east)/)) ? o.tips.maxSizeWarning : o.tips.minSizeWarning;
              }
              else {
                ui.helper.removeClass( helperLimitClass +" "+ helperPaneLimitClass ); // not at dragging-limit
                window.defaultStatus = "";
              }
              // DYNAMICALLY RESIZE PANES IF OPTION ENABLED
              // won't trigger unless resizer has actually moved!
              if (live && Math.abs(ui.position[side] - lastPos) >= o.liveResizingTolerance) {
                lastPos = ui.position[side];
                resizePanes(e, ui, pane)
              }
            }

            ,	stop: function (e, ui) {
              $('body').enableSelection(); // RE-ENABLE TEXT SELECTION
              window.defaultStatus = ""; // clear 'resizing limit' message from statusbar
              $R.removeClass( resizerClass +" "+ resizerPaneClass ); // remove drag classes from Resizer
              s.isResizing		= false;
              state.paneResizing	= false; // easy to see if ANY pane is resizing
              resizePanes(e, ui, pane, true); // true = resizingDone
            }

          });
        });

        /**
         * resizePanes
         *
         * Sub-routine called from stop() - and drag() if livePaneResizing
         *
         * @param {!Object}		evt
         * @param {!Object}		ui
         * @param {string}		pane
         * @param {boolean=}		[resizingDone=false]
         */
        var resizePanes = function (evt, ui, pane, resizingDone) {
          var	dragPos	= ui.position
            ,	c		= _c[pane]
            ,	o		= options[pane]
            ,	s		= state[pane]
            ,	resizerPos
          ;
          switch (pane) {
            case "north":	resizerPos = dragPos.top; break;
            case "west":	resizerPos = dragPos.left; break;
            case "south":	resizerPos = sC.layoutHeight - dragPos.top  - o.spacing_open; break;
            case "east":	resizerPos = sC.layoutWidth  - dragPos.left - o.spacing_open; break;
          };
          // remove container margin from resizer position to get the pane size
          var newSize = resizerPos - sC.inset[c.side];

          // Disable OR Resize Mask(s) created in drag.start
          if (!resizingDone) {
            // ensure we meet liveResizingTolerance criteria
            if (Math.abs(newSize - s.size) < o.liveResizingTolerance)
              return; // SKIP resize this time
            // resize the pane
            manualSizePane(pane, newSize, false, true); // true = noAnimation
            sizeMasks(); // resize all visible masks
          }
          else { // resizingDone
            // ondrag_end callback
            if (false !== _runCallbacks("ondrag_end", pane))
              manualSizePane(pane, newSize, false, true); // true = noAnimation
            hideMasks(true); // true = force hiding all masks even if one is 'sliding'
            if (s.isSliding) // RE-SHOW 'object-masks' so objects won't show through sliding pane
              showMasks( pane, { resizing: true });
          }
        };
      }

      /**
       *	sizeMask
       *
       *	Needed to overlay a DIV over an IFRAME-pane because mask CANNOT be *inside* the pane
       *	Called when mask created, and during livePaneResizing
       */
      ,	sizeMask = function () {
        var $M		= $(this)
          ,	pane	= $M.data("layoutMask") // eg: "west"
          ,	s		= state[pane]
        ;
        // only masks over an IFRAME-pane need manual resizing
        if (s.tagName == "IFRAME" && s.isVisible) // no need to mask closed/hidden panes
          $M.css({
            top:	s.offsetTop
            ,	left:	s.offsetLeft
            ,	width:	s.outerWidth
            ,	height:	s.outerHeight
          });
        /* ALT Method...
         var $P = $Ps[pane];
         $M.css( $P.position() ).css({ width: $P[0].offsetWidth, height: $P[0].offsetHeight });
         */
      }
      ,	sizeMasks = function () {
        $Ms.each( sizeMask ); // resize all 'visible' masks
      }

      /**
       * @param {string}	pane		The pane being resized, animated or isSliding
       * @param {Object=}	[args]		(optional) Options: which masks to apply, and to which panes
       */
      ,	showMasks = function (pane, args) {
        var	c		= _c[pane]
          ,	panes	=  ["center"]
          ,	z		= options.zIndexes
          ,	a		= $.extend({
            objectsOnly:	false
            ,	animation:		false
            ,	resizing:		true
            ,	sliding:		state[pane].isSliding
          },	args )
          ,	o, s
        ;
        if (a.resizing)
          panes.push( pane );
        if (a.sliding)
          panes.push( _c.oppositeEdge[pane] ); // ADD the oppositeEdge-pane

        if (c.dir === "horz") {
          panes.push("west");
          panes.push("east");
        }

        $.each(panes, function(i,p){
          s = state[p];
          o = options[p];
          if (s.isVisible && ( o.maskObjects || (!a.objectsOnly && o.maskContents) )) {
            getMasks(p).each(function(){
              sizeMask.call(this);
              this.style.zIndex = s.isSliding ? z.pane_sliding+1 : z.pane_normal+1
              this.style.display = "block";
            });
          }
        });
      }

      /**
       * @param {boolean=}	force		Hide masks even if a pane is sliding
       */
      ,	hideMasks = function (force) {
        // ensure no pane is resizing - could be a timing issue
        if (force || !state.paneResizing) {
          $Ms.hide(); // hide ALL masks
        }
        // if ANY pane is sliding, then DO NOT remove masks from panes with maskObjects enabled
        else if (!force && !$.isEmptyObject( state.panesSliding )) {
          var	i = $Ms.length - 1
            ,	p, $M;
          for (; i >= 0; i--) {
            $M	= $Ms.eq(i);
            p	= $M.data("layoutMask");
            if (!options[p].maskObjects) {
              $M.hide();
            }
          }
        }
      }

      /**
       * @param {string}	pane
       */
      ,	getMasks = function (pane) {
        var $Masks	= $([])
          ,	$M, i = 0, c = $Ms.length
        ;
        for (; i<c; i++) {
          $M = $Ms.eq(i);
          if ($M.data("layoutMask") === pane)
            $Masks = $Masks.add( $M );
        }
        if ($Masks.length)
          return $Masks;
        else
          return createMasks(pane);
      }

      /**
       * createMasks
       *
       * Generates both DIV (ALWAYS used) and IFRAME (optional) elements as masks
       * An IFRAME mask is created *under* the DIV when maskObjects=true, because a DIV cannot mask an applet
       *
       * @param {string}	pane
       */
      ,	createMasks = function (pane) {
        var
          $P	= $Ps[pane]
          ,	s	= state[pane]
          ,	o	= options[pane]
          ,	z	= options.zIndexes
          ,	isIframe, el, $M, css, i
        ;
        if (!o.maskContents && !o.maskObjects) return $([]);
        // if o.maskObjects=true, then loop TWICE to create BOTH kinds of mask, else only create a DIV
        for (i=0; i < (o.maskObjects ? 2 : 1); i++) {
          isIframe = o.maskObjects && i==0;
          el = document.createElement( isIframe ? "iframe" : "div" );
          $M = $(el).data("layoutMask", pane); // add data to relate mask to pane
          el.className = "ui-layout-mask ui-layout-mask-"+ pane; // for user styling
          css = el.style;
          // Both DIVs and IFRAMES
          css.background	= "#FFF";
          css.position	= "absolute";
          css.display		= "block";
          if (isIframe) { // IFRAME-only props
            el.src		= "about:blank";
            el.frameborder = 0;
            css.border	= 0;
            css.opacity	= 0;
            css.filter	= "Alpha(Opacity='0')";
            //el.allowTransparency = true; - for IE, but breaks masking ability!
          }
          else { // DIV-only props
            css.opacity	= 0.001;
            css.filter	= "Alpha(Opacity='1')";
          }
          // if pane IS an IFRAME, then must mask the pane itself
          if (s.tagName == "IFRAME") {
            // NOTE sizing done by a subroutine so can be called during live-resizing
            css.zIndex	= z.pane_normal+1; // 1-higher than pane
            $N.append( el ); // append to LAYOUT CONTAINER
          }
          // otherwise put masks *inside the pane* to mask its contents
          else {
            $M.addClass("ui-layout-mask-inside-pane");
            css.zIndex	= o.maskZindex || z.content_mask; // usually 1, but customizable
            css.top		= 0;
            css.left	= 0;
            css.width	= "100%";
            css.height	= "100%";
            $P.append( el ); // append INSIDE pane element
          }
          // add Mask to cached array so can be resized & reused
          $Ms = $Ms.add( el );
        }
        return $Ms;
      }


      /**
       * Destroy this layout and reset all elements
       *
       * @param {boolean=}	[destroyChildren=false]		Destory Child-Layouts first?
       */
      ,	destroy = function (evt_or_destroyChildren, destroyChildren) {
        // UNBIND layout events and remove global object
        $(window).unbind("."+ sID);		// resize & unload
        $(document).unbind("."+ sID);	// keyDown (hotkeys)

        if (typeof evt_or_destroyChildren === "object")
        // stopPropagation if called by trigger("layoutdestroy") - use evtPane utility
          evtPane(evt_or_destroyChildren);
        else // no event, so transfer 1st param to destroyChildren param
          destroyChildren = evt_or_destroyChildren;

        // need to look for parent layout BEFORE we remove the container data, else skips a level
        //var parentPane = Instance.hasParentLayout ? $.layout.getParentPaneInstance( $N ) : null;

        // reset layout-container
        $N	.clearQueue()
          .removeData("layout")
          .removeData("layoutContainer")
          .removeClass(options.containerClass)
          .unbind("."+ sID) // remove ALL Layout events
        ;

        // remove all mask elements that have been created
        $Ms.remove();

        // loop all panes to remove layout classes, attributes and bindings
        $.each(_c.allPanes, function (i, pane) {
          removePane( pane, false, true, destroyChildren ); // true = skipResize
        });

        // do NOT reset container CSS if is a 'pane' (or 'content') in an outer-layout - ie, THIS layout is 'nested'
        var css = "layoutCSS";
        if ($N.data(css) && !$N.data("layoutRole")) // RESET CSS
          $N.css( $N.data(css) ).removeData(css);

        // for full-page layouts, also reset the <HTML> CSS
        if (sC.tagName === "BODY" && ($N = $("html")).data(css)) // RESET <HTML> CSS
          $N.css( $N.data(css) ).removeData(css);

        // trigger plugins for this layout, if there are any
        runPluginCallbacks( Instance, $.layout.onDestroy );

        // trigger state-management and onunload callback
        unload();

        // clear the Instance of everything except for container & options (so could recreate)
        // RE-CREATE: myLayout = myLayout.container.layout( myLayout.options );
        for (var n in Instance)
          if (!n.match(/^(container|options)$/)) delete Instance[ n ];
        // add a 'destroyed' flag to make it easy to check
        Instance.destroyed = true;

        // if this is a child layout, CLEAR the child-pointer in the parent
        /* for now the pointer REMAINS, but with only container, options and destroyed keys
         if (parentPane) {
         var layout	= parentPane.pane.data("parentLayout")
         ,	key		= layout.options.instanceKey || 'error';
         // THIS SYNTAX MAY BE WRONG!
         parentPane.children[key] = layout.children[ parentPane.name ].children[key] = null;
         }
         */

        return Instance; // for coding convenience
      }

      /**
       * Remove a pane from the layout - subroutine of destroy()
       *
       * @see  destroy()
       * @param {(string|Object)}	evt_or_pane			The pane to process
       * @param {boolean=}			[remove=false]		Remove the DOM element?
       * @param {boolean=}			[skipResize=false]	Skip calling resizeAll()?
       * @param {boolean=}			[destroyChild=true]	Destroy Child-layouts? If not passed, obeys options setting
       */
      ,	removePane = function (evt_or_pane, remove, skipResize, destroyChild) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$P	= $Ps[pane]
          ,	$C	= $Cs[pane]
          ,	$R	= $Rs[pane]
          ,	$T	= $Ts[pane]
        ;
        // NOTE: elements can still exist even after remove()
        //		so check for missing data(), which is cleared by removed()
        if ($P && $.isEmptyObject( $P.data() )) $P = false;
        if ($C && $.isEmptyObject( $C.data() )) $C = false;
        if ($R && $.isEmptyObject( $R.data() )) $R = false;
        if ($T && $.isEmptyObject( $T.data() )) $T = false;

        if ($P) $P.stop(true, true);

        var	o	= options[pane]
          ,	s	= state[pane]
          ,	d	= "layout"
          ,	css	= "layoutCSS"
          ,	pC	= children[pane]
          ,	hasChildren	= $.isPlainObject( pC ) && !$.isEmptyObject( pC )
          ,	destroy		= destroyChild !== undefined ? destroyChild : o.destroyChildren
        ;
        // FIRST destroy the child-layout(s)
        if (hasChildren && destroy) {
          $.each( pC, function (key, child) {
            if (!child.destroyed)
              child.destroy(true);// tell child-layout to destroy ALL its child-layouts too
            if (child.destroyed)	// destroy was successful
              delete pC[key];
          });
          // if no more children, remove the children hash
          if ($.isEmptyObject( pC )) {
            pC = children[pane] = null; // clear children hash
            hasChildren = false;
          }
        }

        // Note: can't 'remove' a pane element with non-destroyed children
        if ($P && remove && !hasChildren)
          $P.remove(); // remove the pane-element and everything inside it
        else if ($P && $P[0]) {
          //	create list of ALL pane-classes that need to be removed
          var	root	= o.paneClass // default="ui-layout-pane"
            ,	pRoot	= root +"-"+ pane // eg: "ui-layout-pane-west"
            ,	_open	= "-open"
            ,	_sliding= "-sliding"
            ,	_closed	= "-closed"
            ,	classes	= [	root, root+_open, root+_closed, root+_sliding,		// generic classes
            pRoot, pRoot+_open, pRoot+_closed, pRoot+_sliding ]	// pane-specific classes
          ;
          $.merge(classes, getHoverClasses($P, true)); // ADD hover-classes
          // remove all Layout classes from pane-element
          $P	.removeClass( classes.join(" ") ) // remove ALL pane-classes
            .removeData("parentLayout")
            .removeData("layoutPane")
            .removeData("layoutRole")
            .removeData("layoutEdge")
            .removeData("autoHidden")	// in case set
            .unbind("."+ sID) // remove ALL Layout events
          // TODO: remove these extra unbind commands when jQuery is fixed
          //.unbind("mouseenter"+ sID)
          //.unbind("mouseleave"+ sID)
          ;
          // do NOT reset CSS if this pane/content is STILL the container of a nested layout!
          // the nested layout will reset its 'container' CSS when/if it is destroyed
          if (hasChildren && $C) {
            // a content-div may not have a specific width, so give it one to contain the Layout
            $C.width( $C.width() );
            $.each( pC, function (key, child) {
              child.resizeAll(); // resize the Layout
            });
          }
          else if ($C)
            $C.css( $C.data(css) ).removeData(css).removeData("layoutRole");
          // remove pane AFTER content in case there was a nested layout
          if (!$P.data(d))
            $P.css( $P.data(css) ).removeData(css);
        }

        // REMOVE pane resizer and toggler elements
        if ($T) $T.remove();
        if ($R) $R.remove();

        // CLEAR all pointers and state data
        Instance[pane] = $Ps[pane] = $Cs[pane] = $Rs[pane] = $Ts[pane] = false;
        s = { removed: true };

        if (!skipResize)
          resizeAll();
      }


      /*
       * ###########################
       *	   ACTION METHODS
       * ###########################
       */

      /**
       * @param {string}	pane
       */
      ,	_hidePane = function (pane) {
        var $P	= $Ps[pane]
          ,	o	= options[pane]
          ,	s	= $P[0].style
        ;
        if (o.useOffscreenClose) {
          if (!$P.data(_c.offscreenReset))
            $P.data(_c.offscreenReset, { left: s.left, right: s.right });
          $P.css( _c.offscreenCSS );
        }
        else
          $P.hide().removeData(_c.offscreenReset);
      }

      /**
       * @param {string}	pane
       */
      ,	_showPane = function (pane) {
        var $P	= $Ps[pane]
          ,	o	= options[pane]
          ,	off	= _c.offscreenCSS
          ,	old	= $P.data(_c.offscreenReset)
          ,	s	= $P[0].style
        ;
        $P	.show() // ALWAYS show, just in case
          .removeData(_c.offscreenReset);
        if (o.useOffscreenClose && old) {
          if (s.left == off.left)
            s.left = old.left;
          if (s.right == off.right)
            s.right = old.right;
        }
      }


      /**
       * Completely 'hides' a pane, including its spacing - as if it does not exist
       * The pane is not actually 'removed' from the source, so can use 'show' to un-hide it
       *
       * @param {(string|Object)}	evt_or_pane			The pane being hidden, ie: north, south, east, or west
       * @param {boolean=}			[noAnimation=false]
       */
      ,	hide = function (evt_or_pane, noAnimation) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	o	= options[pane]
          ,	s	= state[pane]
          ,	$P	= $Ps[pane]
          ,	$R	= $Rs[pane]
        ;
        if (pane === "center" || !$P || s.isHidden) return; // pane does not exist OR is already hidden

        // onhide_start callback - will CANCEL hide if returns false
        if (state.initialized && false === _runCallbacks("onhide_start", pane)) return;

        s.isSliding = false; // just in case
        delete state.panesSliding[pane];

        // now hide the elements
        if ($R) $R.hide(); // hide resizer-bar
        if (!state.initialized || s.isClosed) {
          s.isClosed = true; // to trigger open-animation on show()
          s.isHidden  = true;
          s.isVisible = false;
          if (!state.initialized)
            _hidePane(pane); // no animation when loading page
          sizeMidPanes(_c[pane].dir === "horz" ? "" : "center");
          if (state.initialized || o.triggerEventsOnLoad)
            _runCallbacks("onhide_end", pane);
        }
        else {
          s.isHiding = true; // used by onclose
          close(pane, false, noAnimation); // adjust all panes to fit
        }
      }

      /**
       * Show a hidden pane - show as 'closed' by default unless openPane = true
       *
       * @param {(string|Object)}	evt_or_pane			The pane being opened, ie: north, south, east, or west
       * @param {boolean=}			[openPane=false]
       * @param {boolean=}			[noAnimation=false]
       * @param {boolean=}			[noAlert=false]
       */
      ,	show = function (evt_or_pane, openPane, noAnimation, noAlert) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	o	= options[pane]
          ,	s	= state[pane]
          ,	$P	= $Ps[pane]
          ,	$R	= $Rs[pane]
        ;
        if (pane === "center" || !$P || !s.isHidden) return; // pane does not exist OR is not hidden

        // onshow_start callback - will CANCEL show if returns false
        if (false === _runCallbacks("onshow_start", pane)) return;

        s.isShowing = true; // used by onopen/onclose
        //s.isHidden  = false; - will be set by open/close - if not cancelled
        s.isSliding = false; // just in case
        delete state.panesSliding[pane];

        // now show the elements
        //if ($R) $R.show(); - will be shown by open/close
        if (openPane === false)
          close(pane, true); // true = force
        else
          open(pane, false, noAnimation, noAlert); // adjust all panes to fit
      }


      /**
       * Toggles a pane open/closed by calling either open or close
       *
       * @param {(string|Object)}	evt_or_pane		The pane being toggled, ie: north, south, east, or west
       * @param {boolean=}			[slide=false]
       */
      ,	toggle = function (evt_or_pane, slide) {
        if (!isInitialized()) return;
        var	evt		= evtObj(evt_or_pane)
          ,	pane	= evtPane.call(this, evt_or_pane)
          ,	s		= state[pane]
        ;
        if (evt) // called from to $R.dblclick OR triggerPaneEvent
          evt.stopImmediatePropagation();
        if (s.isHidden)
          show(pane); // will call 'open' after unhiding it
        else if (s.isClosed)
          open(pane, !!slide);
        else
          close(pane);
      }


      /**
       * Utility method used during init or other auto-processes
       *
       * @param {string}	pane   The pane being closed
       * @param {boolean=}	[setHandles=false]
       */
      ,	_closePane = function (pane, setHandles) {
        var
          $P	= $Ps[pane]
          ,	s	= state[pane]
        ;
        _hidePane(pane);
        s.isClosed = true;
        s.isVisible = false;
        if (setHandles) setAsClosed(pane);
      }

      /**
       * Close the specified pane (animation optional), and resize all other panes as needed
       *
       * @param {(string|Object)}	evt_or_pane			The pane being closed, ie: north, south, east, or west
       * @param {boolean=}			[force=false]
       * @param {boolean=}			[noAnimation=false]
       * @param {boolean=}			[skipCallback=false]
       */
      ,	close = function (evt_or_pane, force, noAnimation, skipCallback) {
        var	pane = evtPane.call(this, evt_or_pane);
        if (pane === "center") return; // validate
        // if pane has been initialized, but NOT the complete layout, close pane instantly
        if (!state.initialized && $Ps[pane]) {
          _closePane(pane, true); // INIT pane as closed
          return;
        }
        if (!isInitialized()) return;

        var
          $P	= $Ps[pane]
          ,	$R	= $Rs[pane]
          ,	$T	= $Ts[pane]
          ,	o	= options[pane]
          ,	s	= state[pane]
          ,	c	= _c[pane]
          ,	doFX, isShowing, isHiding, wasSliding;

        // QUEUE in case another action/animation is in progress
        $N.queue(function( queueNext ){

          if ( !$P
            ||	(!o.closable && !s.isShowing && !s.isHiding)	// invalid request // (!o.resizable && !o.closable) ???
            ||	(!force && s.isClosed && !s.isShowing)			// already closed
          ) return queueNext();

          // onclose_start callback - will CANCEL hide if returns false
          // SKIP if just 'showing' a hidden pane as 'closed'
          var abort = !s.isShowing && false === _runCallbacks("onclose_start", pane);

          // transfer logic vars to temp vars
          isShowing	= s.isShowing;
          isHiding	= s.isHiding;
          wasSliding	= s.isSliding;
          // now clear the logic vars (REQUIRED before aborting)
          delete s.isShowing;
          delete s.isHiding;

          if (abort) return queueNext();

          doFX		= !noAnimation && !s.isClosed && (o.fxName_close != "none");
          s.isMoving	= true;
          s.isClosed	= true;
          s.isVisible	= false;
          // update isHidden BEFORE sizing panes
          if (isHiding) s.isHidden = true;
          else if (isShowing) s.isHidden = false;

          if (s.isSliding) // pane is being closed, so UNBIND trigger events
            bindStopSlidingEvents(pane, false); // will set isSliding=false
          else // resize panes adjacent to this one
            sizeMidPanes(_c[pane].dir === "horz" ? "" : "center", false); // false = NOT skipCallback

          // if this pane has a resizer bar, move it NOW - before animation
          setAsClosed(pane);

          // CLOSE THE PANE
          if (doFX) { // animate the close
            lockPaneForFX(pane, true);	// need to set left/top so animation will work
            $P.hide( o.fxName_close, o.fxSettings_close, o.fxSpeed_close, function () {
              lockPaneForFX(pane, false); // undo
              if (s.isClosed) close_2();
              queueNext();
            });
          }
          else { // hide the pane without animation
            _hidePane(pane);
            close_2();
            queueNext();
          };
        });

        // SUBROUTINE
        function close_2 () {
          s.isMoving	= false;
          bindStartSlidingEvents(pane, true); // will enable if o.slidable = true

          // if opposite-pane was autoClosed, see if it can be autoOpened now
          var altPane = _c.oppositeEdge[pane];
          if (state[ altPane ].noRoom) {
            setSizeLimits( altPane );
            makePaneFit( altPane );
          }

          if (!skipCallback && (state.initialized || o.triggerEventsOnLoad)) {
            // onclose callback - UNLESS just 'showing' a hidden pane as 'closed'
            if (!isShowing)	_runCallbacks("onclose_end", pane);
            // onhide OR onshow callback
            if (isShowing)	_runCallbacks("onshow_end", pane);
            if (isHiding)	_runCallbacks("onhide_end", pane);
          }
        }
      }

      /**
       * @param {string}	pane	The pane just closed, ie: north, south, east, or west
       */
      ,	setAsClosed = function (pane) {
        if (!$Rs[pane]) return; // handles not initialized yet!
        var
          $P		= $Ps[pane]
          ,	$R		= $Rs[pane]
          ,	$T		= $Ts[pane]
          ,	o		= options[pane]
          ,	s		= state[pane]
          ,	side	= _c[pane].side
          ,	rClass	= o.resizerClass
          ,	tClass	= o.togglerClass
          ,	_pane	= "-"+ pane // used for classNames
          ,	_open	= "-open"
          ,	_sliding= "-sliding"
          ,	_closed	= "-closed"
        ;
        $R
          .css(side, sC.inset[side]) // move the resizer
          .removeClass( rClass+_open +" "+ rClass+_pane+_open )
          .removeClass( rClass+_sliding +" "+ rClass+_pane+_sliding )
          .addClass( rClass+_closed +" "+ rClass+_pane+_closed )
        ;
        // handle already-hidden panes in case called by swap() or a similar method
        if (s.isHidden) $R.hide(); // hide resizer-bar

        // DISABLE 'resizing' when closed - do this BEFORE bindStartSlidingEvents?
        if (o.resizable && $.layout.plugins.draggable)
          $R
            .draggable("disable")
            .removeClass("ui-state-disabled") // do NOT apply disabled styling - not suitable here
            .css("cursor", "default")
            .attr("title","")
          ;

        // if pane has a toggler button, adjust that too
        if ($T) {
          $T
            .removeClass( tClass+_open +" "+ tClass+_pane+_open )
            .addClass( tClass+_closed +" "+ tClass+_pane+_closed )
            .attr("title", o.tips.Open) // may be blank
          ;
          // toggler-content - if exists
          $T.children(".content-open").hide();
          $T.children(".content-closed").css("display","block");
        }

        // sync any 'pin buttons'
        syncPinBtns(pane, false);

        if (state.initialized) {
          // resize 'length' and position togglers for adjacent panes
          sizeHandles();
        }
      }

      /**
       * Open the specified pane (animation optional), and resize all other panes as needed
       *
       * @param {(string|Object)}	evt_or_pane			The pane being opened, ie: north, south, east, or west
       * @param {boolean=}			[slide=false]
       * @param {boolean=}			[noAnimation=false]
       * @param {boolean=}			[noAlert=false]
       */
      ,	open = function (evt_or_pane, slide, noAnimation, noAlert) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$P	= $Ps[pane]
          ,	$R	= $Rs[pane]
          ,	$T	= $Ts[pane]
          ,	o	= options[pane]
          ,	s	= state[pane]
          ,	c	= _c[pane]
          ,	doFX, isShowing
        ;
        if (pane === "center") return; // validate
        // QUEUE in case another action/animation is in progress
        $N.queue(function( queueNext ){

          if ( !$P
            ||	(!o.resizable && !o.closable && !s.isShowing)	// invalid request
            ||	(s.isVisible && !s.isSliding)					// already open
          ) return queueNext();

          // pane can ALSO be unhidden by just calling show(), so handle this scenario
          if (s.isHidden && !s.isShowing) {
            queueNext(); // call before show() because it needs the queue free
            show(pane, true);
            return;
          }

          if (s.autoResize && s.size != o.size) // resize pane to original size set in options
            sizePane(pane, o.size, true, true, true); // true=skipCallback/noAnimation/forceResize
          else
          // make sure there is enough space available to open the pane
            setSizeLimits(pane, slide);

          // onopen_start callback - will CANCEL open if returns false
          var cbReturn = _runCallbacks("onopen_start", pane);

          if (cbReturn === "abort")
            return queueNext();

          // update pane-state again in case options were changed in onopen_start
          if (cbReturn !== "NC") // NC = "No Callback"
            setSizeLimits(pane, slide);

          if (s.minSize > s.maxSize) { // INSUFFICIENT ROOM FOR PANE TO OPEN!
            syncPinBtns(pane, false); // make sure pin-buttons are reset
            if (!noAlert && o.tips.noRoomToOpen)
              alert(o.tips.noRoomToOpen);
            return queueNext(); // ABORT
          }

          if (slide) // START Sliding - will set isSliding=true
            bindStopSlidingEvents(pane, true); // BIND trigger events to close sliding-pane
          else if (s.isSliding) // PIN PANE (stop sliding) - open pane 'normally' instead
            bindStopSlidingEvents(pane, false); // UNBIND trigger events - will set isSliding=false
          else if (o.slidable)
            bindStartSlidingEvents(pane, false); // UNBIND trigger events

          s.noRoom = false; // will be reset by makePaneFit if 'noRoom'
          makePaneFit(pane);

          // transfer logic var to temp var
          isShowing = s.isShowing;
          // now clear the logic var
          delete s.isShowing;

          doFX		= !noAnimation && s.isClosed && (o.fxName_open != "none");
          s.isMoving	= true;
          s.isVisible	= true;
          s.isClosed	= false;
          // update isHidden BEFORE sizing panes - WHY??? Old?
          if (isShowing) s.isHidden = false;

          if (doFX) { // ANIMATE
            // mask adjacent panes with objects
            lockPaneForFX(pane, true);	// need to set left/top so animation will work
            $P.show( o.fxName_open, o.fxSettings_open, o.fxSpeed_open, function() {
              lockPaneForFX(pane, false); // undo
              if (s.isVisible) open_2(); // continue
              queueNext();
            });
          }
          else { // no animation
            _showPane(pane);// just show pane and...
            open_2();		// continue
            queueNext();
          };
        });

        // SUBROUTINE
        function open_2 () {
          s.isMoving	= false;

          // cure iframe display issues
          _fixIframe(pane);

          // NOTE: if isSliding, then other panes are NOT 'resized'
          if (!s.isSliding) { // resize all panes adjacent to this one
            sizeMidPanes(_c[pane].dir=="vert" ? "center" : "", false); // false = NOT skipCallback
          }

          // set classes, position handles and execute callbacks...
          setAsOpen(pane);
        };

      }

      /**
       * @param {string}	pane		The pane just opened, ie: north, south, east, or west
       * @param {boolean=}	[skipCallback=false]
       */
      ,	setAsOpen = function (pane, skipCallback) {
        var
          $P		= $Ps[pane]
          ,	$R		= $Rs[pane]
          ,	$T		= $Ts[pane]
          ,	o		= options[pane]
          ,	s		= state[pane]
          ,	side	= _c[pane].side
          ,	rClass	= o.resizerClass
          ,	tClass	= o.togglerClass
          ,	_pane	= "-"+ pane // used for classNames
          ,	_open	= "-open"
          ,	_closed	= "-closed"
          ,	_sliding= "-sliding"
        ;
        $R
          .css(side, sC.inset[side] + getPaneSize(pane)) // move the resizer
          .removeClass( rClass+_closed +" "+ rClass+_pane+_closed )
          .addClass( rClass+_open +" "+ rClass+_pane+_open )
        ;
        if (s.isSliding)
          $R.addClass( rClass+_sliding +" "+ rClass+_pane+_sliding )
        else // in case 'was sliding'
          $R.removeClass( rClass+_sliding +" "+ rClass+_pane+_sliding )

        removeHover( 0, $R ); // remove hover classes
        if (o.resizable && $.layout.plugins.draggable)
          $R	.draggable("enable")
            .css("cursor", o.resizerCursor)
            .attr("title", o.tips.Resize);
        else if (!s.isSliding)
          $R.css("cursor", "default"); // n-resize, s-resize, etc

        // if pane also has a toggler button, adjust that too
        if ($T) {
          $T	.removeClass( tClass+_closed +" "+ tClass+_pane+_closed )
            .addClass( tClass+_open +" "+ tClass+_pane+_open )
            .attr("title", o.tips.Close); // may be blank
          removeHover( 0, $T ); // remove hover classes
          // toggler-content - if exists
          $T.children(".content-closed").hide();
          $T.children(".content-open").css("display","block");
        }

        // sync any 'pin buttons'
        syncPinBtns(pane, !s.isSliding);

        // update pane-state dimensions - BEFORE resizing content
        $.extend(s, elDims($P));

        if (state.initialized) {
          // resize resizer & toggler sizes for all panes
          sizeHandles();
          // resize content every time pane opens - to be sure
          sizeContent(pane, true); // true = remeasure headers/footers, even if 'pane.isMoving'
        }

        if (!skipCallback && (state.initialized || o.triggerEventsOnLoad) && $P.is(":visible")) {
          // onopen callback
          _runCallbacks("onopen_end", pane);
          // onshow callback - TODO: should this be here?
          if (s.isShowing) _runCallbacks("onshow_end", pane);

          // ALSO call onresize because layout-size *may* have changed while pane was closed
          if (state.initialized)
            _runCallbacks("onresize_end", pane);
        }

        // TODO: Somehow sizePane("north") is being called after this point???
      }


      /**
       * slideOpen / slideClose / slideToggle
       *
       * Pass-though methods for sliding
       */
      ,	slideOpen = function (evt_or_pane) {
        if (!isInitialized()) return;
        var	evt		= evtObj(evt_or_pane)
          ,	pane	= evtPane.call(this, evt_or_pane)
          ,	s		= state[pane]
          ,	delay	= options[pane].slideDelay_open
        ;
        if (pane === "center") return; // validate
        // prevent event from triggering on NEW resizer binding created below
        if (evt) evt.stopImmediatePropagation();

        if (s.isClosed && evt && evt.type === "mouseenter" && delay > 0)
        // trigger = mouseenter - use a delay
          timer.set(pane+"_openSlider", open_NOW, delay);
        else
          open_NOW(); // will unbind events if is already open

        /**
         * SUBROUTINE for timed open
         */
        function open_NOW () {
          if (!s.isClosed) // skip if no longer closed!
            bindStopSlidingEvents(pane, true); // BIND trigger events to close sliding-pane
          else if (!s.isMoving)
            open(pane, true); // true = slide - open() will handle binding
        };
      }

      ,	slideClose = function (evt_or_pane) {
        if (!isInitialized()) return;
        var	evt		= evtObj(evt_or_pane)
          ,	pane	= evtPane.call(this, evt_or_pane)
          ,	o		= options[pane]
          ,	s		= state[pane]
          ,	delay	= s.isMoving ? 1000 : 300 // MINIMUM delay - option may override
        ;
        if (pane === "center") return; // validate
        if (s.isClosed || s.isResizing)
          return; // skip if already closed OR in process of resizing
        else if (o.slideTrigger_close === "click")
          close_NOW(); // close immediately onClick
        else if (o.preventQuickSlideClose && s.isMoving)
          return; // handle Chrome quick-close on slide-open
        else if (o.preventPrematureSlideClose && evt && $.layout.isMouseOverElem(evt, $Ps[pane]))
          return; // handle incorrect mouseleave trigger, like when over a SELECT-list in IE
        else if (evt) // trigger = mouseleave - use a delay
        // 1 sec delay if 'opening', else .3 sec
          timer.set(pane+"_closeSlider", close_NOW, max(o.slideDelay_close, delay));
        else // called programically
          close_NOW();

        /**
         * SUBROUTINE for timed close
         */
        function close_NOW () {
          if (s.isClosed) // skip 'close' if already closed!
            bindStopSlidingEvents(pane, false); // UNBIND trigger events - TODO: is this needed here?
          else if (!s.isMoving)
            close(pane); // close will handle unbinding
        };
      }

      /**
       * @param {(string|Object)}	evt_or_pane		The pane being opened, ie: north, south, east, or west
       */
      ,	slideToggle = function (evt_or_pane) {
        var pane = evtPane.call(this, evt_or_pane);
        toggle(pane, true);
      }


      /**
       * Must set left/top on East/South panes so animation will work properly
       *
       * @param {string}	pane	The pane to lock, 'east' or 'south' - any other is ignored!
       * @param {boolean}	doLock  true = set left/top, false = remove
       */
      ,	lockPaneForFX = function (pane, doLock) {
        var $P	= $Ps[pane]
          ,	s	= state[pane]
          ,	o	= options[pane]
          ,	z	= options.zIndexes
        ;
        if (doLock) {
          showMasks( pane, { animation: true, objectsOnly: true });
          $P.css({ zIndex: z.pane_animate }); // overlay all elements during animation
          if (pane=="south")
            $P.css({ top: sC.inset.top + sC.innerHeight - $P.outerHeight() });
          else if (pane=="east")
            $P.css({ left: sC.inset.left + sC.innerWidth - $P.outerWidth() });
        }
        else { // animation DONE - RESET CSS
          hideMasks();
          $P.css({ zIndex: (s.isSliding ? z.pane_sliding : z.pane_normal) });
          if (pane=="south")
            $P.css({ top: "auto" });
          // if pane is positioned 'off-screen', then DO NOT screw with it!
          else if (pane=="east" && !$P.css("left").match(/\-99999/))
            $P.css({ left: "auto" });
          // fix anti-aliasing in IE - only needed for animations that change opacity
          if (browser.msie && o.fxOpacityFix && o.fxName_open != "slide" && $P.css("filter") && $P.css("opacity") == 1)
            $P[0].style.removeAttribute('filter');
        }
      }


      /**
       * Toggle sliding functionality of a specific pane on/off by adding removing 'slide open' trigger
       *
       * @see  open(), close()
       * @param {string}	pane	The pane to enable/disable, 'north', 'south', etc.
       * @param {boolean}	enable	Enable or Disable sliding?
       */
      ,	bindStartSlidingEvents = function (pane, enable) {
        var o		= options[pane]
          ,	$P		= $Ps[pane]
          ,	$R		= $Rs[pane]
          ,	evtName	= o.slideTrigger_open.toLowerCase()
        ;
        if (!$R || (enable && !o.slidable)) return;

        // make sure we have a valid event
        if (evtName.match(/mouseover/))
          evtName = o.slideTrigger_open = "mouseenter";
        else if (!evtName.match(/(click|dblclick|mouseenter)/))
          evtName = o.slideTrigger_open = "click";

        // must remove double-click-toggle when using dblclick-slide
        if (o.resizerDblClickToggle && evtName.match(/click/)) {
          $R[enable ? "unbind" : "bind"]('dblclick.'+ sID, toggle)
        }

        $R
          // add or remove event
          [enable ? "bind" : "unbind"](evtName +'.'+ sID, slideOpen)
        // set the appropriate cursor & title/tip
          .css("cursor", enable ? o.sliderCursor : "default")
          .attr("title", enable ? o.tips.Slide : "")
        ;
      }

      /**
       * Add or remove 'mouseleave' events to 'slide close' when pane is 'sliding' open or closed
       * Also increases zIndex when pane is sliding open
       * See bindStartSlidingEvents for code to control 'slide open'
       *
       * @see  slideOpen(), slideClose()
       * @param {string}	pane	The pane to process, 'north', 'south', etc.
       * @param {boolean}	enable	Enable or Disable events?
       */
      ,	bindStopSlidingEvents = function (pane, enable) {
        var	o		= options[pane]
          ,	s		= state[pane]
          ,	c		= _c[pane]
          ,	z		= options.zIndexes
          ,	evtName	= o.slideTrigger_close.toLowerCase()
          ,	action	= (enable ? "bind" : "unbind")
          ,	$P		= $Ps[pane]
          ,	$R		= $Rs[pane]
        ;
        timer.clear(pane+"_closeSlider"); // just in case

        if (enable) {
          s.isSliding = true;
          state.panesSliding[pane] = true;
          // remove 'slideOpen' event from resizer
          // ALSO will raise the zIndex of the pane & resizer
          bindStartSlidingEvents(pane, false);
        }
        else {
          s.isSliding = false;
          delete state.panesSliding[pane];
        }

        // RE/SET zIndex - increases when pane is sliding-open, resets to normal when not
        $P.css("zIndex", enable ? z.pane_sliding : z.pane_normal);
        $R.css("zIndex", enable ? z.pane_sliding+2 : z.resizer_normal); // NOTE: mask = pane_sliding+1

        // make sure we have a valid event
        if (!evtName.match(/(click|mouseleave)/))
          evtName = o.slideTrigger_close = "mouseleave"; // also catches 'mouseout'

        // add/remove slide triggers
        $R[action](evtName, slideClose); // base event on resize
        // need extra events for mouseleave
        if (evtName === "mouseleave") {
          // also close on pane.mouseleave
          $P[action]("mouseleave."+ sID, slideClose);
          // cancel timer when mouse moves between 'pane' and 'resizer'
          $R[action]("mouseenter."+ sID, cancelMouseOut);
          $P[action]("mouseenter."+ sID, cancelMouseOut);
        }

        if (!enable)
          timer.clear(pane+"_closeSlider");
        else if (evtName === "click" && !o.resizable) {
          // IF pane is not resizable (which already has a cursor and tip)
          // then set the a cursor & title/tip on resizer when sliding
          $R.css("cursor", enable ? o.sliderCursor : "default");
          $R.attr("title", enable ? o.tips.Close : ""); // use Toggler-tip, eg: "Close Pane"
        }

        // SUBROUTINE for mouseleave timer clearing
        function cancelMouseOut (evt) {
          timer.clear(pane+"_closeSlider");
          evt.stopPropagation();
        }
      }


      /**
       * Hides/closes a pane if there is insufficient room - reverses this when there is room again
       * MUST have already called setSizeLimits() before calling this method
       *
       * @param {string}	pane					The pane being resized
       * @param {boolean=}	[isOpening=false]		Called from onOpen?
       * @param {boolean=}	[skipCallback=false]	Should the onresize callback be run?
       * @param {boolean=}	[force=false]
       */
      ,	makePaneFit = function (pane, isOpening, skipCallback, force) {
        var	o	= options[pane]
          ,	s	= state[pane]
          ,	c	= _c[pane]
          ,	$P	= $Ps[pane]
          ,	$R	= $Rs[pane]
          ,	isSidePane 	= c.dir==="vert"
          ,	hasRoom		= false
        ;
        // special handling for center & east/west panes
        if (pane === "center" || (isSidePane && s.noVerticalRoom)) {
          // see if there is enough room to display the pane
          // ERROR: hasRoom = s.minHeight <= s.maxHeight && (isSidePane || s.minWidth <= s.maxWidth);
          hasRoom = (s.maxHeight >= 0);
          if (hasRoom && s.noRoom) { // previously hidden due to noRoom, so show now
            _showPane(pane);
            if ($R) $R.show();
            s.isVisible = true;
            s.noRoom = false;
            if (isSidePane) s.noVerticalRoom = false;
            _fixIframe(pane);
          }
          else if (!hasRoom && !s.noRoom) { // not currently hidden, so hide now
            _hidePane(pane);
            if ($R) $R.hide();
            s.isVisible = false;
            s.noRoom = true;
          }
        }

        // see if there is enough room to fit the border-pane
        if (pane === "center") {
          // ignore center in this block
        }
        else if (s.minSize <= s.maxSize) { // pane CAN fit
          hasRoom = true;
          if (s.size > s.maxSize) // pane is too big - shrink it
            sizePane(pane, s.maxSize, skipCallback, true, force); // true = noAnimation
          else if (s.size < s.minSize) // pane is too small - enlarge it
            sizePane(pane, s.minSize, skipCallback, true, force); // true = noAnimation
          // need s.isVisible because new pseudoClose method keeps pane visible, but off-screen
          else if ($R && s.isVisible && $P.is(":visible")) {
            // make sure resizer-bar is positioned correctly
            // handles situation where nested layout was 'hidden' when initialized
            var	pos = s.size + sC.inset[c.side];
            if ($.layout.cssNum( $R, c.side ) != pos) $R.css( c.side, pos );
          }

          // if was previously hidden due to noRoom, then RESET because NOW there is room
          if (s.noRoom) {
            // s.noRoom state will be set by open or show
            if (s.wasOpen && o.closable) {
              if (o.autoReopen)
                open(pane, false, true, true); // true = noAnimation, true = noAlert
              else // leave the pane closed, so just update state
                s.noRoom = false;
            }
            else
              show(pane, s.wasOpen, true, true); // true = noAnimation, true = noAlert
          }
        }
        else { // !hasRoom - pane CANNOT fit
          if (!s.noRoom) { // pane not set as noRoom yet, so hide or close it now...
            s.noRoom = true; // update state
            s.wasOpen = !s.isClosed && !s.isSliding;
            if (s.isClosed){} // SKIP
            else if (o.closable) // 'close' if possible
              close(pane, true, true); // true = force, true = noAnimation
            else // 'hide' pane if cannot just be closed
              hide(pane, true); // true = noAnimation
          }
        }
      }


      /**
       * manualSizePane is an exposed flow-through method allowing extra code when pane is 'manually resized'
       *
       * @param {(string|Object)}	evt_or_pane				The pane being resized
       * @param {number}			size					The *desired* new size for this pane - will be validated
       * @param {boolean=}			[skipCallback=false]	Should the onresize callback be run?
       * @param {boolean=}			[noAnimation=false]
       * @param {boolean=}			[force=false]			Force resizing even if does not seem necessary
       */
      ,	manualSizePane = function (evt_or_pane, size, skipCallback, noAnimation, force) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	o	= options[pane]
          ,	s	= state[pane]
          //	if resizing callbacks have been delayed and resizing is now DONE, force resizing to complete...
          ,	forceResize = force || (o.livePaneResizing && !s.isResizing)
        ;
        if (pane === "center") return; // validate
        // ANY call to manualSizePane disables autoResize - ie, percentage sizing
        s.autoResize = false;
        // flow-through...
        sizePane(pane, size, skipCallback, noAnimation, forceResize); // will animate resize if option enabled
      }

      /**
       * sizePane is called only by internal methods whenever a pane needs to be resized
       *
       * @param {(string|Object)}	evt_or_pane				The pane being resized
       * @param {number}			size					The *desired* new size for this pane - will be validated
       * @param {boolean=}			[skipCallback=false]	Should the onresize callback be run?
       * @param {boolean=}			[noAnimation=false]
       * @param {boolean=}			[force=false]			Force resizing even if does not seem necessary
       */
      ,	sizePane = function (evt_or_pane, size, skipCallback, noAnimation, force) {
        if (!isInitialized()) return;
        var	pane	= evtPane.call(this, evt_or_pane) // probably NEVER called from event?
          ,	o		= options[pane]
          ,	s		= state[pane]
          ,	$P		= $Ps[pane]
          ,	$R		= $Rs[pane]
          ,	side	= _c[pane].side
          ,	dimName	= _c[pane].sizeType.toLowerCase()
          ,	skipResizeWhileDragging = s.isResizing && !o.triggerEventsDuringLiveResize
          ,	doFX	= noAnimation !== true && o.animatePaneSizing
          ,	oldSize, newSize
        ;
        if (pane === "center") return; // validate
        // QUEUE in case another action/animation is in progress
        $N.queue(function( queueNext ){
          // calculate 'current' min/max sizes
          setSizeLimits(pane); // update pane-state
          oldSize = s.size;
          size = _parseSize(pane, size); // handle percentages & auto
          size = max(size, _parseSize(pane, o.minSize));
          size = min(size, s.maxSize);
          if (size < s.minSize) { // not enough room for pane!
            queueNext(); // call before makePaneFit() because it needs the queue free
            makePaneFit(pane, false, skipCallback);	// will hide or close pane
            return;
          }

          // IF newSize is same as oldSize, then nothing to do - abort
          if (!force && size === oldSize)
            return queueNext();

          s.newSize = size;

          // onresize_start callback CANNOT cancel resizing because this would break the layout!
          if (!skipCallback && state.initialized && s.isVisible)
            _runCallbacks("onresize_start", pane);

          // resize the pane, and make sure its visible
          newSize = cssSize(pane, size);

          if (doFX && $P.is(":visible")) { // ANIMATE
            var fx		= $.layout.effects.size[pane] || $.layout.effects.size.all
              ,	easing	= o.fxSettings_size.easing || fx.easing
              ,	z		= options.zIndexes
              ,	props	= {};
            props[ dimName ] = newSize +'px';
            s.isMoving = true;
            // overlay all elements during animation
            $P.css({ zIndex: z.pane_animate })
              .show().animate( props, o.fxSpeed_size, easing, function(){
              // reset zIndex after animation
              $P.css({ zIndex: (s.isSliding ? z.pane_sliding : z.pane_normal) });
              s.isMoving = false;
              delete s.newSize;
              sizePane_2(); // continue
              queueNext();
            });
          }
          else { // no animation
            $P.css( dimName, newSize );	// resize pane
            delete s.newSize;
            // if pane is visible, then
            if ($P.is(":visible"))
              sizePane_2(); // continue
            else {
              // pane is NOT VISIBLE, so just update state data...
              // when pane is *next opened*, it will have the new size
              s.size = size;				// update state.size
              //$.extend(s, elDims($P));	// update state dimensions - CANNOT do this when not visible!				}
            }
            queueNext();
          };

        });

        // SUBROUTINE
        function sizePane_2 () {
          /*	Panes are sometimes not sized precisely in some browsers!?
           *	This code will resize the pane up to 3 times to nudge the pane to the correct size
           */
          var	actual	= dimName==='width' ? $P.outerWidth() : $P.outerHeight()
            ,	tries	= [{
              pane:		pane
              ,	count:		1
              ,	target:		size
              ,	actual:		actual
              ,	correct:	(size === actual)
              ,	attempt:	size
              ,	cssSize:	newSize
            }]
            ,	lastTry = tries[0]
            ,	thisTry	= {}
            ,	msg		= 'Inaccurate size after resizing the '+ pane +'-pane.'
          ;
          while ( !lastTry.correct ) {
            thisTry = { pane: pane, count: lastTry.count+1, target: size };

            if (lastTry.actual > size)
              thisTry.attempt = max(0, lastTry.attempt - (lastTry.actual - size));
            else // lastTry.actual < size
              thisTry.attempt = max(0, lastTry.attempt + (size - lastTry.actual));

            thisTry.cssSize = cssSize(pane, thisTry.attempt);
            $P.css( dimName, thisTry.cssSize );

            thisTry.actual	= dimName=='width' ? $P.outerWidth() : $P.outerHeight();
            thisTry.correct	= (size === thisTry.actual);

            // log attempts and alert the user of this *non-fatal error* (if showDebugMessages)
            if ( tries.length === 1) {
              _log(msg, false, true);
              _log(lastTry, false, true);
            }
            _log(thisTry, false, true);
            // after 4 tries, is as close as its gonna get!
            if (tries.length > 3) break;

            tries.push( thisTry );
            lastTry = tries[ tries.length - 1 ];
          }
          // END TESTING CODE

          // update pane-state dimensions
          s.size	= size;
          $.extend(s, elDims($P));

          if (s.isVisible && $P.is(":visible")) {
            // reposition the resizer-bar
            if ($R) $R.css( side, size + sC.inset[side] );
            // resize the content-div
            sizeContent(pane);
          }

          if (!skipCallback && !skipResizeWhileDragging && state.initialized && s.isVisible)
            _runCallbacks("onresize_end", pane);

          // resize all the adjacent panes, and adjust their toggler buttons
          // when skipCallback passed, it means the controlling method will handle 'other panes'
          if (!skipCallback) {
            // also no callback if live-resize is in progress and NOT triggerEventsDuringLiveResize
            if (!s.isSliding) sizeMidPanes(_c[pane].dir=="horz" ? "" : "center", skipResizeWhileDragging, force);
            sizeHandles();
          }

          // if opposite-pane was autoClosed, see if it can be autoOpened now
          var altPane = _c.oppositeEdge[pane];
          if (size < oldSize && state[ altPane ].noRoom) {
            setSizeLimits( altPane );
            makePaneFit( altPane, false, skipCallback );
          }

          // DEBUG - ALERT user/developer so they know there was a sizing problem
          if (tries.length > 1)
            _log(msg +'\nSee the Error Console for details.', true, true);
        }
      }

      /**
       * @see  initPanes(), sizePane(), 	resizeAll(), open(), close(), hide()
       * @param {(Array.<string>|string)}	panes					The pane(s) being resized, comma-delmited string
       * @param {boolean=}					[skipCallback=false]	Should the onresize callback be run?
       * @param {boolean=}					[force=false]
       */
      ,	sizeMidPanes = function (panes, skipCallback, force) {
        panes = (panes ? panes : "east,west,center").split(",");

        $.each(panes, function (i, pane) {
          if (!$Ps[pane]) return; // NO PANE - skip
          var
            o		= options[pane]
            ,	s		= state[pane]
            ,	$P		= $Ps[pane]
            ,	$R		= $Rs[pane]
            ,	isCenter= (pane=="center")
            ,	hasRoom	= true
            ,	CSS		= {}
            //	if pane is not visible, show it invisibly NOW rather than for *each call* in this script
            ,	visCSS	= $.layout.showInvisibly($P)

            ,	newCenter	= calcNewCenterPaneDims()
          ;

          // update pane-state dimensions
          $.extend(s, elDims($P));

          if (pane === "center") {
            if (!force && s.isVisible && newCenter.width === s.outerWidth && newCenter.height === s.outerHeight) {
              $P.css(visCSS);
              return true; // SKIP - pane already the correct size
            }
            // set state for makePaneFit() logic
            $.extend(s, cssMinDims(pane), {
              maxWidth:	newCenter.width
              ,	maxHeight:	newCenter.height
            });
            CSS = newCenter;
            s.newWidth	= CSS.width;
            s.newHeight	= CSS.height;
            // convert OUTER width/height to CSS width/height
            CSS.width	= cssW($P, CSS.width);
            // NEW - allow pane to extend 'below' visible area rather than hide it
            CSS.height	= cssH($P, CSS.height);
            hasRoom		= CSS.width >= 0 && CSS.height >= 0; // height >= 0 = ALWAYS TRUE NOW

            // during layout init, try to shrink east/west panes to make room for center
            if (!state.initialized && o.minWidth > newCenter.width) {
              var
                reqPx	= o.minWidth - s.outerWidth
                ,	minE	= options.east.minSize || 0
                ,	minW	= options.west.minSize || 0
                ,	sizeE	= state.east.size
                ,	sizeW	= state.west.size
                ,	newE	= sizeE
                ,	newW	= sizeW
              ;
              if (reqPx > 0 && state.east.isVisible && sizeE > minE) {
                newE = max( sizeE-minE, sizeE-reqPx );
                reqPx -= sizeE-newE;
              }
              if (reqPx > 0 && state.west.isVisible && sizeW > minW) {
                newW = max( sizeW-minW, sizeW-reqPx );
                reqPx -= sizeW-newW;
              }
              // IF we found enough extra space, then resize the border panes as calculated
              if (reqPx === 0) {
                if (sizeE && sizeE != minE)
                  sizePane('east', newE, true, true, force); // true = skipCallback/noAnimation - initPanes will handle when done
                if (sizeW && sizeW != minW)
                  sizePane('west', newW, true, true, force); // true = skipCallback/noAnimation
                // now start over!
                sizeMidPanes('center', skipCallback, force);
                $P.css(visCSS);
                return; // abort this loop
              }
            }
          }
          else { // for east and west, set only the height, which is same as center height
            // set state.min/maxWidth/Height for makePaneFit() logic
            if (s.isVisible && !s.noVerticalRoom)
              $.extend(s, elDims($P), cssMinDims(pane))
            if (!force && !s.noVerticalRoom && newCenter.height === s.outerHeight) {
              $P.css(visCSS);
              return true; // SKIP - pane already the correct size
            }
            // east/west have same top, bottom & height as center
            CSS.top		= newCenter.top;
            CSS.bottom	= newCenter.bottom;
            s.newSize	= newCenter.height
            // NEW - allow pane to extend 'below' visible area rather than hide it
            CSS.height	= cssH($P, newCenter.height);
            s.maxHeight	= CSS.height;
            hasRoom		= (s.maxHeight >= 0); // ALWAYS TRUE NOW
            if (!hasRoom) s.noVerticalRoom = true; // makePaneFit() logic
          }

          if (hasRoom) {
            // resizeAll passes skipCallback because it triggers callbacks after ALL panes are resized
            if (!skipCallback && state.initialized)
              _runCallbacks("onresize_start", pane);

            $P.css(CSS); // apply the CSS to pane
            if (pane !== "center")
              sizeHandles(pane); // also update resizer length
            if (s.noRoom && !s.isClosed && !s.isHidden)
              makePaneFit(pane); // will re-open/show auto-closed/hidden pane
            if (s.isVisible) {
              $.extend(s, elDims($P)); // update pane dimensions
              if (state.initialized) sizeContent(pane); // also resize the contents, if exists
            }
          }
          else if (!s.noRoom && s.isVisible) // no room for pane
            makePaneFit(pane); // will hide or close pane

          // reset visibility, if necessary
          $P.css(visCSS);

          delete s.newSize;
          delete s.newWidth;
          delete s.newHeight;

          if (!s.isVisible)
            return true; // DONE - next pane

          /*
           * Extra CSS for IE6 or IE7 in Quirks-mode - add 'width' to NORTH/SOUTH panes
           * Normally these panes have only 'left' & 'right' positions so pane auto-sizes
           * ALSO required when pane is an IFRAME because will NOT default to 'full width'
           *	TODO: Can I use width:100% for a north/south iframe?
           *	TODO: Sounds like a job for $P.outerWidth( sC.innerWidth ) SETTER METHOD
           */
          if (pane === "center") { // finished processing midPanes
            var fix = browser.isIE6 || !browser.boxModel;
            if ($Ps.north && (fix || state.north.tagName=="IFRAME"))
              $Ps.north.css("width", cssW($Ps.north, sC.innerWidth));
            if ($Ps.south && (fix || state.south.tagName=="IFRAME"))
              $Ps.south.css("width", cssW($Ps.south, sC.innerWidth));
          }

          // resizeAll passes skipCallback because it triggers callbacks after ALL panes are resized
          if (!skipCallback && state.initialized)
            _runCallbacks("onresize_end", pane);
        });
      }


      /**
       * @see  window.onresize(), callbacks or custom code
       * @param {(Object|boolean)=}	evt_or_refresh	If 'true', then also reset pane-positioning
       */
      ,	resizeAll = function (evt_or_refresh) {
        var	oldW	= sC.innerWidth
          ,	oldH	= sC.innerHeight
        ;
        // stopPropagation if called by trigger("layoutdestroy") - use evtPane utility
        evtPane(evt_or_refresh);

        // cannot size layout when 'container' is hidden or collapsed
        if (!$N.is(":visible")) return;

        if (!state.initialized) {
          _initLayoutElements();
          return; // no need to resize since we just initialized!
        }

        if (evt_or_refresh === true && $.isPlainObject(options.outset)) {
          // update container CSS in case outset option has changed
          $N.css( options.outset );
        }
        // UPDATE container dimensions
        $.extend(sC, elDims( $N, options.inset ));
        if (!sC.outerHeight) return;

        // if 'true' passed, refresh pane & handle positioning too
        if (evt_or_refresh === true) {
          setPanePosition();
        }

        // onresizeall_start will CANCEL resizing if returns false
        // state.container has already been set, so user can access this info for calcuations
        if (false === _runCallbacks("onresizeall_start")) return false;

        var	// see if container is now 'smaller' than before
          shrunkH	= (sC.innerHeight < oldH)
          ,	shrunkW	= (sC.innerWidth < oldW)
          ,	$P, o, s
        ;
        // NOTE special order for sizing: S-N-E-W
        $.each(["south","north","east","west"], function (i, pane) {
          if (!$Ps[pane]) return; // no pane - SKIP
          o = options[pane];
          s = state[pane];
          if (s.autoResize && s.size != o.size) // resize pane to original size set in options
            sizePane(pane, o.size, true, true, true); // true=skipCallback/noAnimation/forceResize
          else {
            setSizeLimits(pane);
            makePaneFit(pane, false, true, true); // true=skipCallback/forceResize
          }
        });

        sizeMidPanes("", true, true); // true=skipCallback/forceResize
        sizeHandles(); // reposition the toggler elements

        // trigger all individual pane callbacks AFTER layout has finished resizing
        $.each(_c.allPanes, function (i, pane) {
          $P = $Ps[pane];
          if (!$P) return; // SKIP
          if (state[pane].isVisible) // undefined for non-existent panes
            _runCallbacks("onresize_end", pane); // callback - if exists
        });

        _runCallbacks("onresizeall_end");
        //_triggerLayoutEvent(pane, 'resizeall');
      }

      /**
       * Whenever a pane resizes or opens that has a nested layout, trigger resizeAll
       *
       * @param {(string|Object)}	evt_or_pane		The pane just resized or opened
       */
      ,	resizeChildren = function (evt_or_pane, skipRefresh) {
        var	pane = evtPane.call(this, evt_or_pane);

        if (!options[pane].resizeChildren) return;

        // ensure the pane-children are up-to-date
        if (!skipRefresh) refreshChildren( pane );
        var pC = children[pane];
        if ($.isPlainObject( pC )) {
          // resize one or more children
          $.each( pC, function (key, child) {
            if (!child.destroyed) child.resizeAll();
          });
        }
      }

      /**
       * IF pane has a content-div, then resize all elements inside pane to fit pane-height
       *
       * @param {(string|Object)}	evt_or_panes		The pane(s) being resized
       * @param {boolean=}			[remeasure=false]	Should the content (header/footer) be remeasured?
       */
      ,	sizeContent = function (evt_or_panes, remeasure) {
        if (!isInitialized()) return;

        var panes = evtPane.call(this, evt_or_panes);
        panes = panes ? panes.split(",") : _c.allPanes;

        $.each(panes, function (idx, pane) {
          var
            $P	= $Ps[pane]
            ,	$C	= $Cs[pane]
            ,	o	= options[pane]
            ,	s	= state[pane]
            ,	m	= s.content // m = measurements
          ;
          if (!$P || !$C || !$P.is(":visible")) return true; // NOT VISIBLE - skip

          // if content-element was REMOVED, update OR remove the pointer
          if (!$C.length) {
            initContent(pane, false);	// false = do NOT sizeContent() - already there!
            if (!$C) return;			// no replacement element found - pointer have been removed
          }

          // onsizecontent_start will CANCEL resizing if returns false
          if (false === _runCallbacks("onsizecontent_start", pane)) return;

          // skip re-measuring offsets if live-resizing
          if ((!s.isMoving && !s.isResizing) || o.liveContentResizing || remeasure || m.top == undefined) {
            _measure();
            // if any footers are below pane-bottom, they may not measure correctly,
            // so allow pane overflow and re-measure
            if (m.hiddenFooters > 0 && $P.css("overflow") === "hidden") {
              $P.css("overflow", "visible");
              _measure(); // remeasure while overflowing
              $P.css("overflow", "hidden");
            }
          }
          // NOTE: spaceAbove/Below *includes* the pane paddingTop/Bottom, but not pane.borders
          var newH = s.innerHeight - (m.spaceAbove - s.css.paddingTop) - (m.spaceBelow - s.css.paddingBottom);

          if (!$C.is(":visible") || m.height != newH) {
            // size the Content element to fit new pane-size - will autoHide if not enough room
            setOuterHeight($C, newH, true); // true=autoHide
            m.height = newH; // save new height
          };

          if (state.initialized)
            _runCallbacks("onsizecontent_end", pane);

          function _below ($E) {
            return max(s.css.paddingBottom, (parseInt($E.css("marginBottom"), 10) || 0));
          };

          function _measure () {
            var
              ignore	= options[pane].contentIgnoreSelector
              ,	$Fs		= $C.nextAll().not(".ui-layout-mask").not(ignore || ":lt(0)") // not :lt(0) = ALL
              ,	$Fs_vis	= $Fs.filter(':visible')
              ,	$F		= $Fs_vis.filter(':last')
            ;
            m = {
              top:			$C[0].offsetTop
              ,	height:			$C.outerHeight()
              ,	numFooters:		$Fs.length
              ,	hiddenFooters:	$Fs.length - $Fs_vis.length
              ,	spaceBelow:		0 // correct if no content footer ($E)
            }
            m.spaceAbove	= m.top; // just for state - not used in calc
            m.bottom		= m.top + m.height;
            if ($F.length)
            //spaceBelow = (LastFooter.top + LastFooter.height) [footerBottom] - Content.bottom + max(LastFooter.marginBottom, pane.paddingBotom)
              m.spaceBelow = ($F[0].offsetTop + $F.outerHeight()) - m.bottom + _below($F);
            else // no footer - check marginBottom on Content element itself
              m.spaceBelow = _below($C);
          };
        });
      }


      /**
       * Called every time a pane is opened, closed, or resized to slide the togglers to 'center' and adjust their length if necessary
       *
       * @see  initHandles(), open(), close(), resizeAll()
       * @param {(string|Object)=}		evt_or_panes	The pane(s) being resized
       */
      ,	sizeHandles = function (evt_or_panes) {
        var panes = evtPane.call(this, evt_or_panes)
        panes = panes ? panes.split(",") : _c.borderPanes;

        $.each(panes, function (i, pane) {
          var
            o	= options[pane]
            ,	s	= state[pane]
            ,	$P	= $Ps[pane]
            ,	$R	= $Rs[pane]
            ,	$T	= $Ts[pane]
            ,	$TC
          ;
          if (!$P || !$R) return;

          var
            dir			= _c[pane].dir
            ,	_state		= (s.isClosed ? "_closed" : "_open")
            ,	spacing		= o["spacing"+ _state]
            ,	togAlign	= o["togglerAlign"+ _state]
            ,	togLen		= o["togglerLength"+ _state]
            ,	paneLen
            ,	left
            ,	offset
            ,	CSS = {}
          ;

          if (spacing === 0) {
            $R.hide();
            return;
          }
          else if (!s.noRoom && !s.isHidden) // skip if resizer was hidden for any reason
            $R.show(); // in case was previously hidden

          // Resizer Bar is ALWAYS same width/height of pane it is attached to
          if (dir === "horz") { // north/south
            //paneLen = $P.outerWidth(); // s.outerWidth ||
            paneLen = sC.innerWidth; // handle offscreen-panes
            s.resizerLength = paneLen;
            left = $.layout.cssNum($P, "left")
            $R.css({
              width:	cssW($R, paneLen) // account for borders & padding
              ,	height:	cssH($R, spacing) // ditto
              ,	left:	left > -9999 ? left : sC.inset.left // handle offscreen-panes
            });
          }
          else { // east/west
            paneLen = $P.outerHeight(); // s.outerHeight ||
            s.resizerLength = paneLen;
            $R.css({
              height:	cssH($R, paneLen) // account for borders & padding
              ,	width:	cssW($R, spacing) // ditto
              ,	top:	sC.inset.top + getPaneSize("north", true) // TODO: what if no North pane?
              //,	top:	$.layout.cssNum($Ps["center"], "top")
            });
          }

          // remove hover classes
          removeHover( o, $R );

          if ($T) {
            if (togLen === 0 || (s.isSliding && o.hideTogglerOnSlide)) {
              $T.hide(); // always HIDE the toggler when 'sliding'
              return;
            }
            else
              $T.show(); // in case was previously hidden

            if (!(togLen > 0) || togLen === "100%" || togLen > paneLen) {
              togLen = paneLen;
              offset = 0;
            }
            else { // calculate 'offset' based on options.PANE.togglerAlign_open/closed
              if (isStr(togAlign)) {
                switch (togAlign) {
                  case "top":
                  case "left":	offset = 0;
                    break;
                  case "bottom":
                  case "right":	offset = paneLen - togLen;
                    break;
                  case "middle":
                  case "center":
                  default:		offset = round((paneLen - togLen) / 2); // 'default' catches typos
                }
              }
              else { // togAlign = number
                var x = parseInt(togAlign, 10); //
                if (togAlign >= 0) offset = x;
                else offset = paneLen - togLen + x; // NOTE: x is negative!
              }
            }

            if (dir === "horz") { // north/south
              var width = cssW($T, togLen);
              $T.css({
                width:	width  // account for borders & padding
                ,	height:	cssH($T, spacing) // ditto
                ,	left:	offset // TODO: VERIFY that toggler  positions correctly for ALL values
                ,	top:	0
              });
              // CENTER the toggler content SPAN
              $T.children(".content").each(function(){
                $TC = $(this);
                $TC.css("marginLeft", round((width-$TC.outerWidth())/2)); // could be negative
              });
            }
            else { // east/west
              var height = cssH($T, togLen);
              $T.css({
                height:	height // account for borders & padding
                ,	width:	cssW($T, spacing) // ditto
                ,	top:	offset // POSITION the toggler
                ,	left:	0
              });
              // CENTER the toggler content SPAN
              $T.children(".content").each(function(){
                $TC = $(this);
                $TC.css("marginTop", round((height-$TC.outerHeight())/2)); // could be negative
              });
            }

            // remove ALL hover classes
            removeHover( 0, $T );
          }

          // DONE measuring and sizing this resizer/toggler, so can be 'hidden' now
          if (!state.initialized && (o.initHidden || s.isHidden)) {
            $R.hide();
            if ($T) $T.hide();
          }
        });
      }


      /**
       * @param {(string|Object)}	evt_or_pane
       */
      ,	enableClosable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$T	= $Ts[pane]
          ,	o	= options[pane]
        ;
        if (!$T) return;
        o.closable = true;
        $T	.bind("click."+ sID, function(evt){ evt.stopPropagation(); toggle(pane); })
          .css("visibility", "visible")
          .css("cursor", "pointer")
          .attr("title", state[pane].isClosed ? o.tips.Open : o.tips.Close) // may be blank
          .show();
      }
      /**
       * @param {(string|Object)}	evt_or_pane
       * @param {boolean=}			[hide=false]
       */
      ,	disableClosable = function (evt_or_pane, hide) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$T	= $Ts[pane]
        ;
        if (!$T) return;
        options[pane].closable = false;
        // is closable is disable, then pane MUST be open!
        if (state[pane].isClosed) open(pane, false, true);
        $T	.unbind("."+ sID)
          .css("visibility", hide ? "hidden" : "visible") // instead of hide(), which creates logic issues
          .css("cursor", "default")
          .attr("title", "");
      }


      /**
       * @param {(string|Object)}	evt_or_pane
       */
      ,	enableSlidable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$R	= $Rs[pane]
        ;
        if (!$R || !$R.data('draggable')) return;
        options[pane].slidable = true;
        if (state[pane].isClosed)
          bindStartSlidingEvents(pane, true);
      }
      /**
       * @param {(string|Object)}	evt_or_pane
       */
      ,	disableSlidable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$R	= $Rs[pane]
        ;
        if (!$R) return;
        options[pane].slidable = false;
        if (state[pane].isSliding)
          close(pane, false, true);
        else {
          bindStartSlidingEvents(pane, false);
          $R	.css("cursor", "default")
            .attr("title", "");
          removeHover(null, $R[0]); // in case currently hovered
        }
      }


      /**
       * @param {(string|Object)}	evt_or_pane
       */
      ,	enableResizable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$R	= $Rs[pane]
          ,	o	= options[pane]
        ;
        if (!$R || !$R.data('draggable')) return;
        o.resizable = true;
        $R.draggable("enable");
        if (!state[pane].isClosed)
          $R	.css("cursor", o.resizerCursor)
            .attr("title", o.tips.Resize);
      }
      /**
       * @param {(string|Object)}	evt_or_pane
       */
      ,	disableResizable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var	pane = evtPane.call(this, evt_or_pane)
          ,	$R	= $Rs[pane]
        ;
        if (!$R || !$R.data('draggable')) return;
        options[pane].resizable = false;
        $R	.draggable("disable")
          .css("cursor", "default")
          .attr("title", "");
        removeHover(null, $R[0]); // in case currently hovered
      }


      /**
       * Move a pane from source-side (eg, west) to target-side (eg, east)
       * If pane exists on target-side, move that to source-side, ie, 'swap' the panes
       *
       * @param {(string|Object)}	evt_or_pane1	The pane/edge being swapped
       * @param {string}			pane2			ditto
       */
      ,	swapPanes = function (evt_or_pane1, pane2) {
        if (!isInitialized()) return;
        var pane1 = evtPane.call(this, evt_or_pane1);
        // change state.edge NOW so callbacks can know where pane is headed...
        state[pane1].edge = pane2;
        state[pane2].edge = pane1;
        // run these even if NOT state.initialized
        if (false === _runCallbacks("onswap_start", pane1)
          ||	false === _runCallbacks("onswap_start", pane2)
        ) {
          state[pane1].edge = pane1; // reset
          state[pane2].edge = pane2;
          return;
        }

        var
          oPane1	= copy( pane1 )
          ,	oPane2	= copy( pane2 )
          ,	sizes	= {}
        ;
        sizes[pane1] = oPane1 ? oPane1.state.size : 0;
        sizes[pane2] = oPane2 ? oPane2.state.size : 0;

        // clear pointers & state
        $Ps[pane1] = false;
        $Ps[pane2] = false;
        state[pane1] = {};
        state[pane2] = {};

        // ALWAYS remove the resizer & toggler elements
        if ($Ts[pane1]) $Ts[pane1].remove();
        if ($Ts[pane2]) $Ts[pane2].remove();
        if ($Rs[pane1]) $Rs[pane1].remove();
        if ($Rs[pane2]) $Rs[pane2].remove();
        $Rs[pane1] = $Rs[pane2] = $Ts[pane1] = $Ts[pane2] = false;

        // transfer element pointers and data to NEW Layout keys
        move( oPane1, pane2 );
        move( oPane2, pane1 );

        // cleanup objects
        oPane1 = oPane2 = sizes = null;

        // make panes 'visible' again
        if ($Ps[pane1]) $Ps[pane1].css(_c.visible);
        if ($Ps[pane2]) $Ps[pane2].css(_c.visible);

        // fix any size discrepancies caused by swap
        resizeAll();

        // run these even if NOT state.initialized
        _runCallbacks("onswap_end", pane1);
        _runCallbacks("onswap_end", pane2);

        return;

        function copy (n) { // n = pane
          var
            $P	= $Ps[n]
            ,	$C	= $Cs[n]
          ;
          return !$P ? false : {
            pane:		n
            ,	P:			$P ? $P[0] : false
            ,	C:			$C ? $C[0] : false
            ,	state:		$.extend(true, {}, state[n])
            ,	options:	$.extend(true, {}, options[n])
          }
        };

        function move (oPane, pane) {
          if (!oPane) return;
          var
            P		= oPane.P
            ,	C		= oPane.C
            ,	oldPane = oPane.pane
            ,	c		= _c[pane]
            //	save pane-options that should be retained
            ,	s		= $.extend(true, {}, state[pane])
            ,	o		= options[pane]
            //	RETAIN side-specific FX Settings - more below
            ,	fx		= { resizerCursor: o.resizerCursor }
            ,	re, size, pos
          ;
          $.each("fxName,fxSpeed,fxSettings".split(","), function (i, k) {
            fx[k +"_open"]  = o[k +"_open"];
            fx[k +"_close"] = o[k +"_close"];
            fx[k +"_size"]  = o[k +"_size"];
          });

          // update object pointers and attributes
          $Ps[pane] = $(P)
            .data({
              layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
              ,	layoutEdge:		pane
            })
            .css(_c.hidden)
            .css(c.cssReq)
          ;
          $Cs[pane] = C ? $(C) : false;

          // set options and state
          options[pane]	= $.extend(true, {}, oPane.options, fx);
          state[pane]		= $.extend(true, {}, oPane.state);

          // change classNames on the pane, eg: ui-layout-pane-east ==> ui-layout-pane-west
          re = new RegExp(o.paneClass +"-"+ oldPane, "g");
          P.className = P.className.replace(re, o.paneClass +"-"+ pane);

          // ALWAYS regenerate the resizer & toggler elements
          initHandles(pane); // create the required resizer & toggler

          // if moving to different orientation, then keep 'target' pane size
          if (c.dir != _c[oldPane].dir) {
            size = sizes[pane] || 0;
            setSizeLimits(pane); // update pane-state
            size = max(size, state[pane].minSize);
            // use manualSizePane to disable autoResize - not useful after panes are swapped
            manualSizePane(pane, size, true, true); // true/true = skipCallback/noAnimation
          }
          else // move the resizer here
            $Rs[pane].css(c.side, sC.inset[c.side] + (state[pane].isVisible ? getPaneSize(pane) : 0));


          // ADD CLASSNAMES & SLIDE-BINDINGS
          if (oPane.state.isVisible && !s.isVisible)
            setAsOpen(pane, true); // true = skipCallback
          else {
            setAsClosed(pane);
            bindStartSlidingEvents(pane, true); // will enable events IF option is set
          }

          // DESTROY the object
          oPane = null;
        };
      }


      /**
       * INTERNAL method to sync pin-buttons when pane is opened or closed
       * Unpinned means the pane is 'sliding' - ie, over-top of the adjacent panes
       *
       * @see  open(), setAsOpen(), setAsClosed()
       * @param {string}	pane   These are the params returned to callbacks by layout()
       * @param {boolean}	doPin  True means set the pin 'down', False means 'up'
       */
      ,	syncPinBtns = function (pane, doPin) {
        if ($.layout.plugins.buttons)
          $.each(state[pane].pins, function (i, selector) {
            $.layout.buttons.setPinState(Instance, $(selector), pane, doPin);
          });
      }

    ;	// END var DECLARATIONS

    /**
     * Capture keys when enableCursorHotkey - toggle pane if hotkey pressed
     *
     * @see  document.keydown()
     */
    function keyDown (evt) {
      if (!evt) return true;
      var code = evt.keyCode;
      if (code < 33) return true; // ignore special keys: ENTER, TAB, etc

      var
        PANE = {
          38: "north" // Up Cursor	- $.ui.keyCode.UP
          ,	40: "south" // Down Cursor	- $.ui.keyCode.DOWN
          ,	37: "west"  // Left Cursor	- $.ui.keyCode.LEFT
          ,	39: "east"  // Right Cursor	- $.ui.keyCode.RIGHT
        }
        ,	ALT		= evt.altKey // no worky!
        ,	SHIFT	= evt.shiftKey
        ,	CTRL	= evt.ctrlKey
        ,	CURSOR	= (CTRL && code >= 37 && code <= 40)
        ,	o, k, m, pane
      ;

      if (CURSOR && options[PANE[code]].enableCursorHotkey) // valid cursor-hotkey
        pane = PANE[code];
      else if (CTRL || SHIFT) // check to see if this matches a custom-hotkey
        $.each(_c.borderPanes, function (i, p) { // loop each pane to check its hotkey
          o = options[p];
          k = o.customHotkey;
          m = o.customHotkeyModifier; // if missing or invalid, treated as "CTRL+SHIFT"
          if ((SHIFT && m=="SHIFT") || (CTRL && m=="CTRL") || (CTRL && SHIFT)) { // Modifier matches
            if (k && code === (isNaN(k) || k <= 9 ? k.toUpperCase().charCodeAt(0) : k)) { // Key matches
              pane = p;
              return false; // BREAK
            }
          }
        });

      // validate pane
      if (!pane || !$Ps[pane] || !options[pane].closable || state[pane].isHidden)
        return true;

      toggle(pane);

      evt.stopPropagation();
      evt.returnValue = false; // CANCEL key
      return false;
    };


    /*
     * ######################################
     *	UTILITY METHODS
     *	called externally or by initButtons
     * ######################################
     */

    /**
     * Change/reset a pane overflow setting & zIndex to allow popups/drop-downs to work
     *
     * @param {Object=}   [el]	(optional) Can also be 'bound' to a click, mouseOver, or other event
     */
    function allowOverflow (el) {
      if (!isInitialized()) return;
      if (this && this.tagName) el = this; // BOUND to element
      var $P;
      if (isStr(el))
        $P = $Ps[el];
      else if ($(el).data("layoutRole"))
        $P = $(el);
      else
        $(el).parents().each(function(){
          if ($(this).data("layoutRole")) {
            $P = $(this);
            return false; // BREAK
          }
        });
      if (!$P || !$P.length) return; // INVALID

      var
        pane	= $P.data("layoutEdge")
        ,	s		= state[pane]
      ;

      // if pane is already raised, then reset it before doing it again!
      // this would happen if allowOverflow is attached to BOTH the pane and an element
      if (s.cssSaved)
        resetOverflow(pane); // reset previous CSS before continuing

      // if pane is raised by sliding or resizing, or its closed, then abort
      if (s.isSliding || s.isResizing || s.isClosed) {
        s.cssSaved = false;
        return;
      }

      var
        newCSS	= { zIndex: (options.zIndexes.resizer_normal + 1) }
        ,	curCSS	= {}
        ,	of		= $P.css("overflow")
        ,	ofX		= $P.css("overflowX")
        ,	ofY		= $P.css("overflowY")
      ;
      // determine which, if any, overflow settings need to be changed
      if (of != "visible") {
        curCSS.overflow = of;
        newCSS.overflow = "visible";
      }
      if (ofX && !ofX.match(/(visible|auto)/)) {
        curCSS.overflowX = ofX;
        newCSS.overflowX = "visible";
      }
      if (ofY && !ofY.match(/(visible|auto)/)) {
        curCSS.overflowY = ofX;
        newCSS.overflowY = "visible";
      }

      // save the current overflow settings - even if blank!
      s.cssSaved = curCSS;

      // apply new CSS to raise zIndex and, if necessary, make overflow 'visible'
      $P.css( newCSS );

      // make sure the zIndex of all other panes is normal
      $.each(_c.allPanes, function(i, p) {
        if (p != pane) resetOverflow(p);
      });

    };
    /**
     * @param {Object=}   [el]	(optional) Can also be 'bound' to a click, mouseOver, or other event
     */
    function resetOverflow (el) {
      if (!isInitialized()) return;
      if (this && this.tagName) el = this; // BOUND to element
      var $P;
      if (isStr(el))
        $P = $Ps[el];
      else if ($(el).data("layoutRole"))
        $P = $(el);
      else
        $(el).parents().each(function(){
          if ($(this).data("layoutRole")) {
            $P = $(this);
            return false; // BREAK
          }
        });
      if (!$P || !$P.length) return; // INVALID

      var
        pane	= $P.data("layoutEdge")
        ,	s		= state[pane]
        ,	CSS		= s.cssSaved || {}
      ;
      // reset the zIndex
      if (!s.isSliding && !s.isResizing)
        $P.css("zIndex", options.zIndexes.pane_normal);

      // reset Overflow - if necessary
      $P.css( CSS );

      // clear var
      s.cssSaved = false;
    };

    /*
     * #####################
     * CREATE/RETURN LAYOUT
     * #####################
     */

    // validate that container exists
    var $N = $(this).eq(0); // FIRST matching Container element
    if (!$N.length) {
      return _log( options.errors.containerMissing );
    };

    // Users retrieve Instance of a layout with: $N.layout() OR $N.data("layout")
    // return the Instance-pointer if layout has already been initialized
    if ($N.data("layoutContainer") && $N.data("layout"))
      return $N.data("layout"); // cached pointer

    // init global vars
    var
      $Ps	= {}	// Panes x5		- set in initPanes()
      ,	$Cs	= {}	// Content x5	- set in initPanes()
      ,	$Rs	= {}	// Resizers x4	- set in initHandles()
      ,	$Ts	= {}	// Togglers x4	- set in initHandles()
      ,	$Ms	= $([])	// Masks - up to 2 masks per pane (IFRAME + DIV)
      //	aliases for code brevity
      ,	sC	= state.container // alias for easy access to 'container dimensions'
      ,	sID	= state.id // alias for unique layout ID/namespace - eg: "layout435"
    ;

    // create Instance object to expose data & option Properties, and primary action Methods
    var Instance = {
      //	layout data
      options:			options			// property - options hash
      ,	state:				state			// property - dimensions hash
      //	object pointers
      ,	container:			$N				// property - object pointers for layout container
      ,	panes:				$Ps				// property - object pointers for ALL Panes: panes.north, panes.center
      ,	contents:			$Cs				// property - object pointers for ALL Content: contents.north, contents.center
      ,	resizers:			$Rs				// property - object pointers for ALL Resizers, eg: resizers.north
      ,	togglers:			$Ts				// property - object pointers for ALL Togglers, eg: togglers.north
      //	border-pane open/close
      ,	hide:				hide			// method - ditto
      ,	show:				show			// method - ditto
      ,	toggle:				toggle			// method - pass a 'pane' ("north", "west", etc)
      ,	open:				open			// method - ditto
      ,	close:				close			// method - ditto
      ,	slideOpen:			slideOpen		// method - ditto
      ,	slideClose:			slideClose		// method - ditto
      ,	slideToggle:		slideToggle		// method - ditto
      //	pane actions
      ,	setSizeLimits:		setSizeLimits	// method - pass a 'pane' - update state min/max data
      ,	_sizePane:			sizePane		// method -intended for user by plugins only!
      ,	sizePane:			manualSizePane	// method - pass a 'pane' AND an 'outer-size' in pixels or percent, or 'auto'
      ,	sizeContent:		sizeContent		// method - pass a 'pane'
      ,	swapPanes:			swapPanes		// method - pass TWO 'panes' - will swap them
      ,	showMasks:			showMasks		// method - pass a 'pane' OR list of panes - default = all panes with mask option set
      ,	hideMasks:			hideMasks		// method - ditto'
      //	pane element methods
      ,	initContent:		initContent		// method - ditto
      ,	addPane:			addPane			// method - pass a 'pane'
      ,	removePane:			removePane		// method - pass a 'pane' to remove from layout, add 'true' to delete the pane-elem
      ,	createChildren:		createChildren	// method - pass a 'pane' and (optional) layout-options (OVERRIDES options[pane].children
      ,	refreshChildren:	refreshChildren	// method - pass a 'pane' and a layout-instance
      //	special pane option setting
      ,	enableClosable:		enableClosable	// method - pass a 'pane'
      ,	disableClosable:	disableClosable	// method - ditto
      ,	enableSlidable:		enableSlidable	// method - ditto
      ,	disableSlidable:	disableSlidable	// method - ditto
      ,	enableResizable:	enableResizable	// method - ditto
      ,	disableResizable:	disableResizable// method - ditto
      //	utility methods for panes
      ,	allowOverflow:		allowOverflow	// utility - pass calling element (this)
      ,	resetOverflow:		resetOverflow	// utility - ditto
      //	layout control
      ,	destroy:			destroy			// method - no parameters
      ,	initPanes:			isInitialized	// method - no parameters
      ,	resizeAll:			resizeAll		// method - no parameters
      //	callback triggering
      ,	runCallbacks:		_runCallbacks	// method - pass evtName & pane (if a pane-event), eg: trigger("onopen", "west")
      //	alias collections of options, state and children - created in addPane and extended elsewhere
      ,	hasParentLayout:	false			// set by initContainer()
      ,	children:			children		// pointers to child-layouts, eg: Instance.children.west.layoutName
      ,	north:				false			// alias group: { name: pane, pane: $Ps[pane], options: options[pane], state: state[pane], children: children[pane] }
      ,	south:				false			// ditto
      ,	west:				false			// ditto
      ,	east:				false			// ditto
      ,	center:				false			// ditto
    };

    // create the border layout NOW
    if (_create() === 'cancel') // onload_start callback returned false to CANCEL layout creation
      return null;
    else // true OR false -- if layout-elements did NOT init (hidden or do not exist), can auto-init later
      return Instance; // return the Instance object

  }


})( jQuery );




/**
 * jquery.layout.state 1.2
 * $Date: 2014-08-30 08:00:00 (Sat, 30 Aug 2014) $
 *
 * Copyright (c) 2014
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.4.0 or higher
 * @requires: $.ui.cookie (above)
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 */
;(function ($) {

  if (!$.layout) return;


  /**
   *	UI COOKIE UTILITY
   *
   *	A $.cookie OR $.ui.cookie namespace *should be standard*, but until then...
   *	This creates $.ui.cookie so Layout does not need the cookie.jquery.js plugin
   *	NOTE: This utility is REQUIRED by the layout.state plugin
   *
   *	Cookie methods in Layout are created as part of State Management
   */
  if (!$.ui) $.ui = {};
  $.ui.cookie = {

    // cookieEnabled is not in DOM specs, but DOES works in all browsers,including IE6
    acceptsCookies: !!navigator.cookieEnabled

    ,	read: function (name) {
      var
        c	= document.cookie
        ,	cs	= c ? c.split(';') : []
        ,	pair, data, i
      ;
      for (i=0; pair=cs[i]; i++) {
        data = $.trim(pair).split('='); // name=value => [ name, value ]
        if (data[0] == name) // found the layout cookie
          return decodeURIComponent(data[1]);
      }
      return null;
    }

    ,	write: function (name, val, cookieOpts) {
      var	params	= ""
        ,	date	= ""
        ,	clear	= false
        ,	o		= cookieOpts || {}
        ,	x		= o.expires  || null
        ,	t		= $.type(x)
      ;
      if (t === "date")
        date = x;
      else if (t === "string" && x > 0) {
        x = parseInt(x,10);
        t = "number";
      }
      if (t === "number") {
        date = new Date();
        if (x > 0)
          date.setDate(date.getDate() + x);
        else {
          date.setFullYear(1970);
          clear = true;
        }
      }
      if (date)		params += ";expires="+ date.toUTCString();
      if (o.path)		params += ";path="+ o.path;
      if (o.domain)	params += ";domain="+ o.domain;
      if (o.secure)	params += ";secure";
      document.cookie = name +"="+ (clear ? "" : encodeURIComponent( val )) + params; // write or clear cookie
    }

    ,	clear: function (name) {
      $.ui.cookie.write(name, "", {expires: -1});
    }

  };
// if cookie.jquery.js is not loaded, create an alias to replicate it
// this may be useful to other plugins or code dependent on that plugin
  if (!$.cookie) $.cookie = function (k, v, o) {
    var C = $.ui.cookie;
    if (v === null)
      C.clear(k);
    else if (v === undefined)
      return C.read(k);
    else
      C.write(k, v, o);
  };



  /**
   *	State-management options stored in options.stateManagement, which includes a .cookie hash
   *	Default options saves ALL KEYS for ALL PANES, ie: pane.size, pane.isClosed, pane.isHidden
   *
   *	// STATE/COOKIE OPTIONS
   *	@example $(el).layout({
				stateManagement: {
					enabled:	true
				,	stateKeys:	"east.size,west.size,east.isClosed,west.isClosed"
				,	cookie:		{ name: "appLayout", path: "/" }
				}
			})
   *	@example $(el).layout({ stateManagement__enabled: true }) // enable auto-state-management using cookies
   *	@example $(el).layout({ stateManagement__cookie: { name: "appLayout", path: "/" } })
   *	@example $(el).layout({ stateManagement__cookie__name: "appLayout", stateManagement__cookie__path: "/" })
   *
   *	// STATE/COOKIE METHODS
   *	@example myLayout.saveCookie( "west.isClosed,north.size,south.isHidden", {expires: 7} );
   *	@example myLayout.loadCookie();
   *	@example myLayout.deleteCookie();
   *	@example var JSON = myLayout.readState();	// CURRENT Layout State
   *	@example var JSON = myLayout.readCookie();	// SAVED Layout State (from cookie)
   *	@example var JSON = myLayout.state.stateData;	// LAST LOADED Layout State (cookie saved in layout.state hash)
   *
   *	CUSTOM STATE-MANAGEMENT (eg, saved in a database)
   *	@example var JSON = myLayout.readState( "west.isClosed,north.size,south.isHidden" );
   *	@example myLayout.loadState( JSON );
   */

// tell Layout that the state plugin is available
  $.layout.plugins.stateManagement = true;

//	Add State-Management options to layout.defaults
  $.layout.defaults.stateManagement = {
    enabled:		false	// true = enable state-management, even if not using cookies
    ,	autoSave:		true	// Save a state-cookie when page exits?
    ,	autoLoad:		true	// Load the state-cookie when Layout inits?
    ,	animateLoad:	true	// animate panes when loading state into an active layout
    ,	includeChildren: true	// recurse into child layouts to include their state as well
    // List state-data to save - must be pane-specific
    ,	stateKeys:	"north.size,south.size,east.size,west.size,"+
    "north.isClosed,south.isClosed,east.isClosed,west.isClosed,"+
    "north.isHidden,south.isHidden,east.isHidden,west.isHidden"
    ,	cookie: {
      name:	""	// If not specified, will use Layout.name, else just "Layout"
      ,	domain:	""	// blank = current domain
      ,	path:	""	// blank = current page, "/" = entire website
      ,	expires: ""	// 'days' to keep cookie - leave blank for 'session cookie'
      ,	secure:	false
    }
  };

// Set stateManagement as a 'layout-option', NOT a 'pane-option'
  $.layout.optionsMap.layout.push("stateManagement");
// Update config so layout does not move options into the pane-default branch (panes)
  $.layout.config.optionRootKeys.push("stateManagement");

  /*
   *	State Management methods
   */
  $.layout.state = {

    /**
     * Get the current layout state and save it to a cookie
     *
     * myLayout.saveCookie( keys, cookieOpts )
     *
     * @param {Object}			inst
     * @param {(string|Array)=}	keys
     * @param {Object=}			cookieOpts
     */
    saveCookie: function (inst, keys, cookieOpts) {
      var o	= inst.options
        ,	sm	= o.stateManagement
        ,	oC	= $.extend(true, {}, sm.cookie, cookieOpts || null)
        ,	data = inst.state.stateData = inst.readState( keys || sm.stateKeys ) // read current panes-state
      ;
      $.ui.cookie.write( oC.name || o.name || "Layout", $.layout.state.encodeJSON(data), oC );
      return $.extend(true, {}, data); // return COPY of state.stateData data
    }

    /**
     * Remove the state cookie
     *
     * @param {Object}	inst
     */
    ,	deleteCookie: function (inst) {
      var o = inst.options;
      $.ui.cookie.clear( o.stateManagement.cookie.name || o.name || "Layout" );
    }

    /**
     * Read & return data from the cookie - as JSON
     *
     * @param {Object}	inst
     */
    ,	readCookie: function (inst) {
      var o = inst.options;
      var c = $.ui.cookie.read( o.stateManagement.cookie.name || o.name || "Layout" );
      // convert cookie string back to a hash and return it
      return c ? $.layout.state.decodeJSON(c) : {};
    }

    /**
     * Get data from the cookie and USE IT to loadState
     *
     * @param {Object}	inst
     */
    ,	loadCookie: function (inst) {
      var c = $.layout.state.readCookie(inst); // READ the cookie
      if (c && !$.isEmptyObject( c )) {
        inst.state.stateData = $.extend(true, {}, c); // SET state.stateData
        inst.loadState(c); // LOAD the retrieved state
      }
      return c;
    }

    /**
     * Update layout options from the cookie, if one exists
     *
     * @param {Object}		inst
     * @param {Object=}		stateData
     * @param {boolean=}	animate
     */
    ,	loadState: function (inst, data, opts) {
      if (!$.isPlainObject( data ) || $.isEmptyObject( data )) return;

      // normalize data & cache in the state object
      data = inst.state.stateData = $.layout.transformData( data ); // panes = default subkey

      // add missing/default state-restore options
      var smo = inst.options.stateManagement;
      opts = $.extend({
        animateLoad:		false //smo.animateLoad
        ,	includeChildren:	smo.includeChildren
      }, opts );

      if (!inst.state.initialized) {
        /*
         *	layout NOT initialized, so just update its options
         */
        // MUST remove pane.children keys before applying to options
        // use a copy so we don't remove keys from original data
        var o = $.extend(true, {}, data);
        //delete o.center; // center has no state-data - only children
        $.each($.layout.config.allPanes, function (idx, pane) {
          if (o[pane]) delete o[pane].children;
        });
        // update CURRENT layout-options with saved state data
        $.extend(true, inst.options, o);
      }
      else {
        /*
         *	layout already initialized, so modify layout's configuration
         */
        var noAnimate = !opts.animateLoad
          ,	o, c, h, state, open
        ;
        $.each($.layout.config.borderPanes, function (idx, pane) {
          o = data[ pane ];
          if (!$.isPlainObject( o )) return; // no key, skip pane

          s	= o.size;
          c	= o.initClosed;
          h	= o.initHidden;
          ar	= o.autoResize
          state	= inst.state[pane];
          open	= state.isVisible;

          // reset autoResize
          if (ar)
            state.autoResize = ar;
          // resize BEFORE opening
          if (!open)
            inst._sizePane(pane, s, false, false, false); // false=skipCallback/noAnimation/forceResize
          // open/close as necessary - DO NOT CHANGE THIS ORDER!
          if (h === true)			inst.hide(pane, noAnimate);
          else if (c === true)	inst.close(pane, false, noAnimate);
          else if (c === false)	inst.open (pane, false, noAnimate);
          else if (h === false)	inst.show (pane, false, noAnimate);
          // resize AFTER any other actions
          if (open)
            inst._sizePane(pane, s, false, false, noAnimate); // animate resize if option passed
        });

        /*
         *	RECURSE INTO CHILD-LAYOUTS
         */
        if (opts.includeChildren) {
          var paneStateChildren, childState;
          $.each(inst.children, function (pane, paneChildren) {
            paneStateChildren = data[pane] ? data[pane].children : 0;
            if (paneStateChildren && paneChildren) {
              $.each(paneChildren, function (stateKey, child) {
                childState = paneStateChildren[stateKey];
                if (child && childState)
                  child.loadState( childState );
              });
            }
          });
        }
      }
    }

    /**
     * Get the *current layout state* and return it as a hash
     *
     * @param {Object=}		inst	// Layout instance to get state for
     * @param {object=}		[opts]	// State-Managements override options
     */
    ,	readState: function (inst, opts) {
      // backward compatility
      if ($.type(opts) === 'string') opts = { keys: opts };
      if (!opts) opts = {};
      var	sm		= inst.options.stateManagement
        ,	ic		= opts.includeChildren
        ,	recurse	= ic !== undefined ? ic : sm.includeChildren
        ,	keys	= opts.stateKeys || sm.stateKeys
        ,	alt		= { isClosed: 'initClosed', isHidden: 'initHidden' }
        ,	state	= inst.state
        ,	panes	= $.layout.config.allPanes
        ,	data	= {}
        ,	pair, pane, key, val
        ,	ps, pC, child, array, count, branch
      ;
      if ($.isArray(keys)) keys = keys.join(",");
      // convert keys to an array and change delimiters from '__' to '.'
      keys = keys.replace(/__/g, ".").split(',');
      // loop keys and create a data hash
      for (var i=0, n=keys.length; i < n; i++) {
        pair = keys[i].split(".");
        pane = pair[0];
        key  = pair[1];
        if ($.inArray(pane, panes) < 0) continue; // bad pane!
        val = state[ pane ][ key ];
        if (val == undefined) continue;
        if (key=="isClosed" && state[pane]["isSliding"])
          val = true; // if sliding, then *really* isClosed
        ( data[pane] || (data[pane]={}) )[ alt[key] ? alt[key] : key ] = val;
      }

      // recurse into the child-layouts for each pane
      if (recurse) {
        $.each(panes, function (idx, pane) {
          pC = inst.children[pane];
          ps = state.stateData[pane];
          if ($.isPlainObject( pC ) && !$.isEmptyObject( pC )) {
            // ensure a key exists for this 'pane', eg: branch = data.center
            branch = data[pane] || (data[pane] = {});
            if (!branch.children) branch.children = {};
            $.each( pC, function (key, child) {
              // ONLY read state from an initialize layout
              if ( child.state.initialized )
                branch.children[ key ] = $.layout.state.readState( child );
              // if we have PREVIOUS (onLoad) state for this child-layout, KEEP IT!
              else if ( ps && ps.children && ps.children[ key ] ) {
                branch.children[ key ] = $.extend(true, {}, ps.children[ key ] );
              }
            });
          }
        });
      }

      return data;
    }

    /**
     *	Stringify a JSON hash so can save in a cookie or db-field
     */
    ,	encodeJSON: function (json) {
      var local = window.JSON || {};
      return (local.stringify || stringify)(json);

      function stringify (h) {
        var D=[], i=0, k, v, t // k = key, v = value
          ,	a = $.isArray(h)
        ;
        for (k in h) {
          v = h[k];
          t = typeof v;
          if (t == 'string')		// STRING - add quotes
            v = '"'+ v +'"';
          else if (t == 'object')	// SUB-KEY - recurse into it
            v = parse(v);
          D[i++] = (!a ? '"'+ k +'":' : '') + v;
        }
        return (a ? '[' : '{') + D.join(',') + (a ? ']' : '}');
      };
    }

    /**
     *	Convert stringified JSON back to a hash object
     *	@see		$.parseJSON(), adding in jQuery 1.4.1
     */
    ,	decodeJSON: function (str) {
      try { return $.parseJSON ? $.parseJSON(str) : window["eval"]("("+ str +")") || {}; }
      catch (e) { return {}; }
    }


    ,	_create: function (inst) {
      var s	= $.layout.state
        ,	o	= inst.options
        ,	sm	= o.stateManagement
      ;
      //	ADD State-Management plugin methods to inst
      $.extend( inst, {
        //	readCookie - update options from cookie - returns hash of cookie data
        readCookie:		function () { return s.readCookie(inst); }
        //	deleteCookie
        ,	deleteCookie:	function () { s.deleteCookie(inst); }
        //	saveCookie - optionally pass keys-list and cookie-options (hash)
        ,	saveCookie:		function (keys, cookieOpts) { return s.saveCookie(inst, keys, cookieOpts); }
        //	loadCookie - readCookie and use to loadState() - returns hash of cookie data
        ,	loadCookie:		function () { return s.loadCookie(inst); }
        //	loadState - pass a hash of state to use to update options
        ,	loadState:		function (stateData, opts) { s.loadState(inst, stateData, opts); }
        //	readState - returns hash of current layout-state
        ,	readState:		function (keys) { return s.readState(inst, keys); }
        //	add JSON utility methods too...
        ,	encodeJSON:		s.encodeJSON
        ,	decodeJSON:		s.decodeJSON
      });

      // init state.stateData key, even if plugin is initially disabled
      inst.state.stateData = {};

      // autoLoad MUST BE one of: data-array, data-hash, callback-function, or TRUE
      if ( !sm.autoLoad ) return;

      //	When state-data exists in the autoLoad key USE IT,
      //	even if stateManagement.enabled == false
      if ($.isPlainObject( sm.autoLoad )) {
        if (!$.isEmptyObject( sm.autoLoad )) {
          inst.loadState( sm.autoLoad );
        }
      }
      else if ( sm.enabled ) {
        // update the options from cookie or callback
        // if options is a function, call it to get stateData
        if ($.isFunction( sm.autoLoad )) {
          var d = {};
          try {
            d = sm.autoLoad( inst, inst.state, inst.options, inst.options.name || '' ); // try to get data from fn
          } catch (e) {}
          if (d && $.isPlainObject( d ) && !$.isEmptyObject( d ))
            inst.loadState(d);
        }
        else // any other truthy value will trigger loadCookie
          inst.loadCookie();
      }
    }

    ,	_unload: function (inst) {
      var sm = inst.options.stateManagement;
      if (sm.enabled && sm.autoSave) {
        // if options is a function, call it to save the stateData
        if ($.isFunction( sm.autoSave )) {
          try {
            sm.autoSave( inst, inst.state, inst.options, inst.options.name || '' ); // try to get data from fn
          } catch (e) {}
        }
        else // any truthy value will trigger saveCookie
          inst.saveCookie();
      }
    }

  };

// add state initialization method to Layout's onCreate array of functions
  $.layout.onCreate.push( $.layout.state._create );
  $.layout.onUnload.push( $.layout.state._unload );

})( jQuery );



/**
 * @preserve jquery.layout.buttons 1.0
 * $Date: 2011-07-16 08:00:00 (Sat, 16 July 2011) $
 *
 * Copyright (c) 2011
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @dependancies: UI Layout 1.3.0.rc30.1 or higher
 *
 * @support: http://groups.google.com/group/jquery-ui-layout
 *
 * Docs: [ to come ]
 * Tips: [ to come ]
 */
;(function ($) {

  if (!$.layout) return;


// tell Layout that the state plugin is available
  $.layout.plugins.buttons = true;

//	Add State-Management options to layout.defaults
  $.layout.defaults.autoBindCustomButtons = false;
// Set stateManagement as a layout-option, NOT a pane-option
  $.layout.optionsMap.layout.push("autoBindCustomButtons");

  /*
   *	Button methods
   */
  $.layout.buttons = {
    // set data used by multiple methods below
    config: {
      borderPanes:	"north,south,west,east"
    }

    /**
     * Searches for .ui-layout-button-xxx elements and auto-binds them as layout-buttons
     *
     * @see  _create()
     */
    ,	init: function (inst) {
      var pre		= "ui-layout-button-"
        ,	layout	= inst.options.name || ""
        ,	name;
      $.each("toggle,open,close,pin,toggle-slide,open-slide".split(","), function (i, action) {
        $.each($.layout.buttons.config.borderPanes.split(","), function (ii, pane) {
          $("."+pre+action+"-"+pane).each(function(){
            // if button was previously 'bound', data.layoutName was set, but is blank if layout has no 'name'
            name = $(this).data("layoutName") || $(this).attr("layoutName");
            if (name == undefined || name === layout)
              inst.bindButton(this, action, pane);
          });
        });
      });
    }

    /**
     * Helper function to validate params received by addButton utilities
     *
     * Two classes are added to the element, based on the buttonClass...
     * The type of button is appended to create the 2nd className:
     *  - ui-layout-button-pin
     *  - ui-layout-pane-button-toggle
     *  - ui-layout-pane-button-open
     *  - ui-layout-pane-button-close
     *
     * @param  {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
     * @param  {string}   			pane 		Name of the pane the button is for: 'north', 'south', etc.
     * @return {Array.<Object>}		If both params valid, the element matching 'selector' in a jQuery wrapper - otherwise returns null
     */
    ,	get: function (inst, selector, pane, action) {
      var $E	= $(selector)
        ,	o	= inst.options
        //,	err	= o.showErrorMessages
      ;
      if ($E.length && $.layout.buttons.config.borderPanes.indexOf(pane) >= 0) {
        var btn = o[pane].buttonClass +"-"+ action;
        $E	.addClass( btn +" "+ btn +"-"+ pane )
          .data("layoutName", o.name); // add layout identifier - even if blank!
      }
      return $E;
    }


    /**
     * NEW syntax for binding layout-buttons - will eventually replace addToggle, addOpen, etc.
     *
     * @param {(string|!Object)}	sel		jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
     * @param {string}			action
     * @param {string}			pane
     */
    ,	bind: function (inst, sel, action, pane) {
      var _ = $.layout.buttons;
      switch (action.toLowerCase()) {
        case "toggle":			_.addToggle	(inst, sel, pane); break;
        case "open":			_.addOpen	(inst, sel, pane); break;
        case "close":			_.addClose	(inst, sel, pane); break;
        case "pin":				_.addPin	(inst, sel, pane); break;
        case "toggle-slide":	_.addToggle	(inst, sel, pane, true); break;
        case "open-slide":		_.addOpen	(inst, sel, pane, true); break;
      }
      return inst;
    }

    /**
     * Add a custom Toggler button for a pane
     *
     * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
     * @param {string}  			pane 		Name of the pane the button is for: 'north', 'south', etc.
     * @param {boolean=}			slide 		true = slide-open, false = pin-open
     */
    ,	addToggle: function (inst, selector, pane, slide) {
      $.layout.buttons.get(inst, selector, pane, "toggle")
        .click(function(evt){
          inst.toggle(pane, !!slide);
          evt.stopPropagation();
        });
      return inst;
    }

    /**
     * Add a custom Open button for a pane
     *
     * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
     * @param {string}			pane 		Name of the pane the button is for: 'north', 'south', etc.
     * @param {boolean=}			slide 		true = slide-open, false = pin-open
     */
    ,	addOpen: function (inst, selector, pane, slide) {
      $.layout.buttons.get(inst, selector, pane, "open")
        .attr("title", inst.options[pane].tips.Open)
        .click(function (evt) {
          inst.open(pane, !!slide);
          evt.stopPropagation();
        });
      return inst;
    }

    /**
     * Add a custom Close button for a pane
     *
     * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
     * @param {string}   		pane 		Name of the pane the button is for: 'north', 'south', etc.
     */
    ,	addClose: function (inst, selector, pane) {
      $.layout.buttons.get(inst, selector, pane, "close")
        .attr("title", inst.options[pane].tips.Close)
        .click(function (evt) {
          inst.close(pane);
          evt.stopPropagation();
        });
      return inst;
    }

    /**
     * Add a custom Pin button for a pane
     *
     * Four classes are added to the element, based on the paneClass for the associated pane...
     * Assuming the default paneClass and the pin is 'up', these classes are added for a west-pane pin:
     *  - ui-layout-pane-pin
     *  - ui-layout-pane-west-pin
     *  - ui-layout-pane-pin-up
     *  - ui-layout-pane-west-pin-up
     *
     * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
     * @param {string}   		pane 		Name of the pane the pin is for: 'north', 'south', etc.
     */
    ,	addPin: function (inst, selector, pane) {
      var $E = $.layout.buttons.get(inst, selector, pane, "pin");
      if ($E.length) {
        var s = inst.state[pane];
        $E.click(function (evt) {
          $.layout.buttons.setPinState(inst, $(this), pane, (s.isSliding || s.isClosed));
          if (s.isSliding || s.isClosed) inst.open( pane ); // change from sliding to open
          else inst.close( pane ); // slide-closed
          evt.stopPropagation();
        });
        // add up/down pin attributes and classes
        $.layout.buttons.setPinState(inst, $E, pane, (!s.isClosed && !s.isSliding));
        // add this pin to the pane data so we can 'sync it' automatically
        // PANE.pins key is an array so we can store multiple pins for each pane
        s.pins.push( selector ); // just save the selector string
      }
      return inst;
    }

    /**
     * Change the class of the pin button to make it look 'up' or 'down'
     *
     * @see  addPin(), syncPins()
     * @param {Array.<Object>}	$Pin	The pin-span element in a jQuery wrapper
     * @param {string}	pane	These are the params returned to callbacks by layout()
     * @param {boolean}	doPin	true = set the pin 'down', false = set it 'up'
     */
    ,	setPinState: function (inst, $Pin, pane, doPin) {
      var updown = $Pin.attr("pin");
      if (updown && doPin === (updown=="down")) return; // already in correct state
      var
        po		= inst.options[pane]
        ,	lang	= po.tips
        ,	pin		= po.buttonClass +"-pin"
        ,	side	= pin +"-"+ pane
        ,	UP		= pin +"-up "+	side +"-up"
        ,	DN		= pin +"-down "+side +"-down"
      ;
      $Pin
        .attr("pin", doPin ? "down" : "up") // logic
        .attr("title", doPin ? lang.Unpin : lang.Pin)
        .removeClass( doPin ? UP : DN )
        .addClass( doPin ? DN : UP )
      ;
    }

    /**
     * INTERNAL function to sync 'pin buttons' when pane is opened or closed
     * Unpinned means the pane is 'sliding' - ie, over-top of the adjacent panes
     *
     * @see  open(), close()
     * @param {string}	pane   These are the params returned to callbacks by layout()
     * @param {boolean}	doPin  True means set the pin 'down', False means 'up'
     */
    ,	syncPinBtns: function (inst, pane, doPin) {
      // REAL METHOD IS _INSIDE_ LAYOUT - THIS IS HERE JUST FOR REFERENCE
      $.each(state[pane].pins, function (i, selector) {
        $.layout.buttons.setPinState(inst, $(selector), pane, doPin);
      });
    }


    ,	_load: function (inst) {
      //	ADD Button methods to Layout Instance
      $.extend( inst, {
        bindButton:		function (selector, action, pane) { return $.layout.buttons.bind(inst, selector, action, pane); }
        //	DEPRECATED METHODS...
        ,	addToggleBtn:	function (selector, pane, slide) { return $.layout.buttons.addToggle(inst, selector, pane, slide); }
        ,	addOpenBtn:		function (selector, pane, slide) { return $.layout.buttons.addOpen(inst, selector, pane, slide); }
        ,	addCloseBtn:	function (selector, pane) { return $.layout.buttons.addClose(inst, selector, pane); }
        ,	addPinBtn:		function (selector, pane) { return $.layout.buttons.addPin(inst, selector, pane); }
      });

      // init state array to hold pin-buttons
      for (var i=0; i<4; i++) {
        var pane = $.layout.buttons.config.borderPanes[i];
        inst.state[pane].pins = [];
      }

      // auto-init buttons onLoad if option is enabled
      if ( inst.options.autoBindCustomButtons )
        $.layout.buttons.init(inst);
    }

    ,	_unload: function (inst) {
      // TODO: unbind all buttons???
    }

  };

// add initialization method to Layout's onLoad array of functions
  $.layout.onLoad.push(  $.layout.buttons._load );
//$.layout.onUnload.push( $.layout.buttons._unload );

})( jQuery );




/**
 * jquery.layout.browserZoom 1.0
 * $Date: 2011-12-29 08:00:00 (Thu, 29 Dec 2011) $
 *
 * Copyright (c) 2012
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 *
 * TODO: Extend logic to handle other problematic zooming in browsers
 * TODO: Add hotkey/mousewheel bindings to _instantly_ respond to these zoom event
 */
(function ($) {

// tell Layout that the plugin is available
  $.layout.plugins.browserZoom = true;

  $.layout.defaults.browserZoomCheckInterval = 1000;
  $.layout.optionsMap.layout.push("browserZoomCheckInterval");

  /*
   *	browserZoom methods
   */
  $.layout.browserZoom = {

    _init: function (inst) {
      // abort if browser does not need this check
      if ($.layout.browserZoom.ratio() !== false)
        $.layout.browserZoom._setTimer(inst);
    }

    ,	_setTimer: function (inst) {
      // abort if layout destroyed or browser does not need this check
      if (inst.destroyed) return;
      var o	= inst.options
        ,	s	= inst.state
        //	don't need check if inst has parentLayout, but check occassionally in case parent destroyed!
        //	MINIMUM 100ms interval, for performance
        ,	ms	= inst.hasParentLayout ?  5000 : Math.max( o.browserZoomCheckInterval, 100 )
      ;
      // set the timer
      setTimeout(function(){
          if (inst.destroyed || !o.resizeWithWindow) return;
          var d = $.layout.browserZoom.ratio();
          if (d !== s.browserZoom) {
            s.browserZoom = d;
            inst.resizeAll();
          }
          // set a NEW timeout
          $.layout.browserZoom._setTimer(inst);
        }
        ,	ms );
    }

    ,	ratio: function () {
      var w	= window
        ,	s	= screen
        ,	d	= document
        ,	dE	= d.documentElement || d.body
        ,	b	= $.layout.browser
        ,	v	= b.version
        ,	r, sW, cW
      ;
      // we can ignore all browsers that fire window.resize event onZoom
      if (!b.msie || v > 8)
        return false; // don't need to track zoom
      if (s.deviceXDPI && s.systemXDPI) // syntax compiler hack
        return calc(s.deviceXDPI, s.systemXDPI);
      // everything below is just for future reference!
      if (b.webkit && (r = d.body.getBoundingClientRect))
        return calc((r.left - r.right), d.body.offsetWidth);
      if (b.webkit && (sW = w.outerWidth))
        return calc(sW, w.innerWidth);
      if ((sW = s.width) && (cW = dE.clientWidth))
        return calc(sW, cW);
      return false; // no match, so cannot - or don't need to - track zoom

      function calc (x,y) { return (parseInt(x,10) / parseInt(y,10) * 100).toFixed(); }
    }

  };
// add initialization method to Layout's onLoad array of functions
  $.layout.onReady.push( $.layout.browserZoom._init );


})( jQuery );




/**
 *	UI Layout Plugin: Slide-Offscreen Animation
 *
 *	Prevent panes from being 'hidden' so that an iframes/objects
 *	does not reload/refresh when pane 'opens' again.
 *	This plug-in adds a new animation called "slideOffscreen".
 *	It is identical to the normal "slide" effect, but avoids hiding the element
 *
 *	Requires Layout 1.3.0.RC30.1 or later for Close offscreen
 *	Requires Layout 1.3.0.RC30.5 or later for Hide, initClosed & initHidden offscreen
 *
 *	Version:	1.1 - 2012-11-18
 *	Author:		Kevin Dalman (kevin@jquery-dev.com)
 *	@preserve	jquery.layout.slideOffscreen-1.1.js
 */
;(function ($) {

// Add a new "slideOffscreen" effect
  if ($.effects) {

    // add an option so initClosed and initHidden will work
    $.layout.defaults.panes.useOffscreenClose = false; // user must enable when needed
    /* set the new animation as the default for all panes
     $.layout.defaults.panes.fxName = "slideOffscreen";
     */

    if ($.layout.plugins)
      $.layout.plugins.effects.slideOffscreen = true;

    // dupe 'slide' effect defaults as new effect defaults
    $.layout.effects.slideOffscreen = $.extend(true, {}, $.layout.effects.slide);

    // add new effect to jQuery UI
    $.effects.slideOffscreen = function(o) {
      return this.queue(function(){

        var fx		= $.effects
          ,	opt		= o.options
          ,	$el		= $(this)
          ,	pane	= $el.data('layoutEdge')
          ,	state	= $el.data('parentLayout').state
          ,	dist	= state[pane].size
          ,	s		= this.style
          ,	props	= ['top','bottom','left','right']
          // Set options
          ,	mode	= fx.setMode($el, opt.mode || 'show') // Set Mode
          ,	show	= (mode == 'show')
          ,	dir		= opt.direction || 'left' // Default Direction
          ,	ref	 	= (dir == 'up' || dir == 'down') ? 'top' : 'left'
          ,	pos		= (dir == 'up' || dir == 'left')
          ,	offscrn	= $.layout.config.offscreenCSS || {}
          ,	keyLR	= $.layout.config.offscreenReset
          ,	keyTB	= 'offscreenResetTop' // only used internally
          ,	animation = {}
        ;
        // Animation settings
        animation[ref]	= (show ? (pos ? '+=' : '-=') : (pos ? '-=' : '+=')) + dist;

        if (show) { // show() animation, so save top/bottom but retain left/right set when 'hidden'
          $el.data(keyTB, { top: s.top, bottom: s.bottom });

          // set the top or left offset in preparation for animation
          // Note: ALL animations work by shifting the top or left edges
          if (pos) { // top (north) or left (west)
            $el.css(ref, isNaN(dist) ? "-" + dist : -dist); // Shift outside the left/top edge
          }
          else { // bottom (south) or right (east) - shift all the way across container
            if (dir === 'right')
              $el.css({ left: state.container.layoutWidth, right: 'auto' });
            else // dir === bottom
              $el.css({ top: state.container.layoutHeight, bottom: 'auto' });
          }
          // restore the left/right setting if is a top/bottom animation
          if (ref === 'top')
            $el.css( $el.data( keyLR ) || {} );
        }
        else { // hide() animation, so save ALL CSS
          $el.data(keyTB, { top: s.top, bottom: s.bottom });
          $el.data(keyLR, { left: s.left, right: s.right });
        }

        // Animate
        $el.show().animate(animation, { queue: false, duration: o.duration, easing: opt.easing, complete: function(){
          // Restore top/bottom
          if ($el.data( keyTB ))
            $el.css($el.data( keyTB )).removeData( keyTB );
          if (show) // Restore left/right too
            $el.css($el.data( keyLR ) || {}).removeData( keyLR );
          else // Move the pane off-screen (left: -99999, right: 'auto')
            $el.css( offscrn );

          if (o.callback) o.callback.apply(this, arguments); // Callback
          $el.dequeue();
        }});

      });
    };

  }

})( jQuery );
},{}],5:[function(require,module,exports){
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      global.moment = factory()
}(this, (function () { 'use strict';

  var hookCallback;

  function hooks () {
    return hookCallback.apply(null, arguments);
  }

// This is done to register the method called with moment()
// without creating circular dependencies.
  function setHookCallback (callback) {
    hookCallback = callback;
  }

  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }

  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }

  function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
      // even if its not own property I'd still call it non-empty
      return false;
    }
    return true;
  }

  function isUndefined(input) {
    return input === void 0;
  }

  function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }

  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }

  function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  }

  function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty           : false,
      unusedTokens    : [],
      unusedInput     : [],
      overflow        : -2,
      charsLeftOver   : 0,
      nullInput       : false,
      invalidMonth    : null,
      invalidFormat   : false,
      userInvalidated : false,
      iso             : false,
      parsedDateParts : [],
      meridiem        : null,
      rfc2822         : false,
      weekdayMismatch : false
    };
  }

  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }

  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function (fun) {
      var t = Object(this);
      var len = t.length >>> 0;

      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  }

  var some$1 = some;

  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
        return i != null;
      });
      var isNowValid = !isNaN(m._d.getTime()) &&
        flags.overflow < 0 &&
        !flags.empty &&
        !flags.invalidMonth &&
        !flags.invalidWeekday &&
        !flags.nullInput &&
        !flags.invalidFormat &&
        !flags.userInvalidated &&
        (!flags.meridiem || (flags.meridiem && parsedParts));

      if (m._strict) {
        isNowValid = isNowValid &&
          flags.charsLeftOver === 0 &&
          flags.unusedTokens.length === 0 &&
          flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      }
      else {
        return isNowValid;
      }
    }
    return m._isValid;
  }

  function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    }
    else {
      getParsingFlags(m).userInvalidated = true;
    }

    return m;
  }

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
  var momentProperties = hooks.momentProperties = [];

  function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
      for (i = 0; i < momentProperties.length; i++) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }

    return to;
  }

  var updateInProgress = false;

// Moment prototype object
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }

  function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
  }

  function absFloor (number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }

  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
      value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }

    return value;
  }

// compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;
    for (i = 0; i < len; i++) {
      if ((dontConvert && array1[i] !== array2[i]) ||
        (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }

  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
      (typeof console !==  'undefined') && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }

  function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [];
        var arg;
        for (var i = 0; i < arguments.length; i++) {
          arg = '';
          if (typeof arguments[i] === 'object') {
            arg += '\n[' + i + '] ';
            for (var key in arguments[0]) {
              arg += key + ': ' + arguments[0][key] + ', ';
            }
            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }

  function set (config) {
    var prop, i;
    for (i in config) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
      '|' + (/\d{1,2}/).source);
  }

  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) &&
        !hasOwnProp(childConfig, prop) &&
        isObject(parentConfig[prop])) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }

  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  var keys;

  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function (obj) {
      var i, res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }

  var keys$1 = keys;

  var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
  };

  function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }

  var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
  };

  function longDateFormat (key) {
    var format = this._longDateFormat[key],
      formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
      return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
      return val.slice(1);
    });

    return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate () {
    return this._invalidDate;
  }

  var defaultOrdinal = '%d';
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal (number) {
    return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
  };

  function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
      output(number, withoutSuffix, string, isFuture) :
      output.replace(/%d/i, number);
  }

  function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }

  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
      normalizedProp,
      prop;

    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }

    return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
      units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }

  function makeGetSet (unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }

  function get (mom, unit) {
    return mom.isValid() ?
      mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }

  function set$1 (mom, unit, value) {
    if (mom.isValid()) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }

// MOMENTS

  function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }


  function stringSet (units, value) {
    if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units);
      for (var i = 0; i < prioritized.length; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }

  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
      Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

  var formatFunctions = {};

  var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
  function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function () {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }

    return function (mom) {
      var output = '', i;
      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }

// format date using native date object
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }

    return format;
  }

  var match1         = /\d/;            //       0 - 9
  var match2         = /\d\d/;          //      00 - 99
  var match3         = /\d{3}/;         //     000 - 999
  var match4         = /\d{4}/;         //    0000 - 9999
  var match6         = /[+-]?\d{6}/;    // -999999 - 999999
  var match1to2      = /\d\d?/;         //       0 - 99
  var match3to4      = /\d\d\d\d?/;     //     999 - 9999
  var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
  var match1to3      = /\d{1,3}/;       //       0 - 999
  var match1to4      = /\d{1,4}/;       //       0 - 9999
  var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

  var matchUnsigned  = /\d+/;           //       0 - inf
  var matchSigned    = /[+-]?\d+/;      //    -inf - inf

  var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
  var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


  var regexes = {};

  function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return (isStrict && strictRegex) ? strictRegex : regex;
    };
  }

  function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
  }

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }

  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
      token = [token];
    }
    if (isNumber(callback)) {
      func = function (input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }

  function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }

  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }

  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;

  var indexOf;

  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function (o) {
      // I know
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }

  var indexOf$1 = indexOf;

  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }

// FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });

  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });

  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  });

// ALIASES

  addUnitAlias('month', 'M');

// PRIORITY

  addUnitPriority('month', 8);

// PARSING

  addRegexToken('M',    match1to2);
  addRegexToken('MM',   match1to2, match2);
  addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });

  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });

  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });

// LOCALES

  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths (m, format) {
    if (!m) {
      return isArray(this._months) ? this._months :
        this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
      this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }

  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort (m, format) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort :
        this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
      this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'MMM') {
        ii = indexOf$1.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf$1.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf$1.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf$1.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }

// MOMENTS

  function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
      // No op
      return mom;
    }

    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        // TODO: Another silent failure?
        if (!isNumber(value)) {
          return mom;
        }
      }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }

  function getSetMonth (value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }

  function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
  }

  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ?
        this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }

  var defaultMonthsRegex = matchWord;
  function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ?
        this._monthsStrictRegex : this._monthsRegex;
    }
  }

  function computeMonthsParse () {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
      i, mom;
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

// FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });

  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });

  addFormatToken(0, ['YYYY',   4],       0, 'year');
  addFormatToken(0, ['YYYYY',  5],       0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

  addUnitAlias('year', 'y');

// PRIORITIES

  addUnitPriority('year', 1);

// PARSING

  addRegexToken('Y',      matchSigned);
  addRegexToken('YY',     match1to2, match2);
  addRegexToken('YYYY',   match1to4, match4);
  addRegexToken('YYYYY',  match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);

  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  });

// HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

// HOOKS

  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

// MOMENTS

  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear () {
    return isLeapYear(this.year());
  }

  function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
    return date;
  }

  function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
    return date;
  }

// start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
      // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
  }

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
      weekOffset = firstWeekOffset(year, dow, doy),
      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
      resYear, resDayOfYear;

    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }

    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }

  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
      resWeek, resYear;

    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }

    return {
      week: resWeek,
      year: resYear
    };
  }

  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

// FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

// PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

// PARSING

  addRegexToken('w',  match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W',  match1to2);
  addRegexToken('WW', match1to2, match2);

  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });

// HELPERS

// LOCALES

  function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
  };

  function localeFirstDayOfWeek () {
    return this._week.dow;
  }

  function localeFirstDayOfYear () {
    return this._week.doy;
  }

// MOMENTS

  function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

// FORMATTING

  addFormatToken('d', 0, 'do', 'day');

  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });

  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });

  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });

  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

// PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

// PARSING

  addRegexToken('d',    match1to2);
  addRegexToken('e',    match1to2);
  addRegexToken('E',    match1to2);
  addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });

  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });

  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  });

// HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }

    if (!isNaN(input)) {
      return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }

    return null;
  }

  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }

// LOCALES

  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays (m, format) {
    if (!m) {
      return isArray(this._weekdays) ? this._weekdays :
        this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
      this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }

  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }

  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'dddd') {
        ii = indexOf$1.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf$1.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf$1.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf$1.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf$1.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already

      mom = createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }

// MOMENTS

  function getSetDayOfWeek (input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }

  function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }

  var defaultWeekdaysRegex = matchWord;
  function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ?
        this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }

  var defaultWeekdaysShortRegex = matchWord;
  function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ?
        this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }

  var defaultWeekdaysMinRegex = matchWord;
  function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ?
        this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }


  function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
      i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }

// FORMATTING

  function hFormat() {
    return this.hours() % 12 || 12;
  }

  function kFormat() {
    return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);

  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });

  addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
      zeroFill(this.seconds(), 2);
  });

  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });

  addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
      zeroFill(this.seconds(), 2);
  });

  function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }

  meridiem('a', true);
  meridiem('A', false);

// ALIASES

  addUnitAlias('hour', 'h');

// PRIORITY
  addUnitPriority('hour', 13);

// PARSING

  function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
  }

  addRegexToken('a',  matchMeridiem);
  addRegexToken('A',  matchMeridiem);
  addRegexToken('H',  match1to2);
  addRegexToken('h',  match1to2);
  addRegexToken('k',  match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);

  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);

  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });

// LOCALES

  function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
  var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
  };

// internal storage for locale config files
  var locales = {};
  var localeFamilies = {};
  var globalLocale;

  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }
        j--;
      }
      i++;
    }
    return null;
  }

  function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
      module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        require('./locale/' + name);
        // because defineLocale currently also sets the global locale, we
        // want to undo that for lazy loaded locales
        getSetGlobalLocale(oldLocale);
      } catch (e) { }
    }
    return locales[name];
  }

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
  function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      }
      else {
        data = defineLocale(key, values);
      }

      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      }
    }

    return globalLocale._abbr;
  }

  function defineLocale (name, config) {
    if (config !== null) {
      var parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change ' +
          'an existing locale. moment.defineLocale(localeName, ' +
          'config) should only be used for creating a new locale ' +
          'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }
          localeFamilies[config.parentLocale].push({
            name: name,
            config: config
          });
          return null;
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      }

      // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.
      getSetGlobalLocale(name);


      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }

  function updateLocale(name, config) {
    if (config != null) {
      var locale, parentConfig = baseConfig;
      // MERGE
      if (locales[name] != null) {
        parentConfig = locales[name]._config;
      }
      config = mergeConfigs(parentConfig, config);
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale;

      // backwards compat for now: also set the locale
      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }

// returns locale data
  function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }

    if (!key) {
      return globalLocale;
    }

    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }

    return chooseLocale(key);
  }

  function listLocales() {
    return keys$1(locales);
  }

  function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
      overflow =
        a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
          a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
              a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                  a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                    -1;

      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
    }

    return m;
  }

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

  var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
  ];

// iso time formats and regexes
  var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
  ];

  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
  function configFromISO(config) {
    var i, l,
      string = config._i,
      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
      allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
      getParsingFlags(config).iso = true;

      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
  var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
  function configFromRFC2822(config) {
    var string, match, dayFormat,
      dateFormat, timeFormat, tzFormat;
    var timezones = {
      ' GMT': ' +0000',
      ' EDT': ' -0400',
      ' EST': ' -0500',
      ' CDT': ' -0500',
      ' CST': ' -0600',
      ' MDT': ' -0600',
      ' MST': ' -0700',
      ' PDT': ' -0700',
      ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
      .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
      .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
      .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
      dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
      dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
      timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

      // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
      if (match[1]) { // day of week given
        var momentDate = new Date(match[2]);
        var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

        if (match[1].substr(0,3) !== momentDay) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return;
        }
      }

      switch (match[5].length) {
        case 2: // military
          if (timezoneIndex === 0) {
            timezone = ' +0000';
          } else {
            timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
            timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
              (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
          }
          break;
        case 4: // Zone
          timezone = timezones[match[5]];
          break;
        default: // UT or +/-9999
          timezone = timezones[' GMT'];
      }
      match[5] = timezone;
      config._i = match.splice(1).join('');
      tzFormat = ' ZZ';
      config._f = dayFormat + dateFormat + timeFormat + tzFormat;
      configFromStringAndFormat(config);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }

// date from iso format or fallback
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }

    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
  }

  hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
  );

// Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }

  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
  function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
      return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
      config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
      config._a[MINUTE] === 0 &&
      config._a[SECOND] === 0 &&
      config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }

  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;

      var curWeek = weekOfYear(createLocal(), dow, doy);

      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

      // Default to current week.
      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from begining of week
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to begining of week
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }

// constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

// date from string and format string
  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
      i, parsedInput, tokens, token, skipped,
      stringLength = string.length,
      totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      // console.log('token', token, 'parsedInput', parsedInput,
      //         'regex', getParseRegexForToken(token, config));
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        }
        else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      }
      else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
      getParsingFlags(config).bigHour === true &&
      config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
  }


  function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
      // nothing to do
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  }

// date from string and array of format strings
  function configFromStringAndArray(config) {
    var tempConfig,
      bestMoment,

      scoreToBeat,
      i,
      currentScore;

    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }

    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (!isValid(tempConfig)) {
        continue;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += getParsingFlags(tempConfig).charsLeftOver;

      //or tokens
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

      getParsingFlags(tempConfig).score = currentScore;

      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }

    extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
    if (config._d) {
      return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });

    configFromArray(config);
  }

  function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }

    return res;
  }

  function prepareConfig (config) {
    var input = config._i,
      format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
      return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    }  else {
      configFromInput(config);
    }

    if (!isValid(config)) {
      config._d = null;
    }

    return config;
  }

  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }

  function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
      (isArray(input) && input.length === 0)) {
      input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
  }

  function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );

  var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }
  );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }

// TODO: Use [].sort instead?
  function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
  }

  function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
  }

  var now = function () {
    return Date.now ? Date.now() : +(new Date());
  };

  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

  function isDurationValid(m) {
    for (var key in m) {
      if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }
        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }

    return true;
  }

  function isValid$1() {
    return this._isValid;
  }

  function createInvalid$1() {
    return createDuration(NaN);
  }

  function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
      seconds * 1e3 + // 1000
      minutes * 6e4 + // 1000 * 60
      hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
      weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
      quarters * 3 +
      years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
  }

  function isDuration (obj) {
    return obj instanceof Duration;
  }

  function absRound (number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }

// FORMATTING

  function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset();
      var sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
  }

  offset('Z', ':');
  offset('ZZ', '');

// PARSING

  addRegexToken('Z',  matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
      return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
  }

// Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(res._d.valueOf() + diff);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }

  function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
  function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
      localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }

  function getSetZone (input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }

      this.utcOffset(input, keepLocalTime);

      return this;
    } else {
      return -this.utcOffset();
    }
  }

  function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }

  function setOffsetToParsedOffset () {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      }
      else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }

  function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime () {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }

  function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
      var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() &&
        compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }

    return this._isDSTShifted;
  }

  function isLocal () {
    return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
  }

  function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

// ASP.NET json date format regex
  var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
  var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

  function createDuration (input, key) {
    var duration = input,
      // matching against regexp is expensive, do it on demand
      match = null,
      sign,
      ret,
      diffRes;

    if (isDuration(input)) {
      duration = {
        ms : input._milliseconds,
        d  : input._days,
        M  : input._months
      };
    } else if (isNumber(input)) {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y  : 0,
        d  : toInt(match[DATE])                         * sign,
        h  : toInt(match[HOUR])                         * sign,
        m  : toInt(match[MINUTE])                       * sign,
        s  : toInt(match[SECOND])                       * sign,
        ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y : parseIso(match[2], sign),
        M : parseIso(match[3], sign),
        w : parseIso(match[4], sign),
        d : parseIso(match[5], sign),
        h : parseIso(match[6], sign),
        m : parseIso(match[7], sign),
        s : parseIso(match[8], sign)
      };
    } else if (duration == null) {// checks for null or undefined
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }

    return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
      (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
  }

  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }

    return res;
  }

// TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;
      //invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
          'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
        tmp = val; val = period; period = tmp;
      }

      val = typeof val === 'string' ? +val : val;
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }

  function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
      days = absRound(duration._days),
      months = absRound(duration._months);

    if (!mom.isValid()) {
      // No op
      return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }

  var add      = createAdder(1, 'add');
  var subtract = createAdder(-1, 'subtract');

  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
      diff < -1 ? 'lastWeek' :
        diff < 0 ? 'lastDay' :
          diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
              diff < 7 ? 'nextWeek' : 'sameElse';
  }

  function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
      sod = cloneWithOffset(now, this).startOf('day'),
      format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }

  function clone () {
    return new Moment(this);
  }

  function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }

  function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }

  function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
      (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
  }

  function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
      inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }

  function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
  }

  function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
  }

  function diff (input, units, asFloat) {
    var that,
      zoneDelta,
      delta, output;

    if (!this.isValid()) {
      return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
      return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
      output = monthDiff(this, that);
      if (units === 'quarter') {
        output = output / 3;
      } else if (units === 'year') {
        output = output / 12;
      }
    } else {
      delta = this - that;
      output = units === 'second' ? delta / 1e3 : // 1000
        units === 'minute' ? delta / 6e4 : // 1000 * 60
          units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
              units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
    }
    return asFloat ? output : absFloor(output);
  }

  function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
      // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
      anchor2, adjust;

    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString() {
    if (!this.isValid()) {
      return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
  }

  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */
  function inspect () {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
  }

  function format (inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  function from (time, withoutSuffix) {
    if (this.isValid() &&
      ((isMoment(time) && time.isValid()) ||
        createLocal(time).isValid())) {
      return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  function to (time, withoutSuffix) {
    if (this.isValid() &&
      ((isMoment(time) && time.isValid()) ||
        createLocal(time).isValid())) {
      return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
  function locale (key) {
    var newLocaleData;

    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }

  var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }
  );

  function localeData () {
    return this._locale;
  }

  function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
      case 'year':
        this.month(0);
      /* falls through */
      case 'quarter':
      case 'month':
        this.date(1);
      /* falls through */
      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0);
      /* falls through */
      case 'hour':
        this.minutes(0);
      /* falls through */
      case 'minute':
        this.seconds(0);
      /* falls through */
      case 'second':
        this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
      this.weekday(0);
    }
    if (units === 'isoWeek') {
      this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
  }

  function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
      return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
      units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
  }

  function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
  }

  function unix () {
    return Math.floor(this.valueOf() / 1000);
  }

  function toDate () {
    return new Date(this.valueOf());
  }

  function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }

  function toObject () {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }

  function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2 () {
    return isValid(this);
  }

  function parsingFlags () {
    return extend({}, getParsingFlags(this));
  }

  function invalidAt () {
    return getParsingFlags(this).overflow;
  }

  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }

// FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });

  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg',     'weekYear');
  addWeekYearFormatToken('ggggg',    'weekYear');
  addWeekYearFormatToken('GGGG',  'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);


// PARSING

  addRegexToken('G',      matchSigned);
  addRegexToken('g',      matchSigned);
  addRegexToken('GG',     match1to2, match2);
  addRegexToken('gg',     match1to2, match2);
  addRegexToken('GGGG',   match1to4, match4);
  addRegexToken('gggg',   match1to4, match4);
  addRegexToken('GGGGG',  match1to6, match6);
  addRegexToken('ggggg',  match1to6, match6);

  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });

  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  });

// MOMENTS

  function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
      input,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy);
  }

  function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
      input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }

  function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
  }

  function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
      date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }

// FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

  addUnitAlias('quarter', 'Q');

// PRIORITY

  addUnitPriority('quarter', 7);

// PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });

// MOMENTS

  function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }

// FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

  addUnitAlias('date', 'D');

// PRIOROITY
  addUnitPriority('date', 9);

// PARSING

  addRegexToken('D',  match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
  });

  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
  });

// MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

  addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
  addUnitPriority('dayOfYear', 4);

// PARSING

  addRegexToken('DDD',  match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  });

// HELPERS

// MOMENTS

  function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
  }

// FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

  addUnitAlias('minute', 'm');

// PRIORITY

  addUnitPriority('minute', 14);

// PARSING

  addRegexToken('m',  match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

  var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

  addUnitAlias('second', 's');

// PRIORITY

  addUnitPriority('second', 15);

// PARSING

  addRegexToken('s',  match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

// MOMENTS

  var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });

  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });

  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  });


// ALIASES

  addUnitAlias('millisecond', 'ms');

// PRIORITY

  addUnitPriority('millisecond', 16);

// PARSING

  addRegexToken('S',    match1to3, match1);
  addRegexToken('SS',   match1to3, match2);
  addRegexToken('SSS',  match1to3, match3);

  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
// MOMENTS

  var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

  addFormatToken('z',  0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

  function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
  }

  function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;

  proto.add               = add;
  proto.calendar          = calendar$1;
  proto.clone             = clone;
  proto.diff              = diff;
  proto.endOf             = endOf;
  proto.format            = format;
  proto.from              = from;
  proto.fromNow           = fromNow;
  proto.to                = to;
  proto.toNow             = toNow;
  proto.get               = stringGet;
  proto.invalidAt         = invalidAt;
  proto.isAfter           = isAfter;
  proto.isBefore          = isBefore;
  proto.isBetween         = isBetween;
  proto.isSame            = isSame;
  proto.isSameOrAfter     = isSameOrAfter;
  proto.isSameOrBefore    = isSameOrBefore;
  proto.isValid           = isValid$2;
  proto.lang              = lang;
  proto.locale            = locale;
  proto.localeData        = localeData;
  proto.max               = prototypeMax;
  proto.min               = prototypeMin;
  proto.parsingFlags      = parsingFlags;
  proto.set               = stringSet;
  proto.startOf           = startOf;
  proto.subtract          = subtract;
  proto.toArray           = toArray;
  proto.toObject          = toObject;
  proto.toDate            = toDate;
  proto.toISOString       = toISOString;
  proto.inspect           = inspect;
  proto.toJSON            = toJSON;
  proto.toString          = toString;
  proto.unix              = unix;
  proto.valueOf           = valueOf;
  proto.creationData      = creationData;

// Year
  proto.year       = getSetYear;
  proto.isLeapYear = getIsLeapYear;

// Week Year
  proto.weekYear    = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;

// Quarter
  proto.quarter = proto.quarters = getSetQuarter;

// Month
  proto.month       = getSetMonth;
  proto.daysInMonth = getDaysInMonth;

// Week
  proto.week           = proto.weeks        = getSetWeek;
  proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
  proto.weeksInYear    = getWeeksInYear;
  proto.isoWeeksInYear = getISOWeeksInYear;

// Day
  proto.date       = getSetDayOfMonth;
  proto.day        = proto.days             = getSetDayOfWeek;
  proto.weekday    = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear  = getSetDayOfYear;

// Hour
  proto.hour = proto.hours = getSetHour;

// Minute
  proto.minute = proto.minutes = getSetMinute;

// Second
  proto.second = proto.seconds = getSetSecond;

// Millisecond
  proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
  proto.utcOffset            = getSetOffset;
  proto.utc                  = setOffsetToUTC;
  proto.local                = setOffsetToLocal;
  proto.parseZone            = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST                = isDaylightSavingTime;
  proto.isLocal              = isLocal;
  proto.isUtcOffset          = isUtcOffset;
  proto.isUtc                = isUtc;
  proto.isUTC                = isUtc;

// Timezone
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;

// Deprecations
  proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

  function createUnix (input) {
    return createLocal(input * 1000);
  }

  function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat (string) {
    return string;
  }

  var proto$1 = Locale.prototype;

  proto$1.calendar        = calendar;
  proto$1.longDateFormat  = longDateFormat;
  proto$1.invalidDate     = invalidDate;
  proto$1.ordinal         = ordinal;
  proto$1.preparse        = preParsePostFormat;
  proto$1.postformat      = preParsePostFormat;
  proto$1.relativeTime    = relativeTime;
  proto$1.pastFuture      = pastFuture;
  proto$1.set             = set;

// Month
  proto$1.months            =        localeMonths;
  proto$1.monthsShort       =        localeMonthsShort;
  proto$1.monthsParse       =        localeMonthsParse;
  proto$1.monthsRegex       = monthsRegex;
  proto$1.monthsShortRegex  = monthsShortRegex;

// Week
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
  proto$1.weekdays       =        localeWeekdays;
  proto$1.weekdaysMin    =        localeWeekdaysMin;
  proto$1.weekdaysShort  =        localeWeekdaysShort;
  proto$1.weekdaysParse  =        localeWeekdaysParse;

  proto$1.weekdaysRegex       =        weekdaysRegex;
  proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
  proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }

  function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';

    if (index != null) {
      return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }
    return out;
  }

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
  function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    }

    var locale = getLocale(),
      shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }

  function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
      var b = number % 10,
        output = (toInt(number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
              (b === 3) ? 'rd' : 'th';
      return number + output;
    }
  });

// Side effect imports
  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

  var mathAbs = Math.abs;

  function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
  }

  function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
  }

// supports only 2.0-style add(1, 's') or add(duration)
  function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
  }

// supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
  }

  function absCeil (number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }

  function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
  }

  function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }

  function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }

  function as (units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
      days   = this._days   + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week'   : return days / 7     + milliseconds / 6048e5;
        case 'day'    : return days         + milliseconds / 864e5;
        case 'hour'   : return days * 24    + milliseconds / 36e5;
        case 'minute' : return days * 1440  + milliseconds / 6e4;
        case 'second' : return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here
        case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
        default: throw new Error('Unknown unit ' + units);
      }
    }
  }

// TODO: Use this.as('ms')?
  function valueOf$1 () {
    if (!this.isValid()) {
      return NaN;
    }
    return (
      this._milliseconds +
      this._days * 864e5 +
      (this._months % 12) * 2592e6 +
      toInt(this._months / 12) * 31536e6
    );
  }

  function makeAs (alias) {
    return function () {
      return this.as(alias);
    };
  }

  var asMilliseconds = makeAs('ms');
  var asSeconds      = makeAs('s');
  var asMinutes      = makeAs('m');
  var asHours        = makeAs('h');
  var asDays         = makeAs('d');
  var asWeeks        = makeAs('w');
  var asMonths       = makeAs('M');
  var asYears        = makeAs('y');

  function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }

  var milliseconds = makeGetter('milliseconds');
  var seconds      = makeGetter('seconds');
  var minutes      = makeGetter('minutes');
  var hours        = makeGetter('hours');
  var days         = makeGetter('days');
  var months       = makeGetter('months');
  var years        = makeGetter('years');

  function weeks () {
    return absFloor(this.days() / 7);
  }

  var round = Math.round;
  var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
  };

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
      seconds < thresholds.s   && ['ss', seconds] ||
      minutes <= 1             && ['m']           ||
      minutes < thresholds.m   && ['mm', minutes] ||
      hours   <= 1             && ['h']           ||
      hours   < thresholds.h   && ['hh', hours]   ||
      days    <= 1             && ['d']           ||
      days    < thresholds.d   && ['dd', days]    ||
      months  <= 1             && ['M']           ||
      months  < thresholds.M   && ['MM', months]  ||
      years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }

// This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }
    if (typeof(roundingFunction) === 'function') {
      round = roundingFunction;
      return true;
    }
    return false;
  }

// This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }
    return true;
  }

  function humanize (withSuffix) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    return (total < 0 ? '-' : '') +
      'P' +
      (Y ? Y + 'Y' : '') +
      (M ? M + 'M' : '') +
      (D ? D + 'D' : '') +
      ((h || m || s) ? 'T' : '') +
      (h ? h + 'H' : '') +
      (m ? m + 'M' : '') +
      (s ? s + 'S' : '');
  }

  var proto$2 = Duration.prototype;

  proto$2.isValid        = isValid$1;
  proto$2.abs            = abs;
  proto$2.add            = add$1;
  proto$2.subtract       = subtract$1;
  proto$2.as             = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds      = asSeconds;
  proto$2.asMinutes      = asMinutes;
  proto$2.asHours        = asHours;
  proto$2.asDays         = asDays;
  proto$2.asWeeks        = asWeeks;
  proto$2.asMonths       = asMonths;
  proto$2.asYears        = asYears;
  proto$2.valueOf        = valueOf$1;
  proto$2._bubble        = bubble;
  proto$2.get            = get$2;
  proto$2.milliseconds   = milliseconds;
  proto$2.seconds        = seconds;
  proto$2.minutes        = minutes;
  proto$2.hours          = hours;
  proto$2.days           = days;
  proto$2.weeks          = weeks;
  proto$2.months         = months;
  proto$2.years          = years;
  proto$2.humanize       = humanize;
  proto$2.toISOString    = toISOString$1;
  proto$2.toString       = toISOString$1;
  proto$2.toJSON         = toISOString$1;
  proto$2.locale         = locale;
  proto$2.localeData     = localeData;

// Deprecations
  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang;

// Side effect imports

// FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

// PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  });

// Side effect imports


  hooks.version = '2.18.1';

  setHookCallback(createLocal);

  hooks.fn                    = proto;
  hooks.min                   = min;
  hooks.max                   = max;
  hooks.now                   = now;
  hooks.utc                   = createUTC;
  hooks.unix                  = createUnix;
  hooks.months                = listMonths;
  hooks.isDate                = isDate;
  hooks.locale                = getSetGlobalLocale;
  hooks.invalid               = createInvalid;
  hooks.duration              = createDuration;
  hooks.isMoment              = isMoment;
  hooks.weekdays              = listWeekdays;
  hooks.parseZone             = createInZone;
  hooks.localeData            = getLocale;
  hooks.isDuration            = isDuration;
  hooks.monthsShort           = listMonthsShort;
  hooks.weekdaysMin           = listWeekdaysMin;
  hooks.defineLocale          = defineLocale;
  hooks.updateLocale          = updateLocale;
  hooks.locales               = listLocales;
  hooks.weekdaysShort         = listWeekdaysShort;
  hooks.normalizeUnits        = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat        = getCalendarFormat;
  hooks.prototype             = proto;

  return hooks;

})));
},{}],6:[function(require,module,exports){
/**
 * pubsub.js
 *
 * A tiny, optimized, tested, standalone and robust
 * pubsub implementation supporting different javascript environments
 *
 * @author Federico "Lox" Lucignano <http://plus.ly/federico.lox>
 *
 * @see https://github.com/federico-lox/pubsub.js
 */

/*global define, module*/
(function (context) {

  /**
   * @private
   */
  function init() {
    //the channel subscription hash
    var channels = {},
    //help minification
      funcType = Function;

    return {
      /*
       * @public
       *
       * Publish some data on a channel
       *
       * @param String channel The channel to publish on
       * @param Mixed argument The data to publish, the function supports
       * as many data parameters as needed
       *
       * @example Publish stuff on '/some/channel'.
       * Anything subscribed will be called with a function
       * signature like: function(a,b,c){ ... }
       *
       * PubSub.publish(
       *		"/some/channel", "a", "b",
       *		{total: 10, min: 1, max: 3}
       * );
       */
      publish: function () {
        //help minification
        var args = arguments,
        // args[0] is the channel
          subs = channels[args[0]],
          len,
          params,
          x;

        if (subs) {
          len = subs.length;
          params = (args.length > 1) ?
            Array.prototype.splice.call(args, 1) : [];

          //run the callbacks asynchronously,
          //do not block the main execution process
          setTimeout(
            function () {
              //executes callbacks in the order
              //in which they were registered
              for (x = 0; x < len; x += 1) {
                subs[x].apply(context, params);
              }

              //clear references to allow garbage collection
              subs = context = params = null;
            },
            0
          );
        }
      },

      /*
       * @public
       *
       * Register a callback on a channel
       *
       * @param String channel The channel to subscribe to
       * @param Function callback The event handler, any time something is
       * published on a subscribed channel, the callback will be called
       * with the published array as ordered arguments
       *
       * @return Array A handle which can be used to unsubscribe this
       * particular subscription
       *
       * @example PubSub.subscribe(
       *				"/some/channel",
       *				function(a, b, c){ ... }
       *			);
       */
      subscribe: function (channel, callback) {
        if (typeof channel !== 'string') {
          throw "invalid or missing channel";
        }

        if (!(callback instanceof funcType)) {
          throw "invalid or missing callback";
        }

        if (!channels[channel]) {
          channels[channel] = [];
        }

        channels[channel].push(callback);

        return {channel: channel, callback: callback};
      },

      /*
       * @public
       *
       * Disconnect a subscribed function f.
       *
       * @param Mixed handle The return value from a subscribe call or the
       * name of a channel as a String
       * @param Function callback [OPTIONAL] The event handler originaally
       * registered, not needed if handle contains the return value
       * of subscribe
       *
       * @example
       * var handle = PubSub.subscribe("/some/channel", function(){});
       * PubSub.unsubscribe(handle);
       *
       * or
       *
       * PubSub.unsubscribe("/some/channel", callback);
       */
      unsubscribe: function (handle, callback) {
        if (handle.channel && handle.callback) {
          callback = handle.callback;
          handle = handle.channel;
        }

        if (typeof handle !== 'string') {
          throw "invalid or missing channel";
        }

        if (!(callback instanceof funcType)) {
          throw "invalid or missing callback";
        }

        var subs = channels[handle],
          x,
          y = (subs instanceof Array) ? subs.length : 0;

        for (x = 0; x < y; x += 1) {
          if (subs[x] === callback) {
            subs.splice(x, 1);
            break;
          }
        }
      }
    };
  }

  //UMD
  if (typeof define === 'function' && define.amd) {
    //AMD module
    define('pubsub', init);
  } else if (typeof module === 'object' && module.exports) {
    //CommonJS module
    module.exports = init();
  } else {
    //traditional namespace
    context.PubSub = init();
  }
}(this));
},{}],7:[function(require,module,exports){
// Spectrum Colorpicker v1.8.0
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

!function($, undefined) {

  var defaultOpts = {

      // Callbacks
      beforeShow: noop,
      move: noop,
      change: noop,
      show: noop,
      hide: noop,

      // Options
      color: false,
      flat: false,
      showInput: false,
      allowEmpty: false,
      showButtons: true,
      clickoutFiresChange: true,
      showInitial: false,
      showPalette: false,
      showPaletteOnly: false,
      hideAfterPaletteSelect: false,
      togglePaletteOnly: false,
      showSelectionPalette: true,
      localStorageKey: false,
      appendTo: "body",
      maxSelectionSize: 7,
      cancelText: "cancel",
      chooseText: "choose",
      togglePaletteMoreText: "more",
      togglePaletteLessText: "less",
      clearText: "Clear Color Selection",
      noColorSelectedText: "No Color Selected",
      preferredFormat: false,
      className: "", // Deprecated - use containerClassName and replacerClassName instead.
      containerClassName: "",
      replacerClassName: "",
      showAlpha: false,
      theme: "sp-light",
      palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
      selectionPalette: [],
      disabled: false,
      offset: null
    },
    spectrums = [],
    IE = !!/msie/i.exec( window.navigator.userAgent ),
    rgbaSupport = (function() {
      function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
      }

      var elem = document.createElement('div');
      var style = elem.style;
      style.cssText = 'background-color:rgba(0,0,0,.5)';
      return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    })(),
    replaceInput = [
      "<div class='sp-replacer'>",
      "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
      "<div class='sp-dd'>&#9660;</div>",
      "</div>"
    ].join(''),
    markup = (function () {

      // IE does not support gradients with multiple stops, so we need to simulate
      //  that for the rainbow slider with 8 divs that each have a single gradient
      var gradientFix = "";
      if (IE) {
        for (var i = 1; i <= 6; i++) {
          gradientFix += "<div class='sp-" + i + "'></div>";
        }
      }

      return [
        "<div class='sp-container sp-hidden'>",
        "<div class='sp-palette-container'>",
        "<div class='sp-palette sp-thumb sp-cf'></div>",
        "<div class='sp-palette-button-container sp-cf'>",
        "<button type='button' class='sp-palette-toggle'></button>",
        "</div>",
        "</div>",
        "<div class='sp-picker-container'>",
        "<div class='sp-top sp-cf'>",
        "<div class='sp-fill'></div>",
        "<div class='sp-top-inner'>",
        "<div class='sp-color'>",
        "<div class='sp-sat'>",
        "<div class='sp-val'>",
        "<div class='sp-dragger'></div>",
        "</div>",
        "</div>",
        "</div>",
        "<div class='sp-clear sp-clear-display'>",
        "</div>",
        "<div class='sp-hue'>",
        "<div class='sp-slider'></div>",
        gradientFix,
        "</div>",
        "</div>",
        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
        "</div>",
        "<div class='sp-input-container sp-cf'>",
        "<input class='sp-input' type='text' spellcheck='false'  />",
        "</div>",
        "<div class='sp-initial sp-thumb sp-cf'></div>",
        "<div class='sp-button-container sp-cf'>",
        "<a class='sp-cancel' href='#'></a>",
        "<button type='button' class='sp-choose'></button>",
        "</div>",
        "</div>",
        "</div>"
      ].join("");
    })();

  function paletteTemplate (p, color, className, opts) {
    var html = [];
    for (var i = 0; i < p.length; i++) {
      var current = p[i];
      if(current) {
        var tiny = tinycolor(current);
        var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
        c += (tinycolor.equals(color, current)) ? " sp-thumb-active" : "";
        var formattedString = tiny.toString(opts.preferredFormat || "rgb");
        var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
        html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
      } else {
        var cls = 'sp-clear-display';
        html.push($('<div />')
          .append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>')
            .attr('title', opts.noColorSelectedText)
          )
          .html()
        );
      }
    }
    return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
  }

  function hideAll() {
    for (var i = 0; i < spectrums.length; i++) {
      if (spectrums[i]) {
        spectrums[i].hide();
      }
    }
  }

  function instanceOptions(o, callbackContext) {
    var opts = $.extend({}, defaultOpts, o);
    opts.callbacks = {
      'move': bind(opts.move, callbackContext),
      'change': bind(opts.change, callbackContext),
      'show': bind(opts.show, callbackContext),
      'hide': bind(opts.hide, callbackContext),
      'beforeShow': bind(opts.beforeShow, callbackContext)
    };

    return opts;
  }

  function spectrum(element, o) {

    var opts = instanceOptions(o, element),
      flat = opts.flat,
      showSelectionPalette = opts.showSelectionPalette,
      localStorageKey = opts.localStorageKey,
      theme = opts.theme,
      callbacks = opts.callbacks,
      resize = throttle(reflow, 10),
      visible = false,
      isDragging = false,
      dragWidth = 0,
      dragHeight = 0,
      dragHelperHeight = 0,
      slideHeight = 0,
      slideWidth = 0,
      alphaWidth = 0,
      alphaSlideHelperWidth = 0,
      slideHelperHeight = 0,
      currentHue = 0,
      currentSaturation = 0,
      currentValue = 0,
      currentAlpha = 1,
      palette = [],
      paletteArray = [],
      paletteLookup = {},
      selectionPalette = opts.selectionPalette.slice(0),
      maxSelectionSize = opts.maxSelectionSize,
      draggingClass = "sp-dragging",
      shiftMovementDirection = null;

    var doc = element.ownerDocument,
      body = doc.body,
      boundElement = $(element),
      disabled = false,
      container = $(markup, doc).addClass(theme),
      pickerContainer = container.find(".sp-picker-container"),
      dragger = container.find(".sp-color"),
      dragHelper = container.find(".sp-dragger"),
      slider = container.find(".sp-hue"),
      slideHelper = container.find(".sp-slider"),
      alphaSliderInner = container.find(".sp-alpha-inner"),
      alphaSlider = container.find(".sp-alpha"),
      alphaSlideHelper = container.find(".sp-alpha-handle"),
      textInput = container.find(".sp-input"),
      paletteContainer = container.find(".sp-palette"),
      initialColorContainer = container.find(".sp-initial"),
      cancelButton = container.find(".sp-cancel"),
      clearButton = container.find(".sp-clear"),
      chooseButton = container.find(".sp-choose"),
      toggleButton = container.find(".sp-palette-toggle"),
      isInput = boundElement.is("input"),
      isInputTypeColor = isInput && boundElement.attr("type") === "color" && inputTypeColorSupport(),
      shouldReplace = isInput && !flat,
      replacer = (shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
      offsetElement = (shouldReplace) ? replacer : boundElement,
      previewElement = replacer.find(".sp-preview-inner"),
      initialColor = opts.color || (isInput && boundElement.val()),
      colorOnShow = false,
      currentPreferredFormat = opts.preferredFormat,
      clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
      isEmpty = !initialColor,
      allowEmpty = opts.allowEmpty && !isInputTypeColor;

    function applyOptions() {

      if (opts.showPaletteOnly) {
        opts.showPalette = true;
      }

      toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);

      if (opts.palette) {
        palette = opts.palette.slice(0);
        paletteArray = $.isArray(palette[0]) ? palette : [palette];
        paletteLookup = {};
        for (var i = 0; i < paletteArray.length; i++) {
          for (var j = 0; j < paletteArray[i].length; j++) {
            var rgb = tinycolor(paletteArray[i][j]).toRgbString();
            paletteLookup[rgb] = true;
          }
        }
      }

      container.toggleClass("sp-flat", flat);
      container.toggleClass("sp-input-disabled", !opts.showInput);
      container.toggleClass("sp-alpha-enabled", opts.showAlpha);
      container.toggleClass("sp-clear-enabled", allowEmpty);
      container.toggleClass("sp-buttons-disabled", !opts.showButtons);
      container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
      container.toggleClass("sp-palette-disabled", !opts.showPalette);
      container.toggleClass("sp-palette-only", opts.showPaletteOnly);
      container.toggleClass("sp-initial-disabled", !opts.showInitial);
      container.addClass(opts.className).addClass(opts.containerClassName);

      reflow();
    }

    function initialize() {

      if (IE) {
        container.find("*:not(input)").attr("unselectable", "on");
      }

      applyOptions();

      if (shouldReplace) {
        boundElement.after(replacer).hide();
      }

      if (!allowEmpty) {
        clearButton.hide();
      }

      if (flat) {
        boundElement.after(container).hide();
      }
      else {

        var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
        if (appendTo.length !== 1) {
          appendTo = $("body");
        }

        appendTo.append(container);
      }

      updateSelectionPaletteFromStorage();

      offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
        if (!disabled) {
          toggle();
        }

        e.stopPropagation();

        if (!$(e.target).is("input")) {
          e.preventDefault();
        }
      });

      if(boundElement.is(":disabled") || (opts.disabled === true)) {
        disable();
      }

      // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
      container.click(stopPropagation);

      // Handle user typed input
      textInput.change(setFromTextInput);
      textInput.bind("paste", function () {
        setTimeout(setFromTextInput, 1);
      });
      textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

      cancelButton.text(opts.cancelText);
      cancelButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();
        revert();
        hide();
      });

      clearButton.attr("title", opts.clearText);
      clearButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();
        isEmpty = true;
        move();

        if(flat) {
          //for the flat style, this is a change event
          updateOriginalInput(true);
        }
      });

      chooseButton.text(opts.chooseText);
      chooseButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (IE && textInput.is(":focus")) {
          textInput.trigger('change');
        }

        if (isValid()) {
          updateOriginalInput(true);
          hide();
        }
      });

      toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
      toggleButton.bind("click.spectrum", function (e) {
        e.stopPropagation();
        e.preventDefault();

        opts.showPaletteOnly = !opts.showPaletteOnly;

        // To make sure the Picker area is drawn on the right, next to the
        // Palette area (and not below the palette), first move the Palette
        // to the left to make space for the picker, plus 5px extra.
        // The 'applyOptions' function puts the whole container back into place
        // and takes care of the button-text and the sp-palette-only CSS class.
        if (!opts.showPaletteOnly && !flat) {
          container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
        }
        applyOptions();
      });

      draggable(alphaSlider, function (dragX, dragY, e) {
        currentAlpha = (dragX / alphaWidth);
        isEmpty = false;
        if (e.shiftKey) {
          currentAlpha = Math.round(currentAlpha * 10) / 10;
        }

        move();
      }, dragStart, dragStop);

      draggable(slider, function (dragX, dragY) {
        currentHue = parseFloat(dragY / slideHeight);
        isEmpty = false;
        if (!opts.showAlpha) {
          currentAlpha = 1;
        }
        move();
      }, dragStart, dragStop);

      draggable(dragger, function (dragX, dragY, e) {

        // shift+drag should snap the movement to either the x or y axis.
        if (!e.shiftKey) {
          shiftMovementDirection = null;
        }
        else if (!shiftMovementDirection) {
          var oldDragX = currentSaturation * dragWidth;
          var oldDragY = dragHeight - (currentValue * dragHeight);
          var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

          shiftMovementDirection = furtherFromX ? "x" : "y";
        }

        var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
        var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

        if (setSaturation) {
          currentSaturation = parseFloat(dragX / dragWidth);
        }
        if (setValue) {
          currentValue = parseFloat((dragHeight - dragY) / dragHeight);
        }

        isEmpty = false;
        if (!opts.showAlpha) {
          currentAlpha = 1;
        }

        move();

      }, dragStart, dragStop);

      if (!!initialColor) {
        set(initialColor);

        // In case color was black - update the preview UI and set the format
        // since the set function will not run (default color is black).
        updateUI();
        currentPreferredFormat = opts.preferredFormat || tinycolor(initialColor).format;

        addColorToSelectionPalette(initialColor);
      }
      else {
        updateUI();
      }

      if (flat) {
        show();
      }

      function paletteElementClick(e) {
        if (e.data && e.data.ignore) {
          set($(e.target).closest(".sp-thumb-el").data("color"));
          move();
        }
        else {
          set($(e.target).closest(".sp-thumb-el").data("color"));
          move();
          updateOriginalInput(true);
          if (opts.hideAfterPaletteSelect) {
            hide();
          }
        }

        return false;
      }

      var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
      paletteContainer.delegate(".sp-thumb-el", paletteEvent, paletteElementClick);
      initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, paletteElementClick);
    }

    function updateSelectionPaletteFromStorage() {

      if (localStorageKey && window.localStorage) {

        // Migrate old palettes over to new format.  May want to remove this eventually.
        try {
          var oldPalette = window.localStorage[localStorageKey].split(",#");
          if (oldPalette.length > 1) {
            delete window.localStorage[localStorageKey];
            $.each(oldPalette, function(i, c) {
              addColorToSelectionPalette(c);
            });
          }
        }
        catch(e) { }

        try {
          selectionPalette = window.localStorage[localStorageKey].split(";");
        }
        catch (e) { }
      }
    }

    function addColorToSelectionPalette(color) {
      if (showSelectionPalette) {
        var rgb = tinycolor(color).toRgbString();
        if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
          selectionPalette.push(rgb);
          while(selectionPalette.length > maxSelectionSize) {
            selectionPalette.shift();
          }
        }

        if (localStorageKey && window.localStorage) {
          try {
            window.localStorage[localStorageKey] = selectionPalette.join(";");
          }
          catch(e) { }
        }
      }
    }

    function getUniqueSelectionPalette() {
      var unique = [];
      if (opts.showPalette) {
        for (var i = 0; i < selectionPalette.length; i++) {
          var rgb = tinycolor(selectionPalette[i]).toRgbString();

          if (!paletteLookup[rgb]) {
            unique.push(selectionPalette[i]);
          }
        }
      }

      return unique.reverse().slice(0, opts.maxSelectionSize);
    }

    function drawPalette() {

      var currentColor = get();

      var html = $.map(paletteArray, function (palette, i) {
        return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
      });

      updateSelectionPaletteFromStorage();

      if (selectionPalette) {
        html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
      }

      paletteContainer.html(html.join(""));
    }

    function drawInitial() {
      if (opts.showInitial) {
        var initial = colorOnShow;
        var current = get();
        initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
      }
    }

    function dragStart() {
      if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
        reflow();
      }
      isDragging = true;
      container.addClass(draggingClass);
      shiftMovementDirection = null;
      boundElement.trigger('dragstart.spectrum', [ get() ]);
    }

    function dragStop() {
      isDragging = false;
      container.removeClass(draggingClass);
      boundElement.trigger('dragstop.spectrum', [ get() ]);
    }

    function setFromTextInput() {

      var value = textInput.val();

      if ((value === null || value === "") && allowEmpty) {
        set(null);
        updateOriginalInput(true);
      }
      else {
        var tiny = tinycolor(value);
        if (tiny.isValid()) {
          set(tiny);
          updateOriginalInput(true);
        }
        else {
          textInput.addClass("sp-validation-error");
        }
      }
    }

    function toggle() {
      if (visible) {
        hide();
      }
      else {
        show();
      }
    }

    function show() {
      var event = $.Event('beforeShow.spectrum');

      if (visible) {
        reflow();
        return;
      }

      boundElement.trigger(event, [ get() ]);

      if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
        return;
      }

      hideAll();
      visible = true;

      $(doc).bind("keydown.spectrum", onkeydown);
      $(doc).bind("click.spectrum", clickout);
      $(window).bind("resize.spectrum", resize);
      replacer.addClass("sp-active");
      container.removeClass("sp-hidden");

      reflow();
      updateUI();

      colorOnShow = get();

      drawInitial();
      callbacks.show(colorOnShow);
      boundElement.trigger('show.spectrum', [ colorOnShow ]);
    }

    function onkeydown(e) {
      // Close on ESC
      if (e.keyCode === 27) {
        hide();
      }
    }

    function clickout(e) {
      // Return on right click.
      if (e.button == 2) { return; }

      // If a drag event was happening during the mouseup, don't hide
      // on click.
      if (isDragging) { return; }

      if (clickoutFiresChange) {
        updateOriginalInput(true);
      }
      else {
        revert();
      }
      hide();
    }

    function hide() {
      // Return if hiding is unnecessary
      if (!visible || flat) { return; }
      visible = false;

      $(doc).unbind("keydown.spectrum", onkeydown);
      $(doc).unbind("click.spectrum", clickout);
      $(window).unbind("resize.spectrum", resize);

      replacer.removeClass("sp-active");
      container.addClass("sp-hidden");

      callbacks.hide(get());
      boundElement.trigger('hide.spectrum', [ get() ]);
    }

    function revert() {
      set(colorOnShow, true);
    }

    function set(color, ignoreFormatChange) {
      if (tinycolor.equals(color, get())) {
        // Update UI just in case a validation error needs
        // to be cleared.
        updateUI();
        return;
      }

      var newColor, newHsv;
      if (!color && allowEmpty) {
        isEmpty = true;
      } else {
        isEmpty = false;
        newColor = tinycolor(color);
        newHsv = newColor.toHsv();

        currentHue = (newHsv.h % 360) / 360;
        currentSaturation = newHsv.s;
        currentValue = newHsv.v;
        currentAlpha = newHsv.a;
      }
      updateUI();

      if (newColor && newColor.isValid() && !ignoreFormatChange) {
        currentPreferredFormat = opts.preferredFormat || newColor.getFormat();
      }
    }

    function get(opts) {
      opts = opts || { };

      if (allowEmpty && isEmpty) {
        return null;
      }

      return tinycolor.fromRatio({
        h: currentHue,
        s: currentSaturation,
        v: currentValue,
        a: Math.round(currentAlpha * 100) / 100
      }, { format: opts.format || currentPreferredFormat });
    }

    function isValid() {
      return !textInput.hasClass("sp-validation-error");
    }

    function move() {
      updateUI();

      callbacks.move(get());
      boundElement.trigger('move.spectrum', [ get() ]);
    }

    function updateUI() {

      textInput.removeClass("sp-validation-error");

      updateHelperLocations();

      // Update dragger background color (gradients take care of saturation and value).
      var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
      dragger.css("background-color", flatColor.toHexString());

      // Get a format that alpha will be included in (hex and names ignore alpha)
      var format = currentPreferredFormat;
      if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
        if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
          format = "rgb";
        }
      }

      var realColor = get({ format: format }),
        displayColor = '';

      //reset background info for preview element
      previewElement.removeClass("sp-clear-display");
      previewElement.css('background-color', 'transparent');

      if (!realColor && allowEmpty) {
        // Update the replaced elements background with icon indicating no color selection
        previewElement.addClass("sp-clear-display");
      }
      else {
        var realHex = realColor.toHexString(),
          realRgb = realColor.toRgbString();

        // Update the replaced elements background color (with actual selected color)
        if (rgbaSupport || realColor.alpha === 1) {
          previewElement.css("background-color", realRgb);
        }
        else {
          previewElement.css("background-color", "transparent");
          previewElement.css("filter", realColor.toFilter());
        }

        if (opts.showAlpha) {
          var rgb = realColor.toRgb();
          rgb.a = 0;
          var realAlpha = tinycolor(rgb).toRgbString();
          var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

          if (IE) {
            alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
          }
          else {
            alphaSliderInner.css("background", "-webkit-" + gradient);
            alphaSliderInner.css("background", "-moz-" + gradient);
            alphaSliderInner.css("background", "-ms-" + gradient);
            // Use current syntax gradient on unprefixed property.
            alphaSliderInner.css("background",
              "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
          }
        }

        displayColor = realColor.toString(format);
      }

      // Update the text entry input as it changes happen
      if (opts.showInput) {
        textInput.val(displayColor);
      }

      if (opts.showPalette) {
        drawPalette();
      }

      drawInitial();
    }

    function updateHelperLocations() {
      var s = currentSaturation;
      var v = currentValue;

      if(allowEmpty && isEmpty) {
        //if selected color is empty, hide the helpers
        alphaSlideHelper.hide();
        slideHelper.hide();
        dragHelper.hide();
      }
      else {
        //make sure helpers are visible
        alphaSlideHelper.show();
        slideHelper.show();
        dragHelper.show();

        // Where to show the little circle in that displays your current selected color
        var dragX = s * dragWidth;
        var dragY = dragHeight - (v * dragHeight);
        dragX = Math.max(
          -dragHelperHeight,
          Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
        );
        dragY = Math.max(
          -dragHelperHeight,
          Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
        );
        dragHelper.css({
          "top": dragY + "px",
          "left": dragX + "px"
        });

        var alphaX = currentAlpha * alphaWidth;
        alphaSlideHelper.css({
          "left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
        });

        // Where to show the bar that displays your current selected hue
        var slideY = (currentHue) * slideHeight;
        slideHelper.css({
          "top": (slideY - slideHelperHeight) + "px"
        });
      }
    }

    function updateOriginalInput(fireCallback) {
      var color = get(),
        displayColor = '',
        hasChanged = !tinycolor.equals(color, colorOnShow);

      if (color) {
        displayColor = color.toString(currentPreferredFormat);
        // Update the selection palette with the current color
        addColorToSelectionPalette(color);
      }

      if (isInput) {
        boundElement.val(displayColor);
      }

      if (fireCallback && hasChanged) {
        callbacks.change(color);
        boundElement.trigger('change', [ color ]);
      }
    }

    function reflow() {
      if (!visible) {
        return; // Calculations would be useless and wouldn't be reliable anyways
      }
      dragWidth = dragger.width();
      dragHeight = dragger.height();
      dragHelperHeight = dragHelper.height();
      slideWidth = slider.width();
      slideHeight = slider.height();
      slideHelperHeight = slideHelper.height();
      alphaWidth = alphaSlider.width();
      alphaSlideHelperWidth = alphaSlideHelper.width();

      if (!flat) {
        container.css("position", "absolute");
        if (opts.offset) {
          container.offset(opts.offset);
        } else {
          container.offset(getOffset(container, offsetElement));
        }
      }

      updateHelperLocations();

      if (opts.showPalette) {
        drawPalette();
      }

      boundElement.trigger('reflow.spectrum');
    }

    function destroy() {
      boundElement.show();
      offsetElement.unbind("click.spectrum touchstart.spectrum");
      container.remove();
      replacer.remove();
      spectrums[spect.id] = null;
    }

    function option(optionName, optionValue) {
      if (optionName === undefined) {
        return $.extend({}, opts);
      }
      if (optionValue === undefined) {
        return opts[optionName];
      }

      opts[optionName] = optionValue;

      if (optionName === "preferredFormat") {
        currentPreferredFormat = opts.preferredFormat;
      }
      applyOptions();
    }

    function enable() {
      disabled = false;
      boundElement.attr("disabled", false);
      offsetElement.removeClass("sp-disabled");
    }

    function disable() {
      hide();
      disabled = true;
      boundElement.attr("disabled", true);
      offsetElement.addClass("sp-disabled");
    }

    function setOffset(coord) {
      opts.offset = coord;
      reflow();
    }

    initialize();

    var spect = {
      show: show,
      hide: hide,
      toggle: toggle,
      reflow: reflow,
      option: option,
      enable: enable,
      disable: disable,
      offset: setOffset,
      set: function (c) {
        set(c);
        updateOriginalInput();
      },
      get: get,
      destroy: destroy,
      container: container
    };

    spect.id = spectrums.push(spect) - 1;

    return spect;
  }

  /**
   * checkOffset - get the offset below/above and left/right element depending on screen position
   * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
   */
  function getOffset(picker, input) {
    var extraY = 0;
    var dpWidth = picker.outerWidth();
    var dpHeight = picker.outerHeight();
    var inputHeight = input.outerHeight();
    var doc = picker[0].ownerDocument;
    var docElem = doc.documentElement;
    var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
    var viewHeight = docElem.clientHeight + $(doc).scrollTop();
    var offset = input.offset();
    offset.top += inputHeight;

    offset.left -=
      Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
        Math.abs(offset.left + dpWidth - viewWidth) : 0);

    offset.top -=
      Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
        Math.abs(dpHeight + inputHeight - extraY) : extraY));

    return offset;
  }

  /**
   * noop - do nothing
   */
  function noop() {

  }

  /**
   * stopPropagation - makes the code only doing this a little easier to read in line
   */
  function stopPropagation(e) {
    e.stopPropagation();
  }

  /**
   * Create a function bound to a given object
   * Thanks to underscore.js
   */
  function bind(func, obj) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 2);
    return function () {
      return func.apply(obj, args.concat(slice.call(arguments)));
    };
  }

  /**
   * Lightweight drag helper.  Handles containment within the element, so that
   * when dragging, the x is within [0,element.width] and y is within [0,element.height]
   */
  function draggable(element, onmove, onstart, onstop) {
    onmove = onmove || function () { };
    onstart = onstart || function () { };
    onstop = onstop || function () { };
    var doc = document;
    var dragging = false;
    var offset = {};
    var maxHeight = 0;
    var maxWidth = 0;
    var hasTouch = ('ontouchstart' in window);

    var duringDragEvents = {};
    duringDragEvents["selectstart"] = prevent;
    duringDragEvents["dragstart"] = prevent;
    duringDragEvents["touchmove mousemove"] = move;
    duringDragEvents["touchend mouseup"] = stop;

    function prevent(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.returnValue = false;
    }

    function move(e) {
      if (dragging) {
        // Mouseup happened outside of window
        if (IE && doc.documentMode < 9 && !e.button) {
          return stop();
        }

        var t0 = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0];
        var pageX = t0 && t0.pageX || e.pageX;
        var pageY = t0 && t0.pageY || e.pageY;

        var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
        var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

        if (hasTouch) {
          // Stop scrolling in iOS
          prevent(e);
        }

        onmove.apply(element, [dragX, dragY, e]);
      }
    }

    function start(e) {
      var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);

      if (!rightclick && !dragging) {
        if (onstart.apply(element, arguments) !== false) {
          dragging = true;
          maxHeight = $(element).height();
          maxWidth = $(element).width();
          offset = $(element).offset();

          $(doc).bind(duringDragEvents);
          $(doc.body).addClass("sp-dragging");

          move(e);

          prevent(e);
        }
      }
    }

    function stop() {
      if (dragging) {
        $(doc).unbind(duringDragEvents);
        $(doc.body).removeClass("sp-dragging");

        // Wait a tick before notifying observers to allow the click event
        // to fire in Chrome.
        setTimeout(function() {
          onstop.apply(element, arguments);
        }, 0);
      }
      dragging = false;
    }

    $(element).bind("touchstart mousedown", start);
  }

  function throttle(func, wait, debounce) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var throttler = function () {
        timeout = null;
        func.apply(context, args);
      };
      if (debounce) clearTimeout(timeout);
      if (debounce || !timeout) timeout = setTimeout(throttler, wait);
    };
  }

  function inputTypeColorSupport() {
    return $.fn.spectrum.inputTypeColorSupport();
  }

  /**
   * Define a jQuery plugin
   */
  var dataID = "spectrum.id";
  $.fn.spectrum = function (opts, extra) {

    if (typeof opts == "string") {

      var returnValue = this;
      var args = Array.prototype.slice.call( arguments, 1 );

      this.each(function () {
        var spect = spectrums[$(this).data(dataID)];
        if (spect) {
          var method = spect[opts];
          if (!method) {
            throw new Error( "Spectrum: no such method: '" + opts + "'" );
          }

          if (opts == "get") {
            returnValue = spect.get();
          }
          else if (opts == "container") {
            returnValue = spect.container;
          }
          else if (opts == "option") {
            returnValue = spect.option.apply(spect, args);
          }
          else if (opts == "destroy") {
            spect.destroy();
            $(this).removeData(dataID);
          }
          else {
            method.apply(spect, args);
          }
        }
      });

      return returnValue;
    }

    // Initializing a new instance of spectrum
    return this.spectrum("destroy").each(function () {
      var options = $.extend({}, opts, $(this).data());
      var spect = spectrum(this, options);
      $(this).data(dataID, spect.id);
    });
  };

  $.fn.spectrum.load = true;
  $.fn.spectrum.loadOpts = {};
  $.fn.spectrum.draggable = draggable;
  $.fn.spectrum.defaults = defaultOpts;
  $.fn.spectrum.inputTypeColorSupport = function inputTypeColorSupport() {
    if (typeof inputTypeColorSupport._cachedResult === "undefined") {
      var colorInput = $("<input type='color'/>")[0]; // if color element is supported, value will default to not null
      inputTypeColorSupport._cachedResult = colorInput.type === "color" && colorInput.value !== "";
    }
    return inputTypeColorSupport._cachedResult;
  };

  $.spectrum = { };
  $.spectrum.localization = { };
  $.spectrum.palettes = { };

  $.fn.spectrum.processNativeColorInputs = function () {
    var colorInputs = $("input[type=color]");
    if (colorInputs.length && !inputTypeColorSupport()) {
      colorInputs.spectrum({
        preferredFormat: "hex6"
      });
    }
  };

  // TinyColor v1.1.2
  // https://github.com/bgrins/TinyColor
  // Brian Grinstead, MIT License

  (function() {

    var trimLeft = /^[\s,#]+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      math = Math,
      mathRound = math.round,
      mathMin = math.min,
      mathMax = math.max,
      mathRandom = math.random;

    var tinycolor = function(color, opts) {

      color = (color) ? color : '';
      opts = opts || { };

      // If input is already a tinycolor, return itself
      if (color instanceof tinycolor) {
        return color;
      }
      // If we are called as a function, call using new instead
      if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
      }

      var rgb = inputToRGB(color);
      this._originalInput = color,
        this._r = rgb.r,
        this._g = rgb.g,
        this._b = rgb.b,
        this._a = rgb.a,
        this._roundA = mathRound(100*this._a) / 100,
        this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;

      // Don't let the range of [0,255] come back in [0,1].
      // Potentially lose a little bit of precision here, but will fix issues where
      // .5 gets interpreted as half of the total, instead of half of 1
      // If it was supposed to be 128, this was already taken care of by `inputToRgb`
      if (this._r < 1) { this._r = mathRound(this._r); }
      if (this._g < 1) { this._g = mathRound(this._g); }
      if (this._b < 1) { this._b = mathRound(this._b); }

      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
    };

    tinycolor.prototype = {
      isDark: function() {
        return this.getBrightness() < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      isValid: function() {
        return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
        return this._format;
      },
      getAlpha: function() {
        return this._a;
      },
      getBrightness: function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
      },
      setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
      },
      toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
      },
      toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
      },
      toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
      },
      toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
      },
      toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
      },
      toHex8: function() {
        return rgbaToHex(this._r, this._g, this._b, this._a);
      },
      toHex8String: function() {
        return '#' + this.toHex8();
      },
      toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
      },
      toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        if (this._a === 0) {
          return "transparent";
        }

        if (this._a < 1) {
          return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
          var s = tinycolor(secondColor);
          secondHex8String = s.toHex8String();
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
      },
      toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

        if (needsAlphaFormat) {
          // Special case for "transparent", all other non-alpha formats
          // will return rgba when there is transparency.
          if (format === "name" && this._a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
      },

      _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
      },
      lighten: function() {
        return this._applyModification(lighten, arguments);
      },
      brighten: function() {
        return this._applyModification(brighten, arguments);
      },
      darken: function() {
        return this._applyModification(darken, arguments);
      },
      desaturate: function() {
        return this._applyModification(desaturate, arguments);
      },
      saturate: function() {
        return this._applyModification(saturate, arguments);
      },
      greyscale: function() {
        return this._applyModification(greyscale, arguments);
      },
      spin: function() {
        return this._applyModification(spin, arguments);
      },

      _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function() {
        return this._applyCombination(analogous, arguments);
      },
      complement: function() {
        return this._applyCombination(complement, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
      },
      triad: function() {
        return this._applyCombination(triad, arguments);
      },
      tetrad: function() {
        return this._applyCombination(tetrad, arguments);
      }
    };

    // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1
    tinycolor.fromRatio = function(color, opts) {
      if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
          if (color.hasOwnProperty(i)) {
            if (i === "a") {
              newColor[i] = color[i];
            }
            else {
              newColor[i] = convertToPercentage(color[i]);
            }
          }
        }
        color = newColor;
      }

      return tinycolor(color, opts);
    };

    // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //
    function inputToRGB(color) {

      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var ok = false;
      var format = false;

      if (typeof color == "string") {
        color = stringInputToObject(color);
      }

      if (typeof color == "object") {
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok = true;
          format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
          color.s = convertToPercentage(color.s);
          color.v = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, color.s, color.v);
          ok = true;
          format = "hsv";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
          color.s = convertToPercentage(color.s);
          color.l = convertToPercentage(color.l);
          rgb = hslToRgb(color.h, color.s, color.l);
          ok = true;
          format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
          a = color.a;
        }
      }

      a = boundAlpha(a);

      return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
      };
    }


    // Conversion Functions
    // --------------------

    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

    // `rgbToRgb`
    // Handle bounds / percentage checking to conform to CSS color spec
    // <http://www.w3.org/TR/css3-color/>
    // *Assumes:* r, g, b in [0, 255] or [0, 1]
    // *Returns:* { r, g, b } in [0, 255]
    function rgbToRgb(r, g, b){
      return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
      };
    }

    // `rgbToHsl`
    // Converts an RGB color value to HSL.
    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
    // *Returns:* { h, s, l } in [0,1]
    function rgbToHsl(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min) {
        h = s = 0; // achromatic
      }
      else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
      }

      return { h: h, s: s, l: l };
    }

    // `hslToRgb`
    // Converts an HSL color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hslToRgb(h, s, l) {
      var r, g, b;

      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);

      function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }

      if(s === 0) {
        r = g = b = l; // achromatic
      }
      else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }

      return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHsv`
    // Converts an RGB color value to HSV
    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
    // *Returns:* { h, s, v } in [0,1]
    function rgbToHsv(r, g, b) {

      r = bound01(r, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);

      var max = mathMax(r, g, b), min = mathMin(r, g, b);
      var h, s, v = max;

      var d = max - min;
      s = max === 0 ? 0 : d / max;

      if(max == min) {
        h = 0; // achromatic
      }
      else {
        switch(max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return { h: h, s: s, v: v };
    }

    // `hsvToRgb`
    // Converts an HSV color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hsvToRgb(h, s, v) {

      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);

      var i = math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

      return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHex`
    // Converts an RGB color to hex
    // Assumes r, g, and b are contained in the set [0, 255]
    // Returns a 3 or 6 character hex
    function rgbToHex(r, g, b, allow3Char) {

      var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
      ];

      // Return a 3 character hex if possible
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }

      return hex.join("");
    }
    // `rgbaToHex`
    // Converts an RGBA color plus alpha transparency to hex
    // Assumes r, g, b and a are contained in the set [0, 255]
    // Returns an 8 character hex
    function rgbaToHex(r, g, b, a) {

      var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
      ];

      return hex.join("");
    }

    // `equals`
    // Can be called with any tinycolor input
    tinycolor.equals = function (color1, color2) {
      if (!color1 || !color2) { return false; }
      return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
      return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
      });
    };


    // Modification Functions
    // ----------------------
    // Thanks to less.js for some of the basics here
    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

    function desaturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }

    function saturate(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor(hsl);
    }

    function greyscale(color) {
      return tinycolor(color).desaturate(100);
    }

    function lighten (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    }

    function brighten(color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var rgb = tinycolor(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
      return tinycolor(rgb);
    }

    function darken (color, amount) {
      amount = (amount === 0) ? 0 : (amount || 10);
      var hsl = tinycolor(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor(hsl);
    }

    // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
    // Values outside of this range will be wrapped into this range.
    function spin(color, amount) {
      var hsl = tinycolor(color).toHsl();
      var hue = (mathRound(hsl.h) + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor(hsl);
    }

    // Combination Functions
    // ---------------------
    // Thanks to jQuery xColor for some of the ideas behind these
    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

    function complement(color) {
      var hsl = tinycolor(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor(hsl);
    }

    function triad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
      ];
    }

    function tetrad(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
      ];
    }

    function splitcomplement(color) {
      var hsl = tinycolor(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
      ];
    }

    function analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;

      var hsl = tinycolor(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor(color)];

      for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
      }
      return ret;
    }

    function monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor(color).toHsv();
      var h = hsv.h, s = hsv.s, v = hsv.v;
      var ret = [];
      var modification = 1 / results;

      while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
      }

      return ret;
    }

    // Utility Functions
    // ---------------------

    tinycolor.mix = function(color1, color2, amount) {
      amount = (amount === 0) ? 0 : (amount || 50);

      var rgb1 = tinycolor(color1).toRgb();
      var rgb2 = tinycolor(color2).toRgb();

      var p = amount / 100;
      var w = p * 2 - 1;
      var a = rgb2.a - rgb1.a;

      var w1;

      if (w * a == -1) {
        w1 = w;
      } else {
        w1 = (w + a) / (1 + w * a);
      }

      w1 = (w1 + 1) / 2;

      var w2 = 1 - w1;

      var rgba = {
        r: rgb2.r * w1 + rgb1.r * w2,
        g: rgb2.g * w1 + rgb1.g * w2,
        b: rgb2.b * w1 + rgb1.b * w2,
        a: rgb2.a * p  + rgb1.a * (1 - p)
      };

      return tinycolor(rgba);
    };


    // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/AERT#color-contrast>

    // `readability`
    // Analyze the 2 colors and returns an object with the following properties:
    //    `brightness`: difference in brightness between the two colors
    //    `color`: difference in color/hue between the two colors
    tinycolor.readability = function(color1, color2) {
      var c1 = tinycolor(color1);
      var c2 = tinycolor(color2);
      var rgb1 = c1.toRgb();
      var rgb2 = c2.toRgb();
      var brightnessA = c1.getBrightness();
      var brightnessB = c2.getBrightness();
      var colorDiff = (
        Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +
        Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +
        Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)
      );

      return {
        brightness: Math.abs(brightnessA - brightnessB),
        color: colorDiff
      };
    };

    // `readable`
    // http://www.w3.org/TR/AERT#color-contrast
    // Ensure that foreground and background color combinations provide sufficient contrast.
    // *Example*
    //    tinycolor.isReadable("#000", "#111") => false
    tinycolor.isReadable = function(color1, color2) {
      var readability = tinycolor.readability(color1, color2);
      return readability.brightness > 125 && readability.color > 500;
    };

    // `mostReadable`
    // Given a base color and a list of possible foreground or background
    // colors for that base, returns the most readable color.
    // *Example*
    //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
    tinycolor.mostReadable = function(baseColor, colorList) {
      var bestColor = null;
      var bestScore = 0;
      var bestIsReadable = false;
      for (var i=0; i < colorList.length; i++) {

        // We normalize both around the "acceptable" breaking point,
        // but rank brightness constrast higher than hue.

        var readability = tinycolor.readability(baseColor, colorList[i]);
        var readable = readability.brightness > 125 && readability.color > 500;
        var score = 3 * (readability.brightness / 125) + (readability.color / 500);

        if ((readable && ! bestIsReadable) ||
          (readable && bestIsReadable && score > bestScore) ||
          ((! readable) && (! bestIsReadable) && score > bestScore)) {
          bestIsReadable = readable;
          bestScore = score;
          bestColor = tinycolor(colorList[i]);
        }
      }
      return bestColor;
    };


    // Big List of Colors
    // ------------------
    // <http://www.w3.org/TR/css3-color/#svg-color>
    var names = tinycolor.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };

    // Make it easy to access colors via `hexNames[hex]`
    var hexNames = tinycolor.hexNames = flip(names);


    // Utilities
    // ---------

    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
    function flip(o) {
      var flipped = { };
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          flipped[o[i]] = i;
        }
      }
      return flipped;
    }

    // Return a valid alpha value [0,1] with all invalid values being set to 1
    function boundAlpha(a) {
      a = parseFloat(a);

      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }

      return a;
    }

    // Take input from [0, n] and return it as [0, 1]
    function bound01(n, max) {
      if (isOnePointZero(n)) { n = "100%"; }

      var processPercent = isPercentage(n);
      n = mathMin(max, mathMax(0, parseFloat(n)));

      // Automatically convert percentage into number
      if (processPercent) {
        n = parseInt(n * max, 10) / 100;
      }

      // Handle floating point rounding errors
      if ((math.abs(n - max) < 0.000001)) {
        return 1;
      }

      // Convert into [0, 1] range if it isn't already
      return (n % max) / parseFloat(max);
    }

    // Force a number between 0 and 1
    function clamp01(val) {
      return mathMin(1, mathMax(0, val));
    }

    // Parse a base-16 hex value into a base-10 integer
    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }

    // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
    function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
    }

    // Check to see if string passed in is a percentage
    function isPercentage(n) {
      return typeof n === "string" && n.indexOf('%') != -1;
    }

    // Force a hex value to have 2 characters
    function pad2(c) {
      return c.length == 1 ? '0' + c : '' + c;
    }

    // Replace a decimal with it's percentage value
    function convertToPercentage(n) {
      if (n <= 1) {
        n = (n * 100) + "%";
      }

      return n;
    }

    // Converts a decimal to a hex value
    function convertDecimalToHex(d) {
      return Math.round(parseFloat(d) * 255).toString(16);
    }
    // Converts a hex value to a decimal
    function convertHexToDecimal(h) {
      return (parseIntFromHex(h) / 255);
    }

    var matchers = (function() {

      // <http://www.w3.org/TR/css3-values/#integers>
      var CSS_INTEGER = "[-\\+]?\\d+%?";

      // <http://www.w3.org/TR/css3-values/#number-value>
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

      // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

      // Actual matching.
      // Parentheses and commas are optional, but not required.
      // Whitespace can take the place of commas or opening paren
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

      return {
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    })();

    // `stringInputToObject`
    // Permissive string parsing.  Take in a number of formats, and output an object
    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
    function stringInputToObject(color) {

      color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
      var named = false;
      if (names[color]) {
        color = names[color];
        named = true;
      }
      else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }

      // Try to match string input using regular expressions.
      // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
      // Just return an object and let the conversion functions handle that.
      // This way the result will be the same whether the tinycolor is initialized with string or object.
      var match;
      if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
      }
      if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
      }
      if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
      }
      if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
      }
      if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
      }
      if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
      }
      if ((match = matchers.hex8.exec(color))) {
        return {
          a: convertHexToDecimal(match[1]),
          r: parseIntFromHex(match[2]),
          g: parseIntFromHex(match[3]),
          b: parseIntFromHex(match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if ((match = matchers.hex6.exec(color))) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          format: named ? "name" : "hex"
        };
      }
      if ((match = matchers.hex3.exec(color))) {
        return {
          r: parseIntFromHex(match[1] + '' + match[1]),
          g: parseIntFromHex(match[2] + '' + match[2]),
          b: parseIntFromHex(match[3] + '' + match[3]),
          format: named ? "name" : "hex"
        };
      }

      return false;
    }

    window.tinycolor = tinycolor;
  })();

  $(function () {
    if ($.fn.spectrum.load) {
      $.fn.spectrum.processNativeColorInputs();
    }
  });

}(window.jQuery);
},{}],8:[function(require,module,exports){
/*
 * jQuery UIx Multiselect 2.0
 *
 * Authors:
 *  Yanick Rochon (yanick.rochon[at]gmail[dot]com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 *
 * http://mind2soft.com/labs/jquery/multiselect/
 *
 *
 * Depends:
 * jQuery UI 1.8+
 *
 */

(function($, window, undefined) {
  // ECMAScript 5 Strict Mode: [John Resig Blog Post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)


  // Each instance must have their own drag and drop scope. We use a global page scope counter
  // so we do not create two instances with mistankenly the same scope! We do not support
  // cross instance drag and drop; this would require also copying the OPTION element and it
  // would slow the component down. This is not the widget's contract anyhow.
  var globalScope = 0;

  var DEF_OPTGROUP = '';
  var PRE_OPTGROUP = 'group-';

  // these events will trigger on the original element
  //var NATIVE_EVENTS = ["change"];   // for version 2.1

  // a list of predefined events
  //var EVENT_CHANGE = 'change';    // for version 2.1
  var EVENT_CHANGE = 'multiselectChange';
  //var EVENT_SEARCH = 'beforesearch';   // for version 2.1
  var EVENT_SEARCH = 'multiselectSearch';
  var EVENT_REORDERED = 'multiselectReordered';

  // The jQuery.uix namespace will automatically be created if it doesn't exist
  $.widget("uix.multiselect", {
    options: {
      availableListPosition: 'right',// 'top', 'right', 'bottom', 'left'; the position of the available list (default: 'right')
      // beforesearch: null,            // a funciton called before searching. If the default is prevented, search will not happen (for version 2.1)
      collapsableGroups: true,       // tells whether the option groups can be collapsed or not (default: true)
      created: null,                 // a function called when the widget is done loading (default: null)
      defaultGroupName: '',          // the name of the default option group (default: '')
      filterSelected: false,         // when searching, filter selected options also? (default: false)
      locale: 'auto',                // any valid locale, 'auto', or '' for default built-in strings (default: 'auto')
      moveEffect: null,              // 'blind','bounce','clip','drop','explode','fold','highlight','puff','pulsate','shake','slide' (default: null)
      moveEffectOptions: {},         // effect options (see jQuery UI documentation) (default: {})
      moveEffectSpeed: null,         // string ('slow','fast') or number in millisecond (ignored if moveEffect is 'show') (default: null)
      optionRenderer: false,         // a function that will return the item element to be rendered in the list (default: false)
      optionGroupRenderer: false,    // a function that will return the group item element to be rendered (default: false)
      searchDelay: 500,              // the search delay in ms (default: 500)
      searchField: 'toggle',         // false, true, 'toggle'; set the search field behaviour (default: 'toggle')
      searchPreFilter: null,         // prepare the search term before filtering.
      searchFilter: null,            // a search filter. Will receive the term and OPTION element and should return a boolean value.
      searchHeader: 'available',     // 'available', 'selected'; set the list header that will host the search field (default: 'available')
      selectionMode: 'click,d&d',    // how options can be selected separated by commas: 'click', "dblclick" and 'd&d' (default: 'click,d&d')
      showDefaultGroupHeader: false, // show the default option group header (default: false)
      showEmptyGroups: false,        // always display option groups even if empty (default: false)
      splitRatio: 0.55,              // % of the left list's width of the widget total width (default 0.55)
      sortable: false,               // if the selected list should be user sortable or not
      sortMethod: null,              // null, 'standard', 'natural'; a sort function name (see ItemComparators), or a custom function (default: null)
      selectAll: 'both'              // 'available', 'selected', 'both', 'none' - Whether or not to display a select or deselect all icon (default: 'both')
    },

    _create: function() {
      var that = this;
      var selListHeader, selListContent, avListHeader, avListContent;
      var btnSelectAll, btnDeselectAll;

      this.scope = 'multiselect' + (globalScope++);
      this.optionGroupIndex = 1;
      this._setLocale(this.options.locale);

      this.element.addClass('uix-multiselect-original');
      this._elementWrapper = $('<div></div>').addClass('uix-multiselect ui-widget')
        .css({
          width: this.element.css('width'),
          height: this.element.css('height')
        })
        .append(
          $('<div></div>').addClass('multiselect-selected-list')
            .append( $('<div></div>').addClass('ui-widget-header')
              .append( btnDeselectAll = $('<button></button>', { type:"button" }).addClass('uix-control-right')
                .attr('data-localekey', 'deselectAll')
                .attr('title', this._t('deselectAll'))
                .button({icon: 'ui-icon-arrowthickstop-1-e', text:false})
                .click(function(e) { e.preventDefault(); e.stopPropagation(); that.optionCache.setSelectedAll(false); return false; })
                ['both,selected'.indexOf(this.options.selectAll)>=0 ? 'show' : 'hide']()
              )
              .append( selListHeader = $('<div></div>').addClass('header-text') )
            )
            .append( selListContent = $('<div></div>').addClass('uix-list-container ui-widget-content') )
        )
        ['right,top'.indexOf(this.options.availableListPosition)>=0?'prepend':'append'](
        $('<div></div>').addClass('multiselect-available-list')
          .append( $('<div></div>').addClass('ui-widget-header')
            .append( btnSelectAll = $('<button></button>', { type:"button" }).addClass('uix-control-right')
              .attr('data-localekey', 'selectAll')
              .attr('title', this._t('selectAll'))
              .button({icon:'ui-icon-arrowthickstop-1-w', text:false})
              .click(function(e) { e.preventDefault(); e.stopPropagation(); that.optionCache.setSelectedAll(true); return false; })
              ['both,available'.indexOf(this.options.selectAll)>=0 ? 'show' : 'hide']()
            )
            .append( avListHeader = $('<div></div>').addClass('header-text') )

          )
          .append( avListContent  = $('<div></div>').addClass('uix-list-container ui-widget-content') )
      )
        .insertAfter(this.element)
      ;

      this._buttons = {
        'selectAll': btnSelectAll,
        'deselectAll': btnDeselectAll
      };
      this._headers = {
        'selected': selListHeader,
        'available': avListHeader
      };
      this._lists = {
        'selected': selListContent.attr('id', this.scope+'_selListContent'),
        'available': avListContent.attr('id', this.scope+'_avListContent')
      };

      this.optionCache = new OptionCache(this);
      this._searchDelayed = new SearchDelayed(this);

      this._initSearchable();

      this._applyListDroppable();

      this.refresh(this.options.created);
    },

    /**
     * ***************************************
     *   PUBLIC
     * ***************************************
     */

    /**
     * Refresh all the lists from the underlaying element. This method is executed
     * asynchronously from the call, therefore it returns immediately. However, the
     * method accepts a callback parameter which will be executed when the refresh is
     * complete.
     *
     * @param callback   function    a callback function called when the refresh is complete
     */
    refresh: function(callback) {
      this._resize();  // just make sure we display the widget right without delay
      asyncFunction(function() {
        this.optionCache.cleanup();

        var opt, options = this.element[0].childNodes;

        for (var i=0, l1=options.length; i<l1; i++) {
          opt = options[i];
          if (opt.nodeType === 1) {
            if (opt.tagName.toUpperCase() === 'OPTGROUP') {
              var optGroup = $(opt).data('option-group') || (PRE_OPTGROUP + (this.optionGroupIndex++));
              var grpOptions = opt.childNodes;

              this.optionCache.prepareGroup($(opt), optGroup);

              for (var j=0, l2=grpOptions.length; j<l2; j++) {
                opt = grpOptions[j];
                if (opt.nodeType === 1) {
                  this.optionCache.prepareOption($(opt), optGroup);
                }
              }
            } else {
              this.optionCache.prepareOption($(opt));  // add to default group
            }
          }
        }

        this.optionCache.reIndex();

        if (this._searchField && this._searchField.is(':visible')) {
          this._search(null, true);
        }

        if (callback) callback();
      }, 10, this);

    },

    /**
     * Search the list of available items and filter them. If the parameter 'text' is
     * undefined, the actual value from the search field is used. If 'text' is specified,
     * the search field is updated.
     *
     * @param options string|object    (optional) the search options
     */
    search: function(options) {
      if (typeof options != 'object') {
        options = {showInput: true, text: options};
      }

      if ((options.toggleInput != false) && !this._searchField.is(':visible')) {
        this._buttons.search.trigger('click');
      }

      this._search(options.text, !!options.silent);
    },

    /**
     * Dynamically change the locale for the widget. If the specified locale is not
     * found, the default locale will be used. If locale is undefined, the current locale
     * will be returned
     */
    locale: function(locale) {

      if (locale === undefined) {
        return this.options.locale;
      } else {
        this._setLocale(locale);

        this._updateControls();
        this._updateHeaders();
      }
    },

    _destroy: function() {
      this.optionCache.reset(true);
      this._lists['selected'].empty().remove();
      this._lists['available'].empty().remove();
      this._elementWrapper.empty().remove();

      delete this.optionCache;
      delete this._searchDelayed;
      delete this._lists;
      delete this._elementWrapper;

      this.element.removeClass('uix-multiselect-original');
    },

    /**
     * ***************************************
     *   PRIVATE
     * ***************************************
     */

    _initSearchable: function() {
      var isToggle = ('toggle' === this.options.searchField);
      var searchHeader = this.options.searchHeader;

      if (isToggle) {
        var that = this;
        this._buttons['search'] = $('<button></button', { type:"button" }).addClass('uix-control-right')
          .attr('data-localekey', 'search')
          .attr('title', this._t('search'))
          .button({icon:'ui-icon-search', text:false})
          .click(function(e) {
            e.preventDefault(); e.stopPropagation();
            if (that._searchField.is(':visible')) {
              var b = $(this);
              that._headers[searchHeader].css('visibility', 'visible').fadeTo('fast', 1.0);
              that._searchField.hide('slide', {direction: 'right'}, 200, function() { b.removeClass('ui-corner-right ui-state-active').addClass('ui-corner-all'); });
              that._searchDelayed.cancelLastRequest();
              that.optionCache.filter('');
            } else {
              that._headers[searchHeader].fadeTo('fast', 0.1, function() { $(this).css('visibility', 'hidden'); });
              $(this).removeClass('ui-corner-all').addClass('ui-corner-right ui-state-active');
              that._searchField.show('slide', {direction: 'right'}, 200, function() { $(this).focus(); });
              that._search();
            }
            return false;
          })
          .insertBefore( this._headers[searchHeader] );
      }
      if (this.options.searchField) {
        if (!isToggle) {
          this._headers[searchHeader].hide();
        }
        this._searchField = $('<input type="text" />').addClass('uix-search ui-widget-content ui-corner-' + (isToggle ? 'left' : 'all'))[isToggle ? 'hide' : 'show']()
          .insertBefore( this._headers[searchHeader] )
          .focus(function() { $(this).select(); })
          .on("keydown keypress", function(e) { if (e.keyCode == 13) { e.preventDefault(); e.stopPropagation(); return false; } })
          .keyup($.proxy(this._searchDelayed.request, this._searchDelayed));
      }
    },

    _applyListDroppable: function() {
      if (this.options.selectionMode.indexOf('d&d') == -1) return;

      var _optionCache = this.optionCache;
      var currentScope = this.scope;

      var getElementData = function(d) {
        return _optionCache._elements[d.data('element-index')];
      };

      var initDroppable = function(e, s) {
        e.droppable({
          accept: function(draggable) {
            var eData = getElementData(draggable);
            return eData && (eData.selected != s);  // from different seleciton only
          },
          activeClass: 'ui-state-highlight',
          scope: currentScope,
          drop: function(evt, ui) {
            ui.draggable.removeClass('ui-state-disabled');
            ui.helper.remove();
            _optionCache.setSelected(getElementData(ui.draggable), s);
          }
        });
      }

      initDroppable(this._lists['selected'], true);
      initDroppable(this._lists['available'], false);

      if (this.options.sortable) {
        var that = this;
        this._lists['selected'].sortable({
          appendTo: 'parent',
          axis: "y",
          containment: $('.multiselect-selected-list', this._elementWrapper), //"parent",
          items: '.multiselect-element-wrapper',
          handle: '.group-element',
          revert: true,
          stop: $.proxy(function(evt, ui) {
            var prevGroup;
            $('.multiselect-element-wrapper', that._lists['selected']).each(function() {
              var currGroup = that.optionCache._groups.get($(this).data('option-group'));
              if (!prevGroup) {
                that.element.append(currGroup.groupElement);
              } else {
                currGroup.groupElement.insertAfter(prevGroup.groupElement);
              }
              prevGroup = currGroup;
            });
          }, this)
        });
      }
    },

    _search: function(term, silent) {
      if (this._searchField.is(':visible')) {
        if (typeof term === "string") {   // issue #36
          this._searchField.val(term);
        } else {
          term = this._searchField.val();
        }
      }

      this.optionCache.filter(term, silent);
    },

    _setLocale: function(locale) {
      if (locale == 'auto') {
        locale = navigator.userLanguage ||
          navigator.language ||
          navigator.browserLanguage ||
          navigator.systemLanguage ||
          '';
      }
      if (!$.uix.multiselect.i18n[locale]) {
        locale = '';   // revert to default is not supported auto locale
      }
      this.options.locale = locale;
    },

    _t: function(key, plural, data) {
      return _({locale:this.options.locale, key:key, plural:plural, data:data});
    },

    _updateControls: function() {
      var that = this;
      $('.uix-control-left,.uix-control-right', this._elementWrapper).each(function() {
        $(this).attr('title', that._t( $(this).attr('data-localekey') ));
      });
    },

    _updateHeaders: function() {
      var t, info = this.optionCache.getSelectionInfo();

      this._headers['selected']
        .text( t = this._t('itemsSelected', info.selected.total, {count:info.selected.total}) )
        .parent().attr('title',
        this.options.filterSelected
          ? this._t('itemsSelected', info.selected.count, {count:info.selected.count}) + ", " +
          this._t('itemsFiltered', info.selected.filtered, {count:info.selected.filtered})
          : t
      );
      this._headers['available']
        .text( this._t('itemsAvailable', info.available.total, {count:info.available.total}) )
        .parent().attr('title',
        this._t('itemsAvailable', info.available.count, {count:info.available.count}) + ", " +
        this._t('itemsFiltered', info.available.filtered, {count:info.available.filtered}) );
    },

    // call this method whenever the widget resizes
    // NOTE : the widget MUST be visible and have a width and height when calling this
    _resize: function() {
      var pos = this.options.availableListPosition.toLowerCase();         // shortcut
      var sSize = ('left,right'.indexOf(pos) >= 0) ? 'Width' : 'Height';  // split size fn
      var tSize = ('left,right'.indexOf(pos) >= 0) ? 'Height' : 'Width';  // total size fn
      var cSl = this.element['outer'+sSize]() * this.options.splitRatio;  // list container size selected
      var cAv = this.element['outer'+sSize]() - cSl;                      // ... available
      var hSl = (tSize === 'Width') ? cSl : this.element.outerHeight();   // scrollable area size selected
      var hAv = (tSize === 'Width') ? cAv : this.element.outerHeight();   // ... available
      var styleRule = ('left,right'.indexOf(pos) >= 0) ? 'left' : 'top';  // CSS rule for offsetting
      var swap = ('left,top'.indexOf(pos) >= 0);                          // true if we swap left-right or top-bottom
      var isToggle = ('toggle' === this.options.searchField);             // true if search field is toggle-able
      var headerBordersBoth = 'ui-corner-tl ui-corner-tr ui-corner-bl ui-corner-br ui-corner-top';
      var hSlCls = (tSize === 'Width') ? (swap ? '' : 'ui-corner-top') : (swap ? 'ui-corner-tr' : 'ui-corner-tl');
      var hAvCls = (tSize === 'Width') ? (swap ? 'ui-corner-top' : '') : (swap ? 'ui-corner-tl' : 'ui-corner-tr');

      // calculate outer lists dimensions
      this._elementWrapper.find('.multiselect-available-list')
        [sSize.toLowerCase()](cAv).css(styleRule, swap ? 0 : cSl)
        [tSize.toLowerCase()](this.element['outer'+tSize]() + 1);  // account for borders
      this._elementWrapper.find('.multiselect-selected-list')
        [sSize.toLowerCase()](cSl).css(styleRule, swap ? cAv : 0)
        [tSize.toLowerCase()](this.element['outer'+tSize]() + 1); // account for borders

      // selection all button
      this._buttons['selectAll'].button('option', 'icons', {primary: transferIcon(pos, 'ui-icon-arrowthickstop-1-', false) });
      this._buttons['deselectAll'].button('option', 'icons', {primary: transferIcon(pos, 'ui-icon-arrowthickstop-1-', true) });

      // header borders
      this._headers['available'].parent().removeClass(headerBordersBoth).addClass(hAvCls);
      this._headers['selected'].parent().removeClass(headerBordersBoth).addClass(hSlCls);

      // make both headers equal!
      if (!isToggle) {
        var h = Math.max(this._headers['selected'].parent().height(), this._headers['available'].parent().height());
        this._headers['available'].parent().height(h);
        this._headers['selected'].parent().height(h);
      }
      // adjust search field width
      if (this._searchField) {
        this._searchField.width( (sSize === 'Width' ? cAv : this.element.width()) - (isToggle ? 52 : 26) );  // issue #50
      }

      // calculate inner lists height
      this._lists['available'].height(hAv - this._headers['available'].parent().outerHeight() - 2);  // account for borders
      this._lists['selected'].height(hSl - this._headers['selected'].parent().outerHeight() - 2);    // account for borders
    },

    /**
     * return false if the event was prevented by an handler, true otherwise
     */
    _triggerUIEvent: function(event, ui) {
      var eventType;

      if (typeof event === 'string') {
        eventType = event;
        event = $.Event(event);
      } else {
        eventType = event.type;
      }

      //console.log($.inArray(event.type, NATIVE_EVENTS));

      //if ($.inArray(event.type, NATIVE_EVENTS) > -1) {
      this.element.trigger(event, ui);
      //} else {
      //    this._trigger(eventType, event, ui);
      //}

      return !event.isDefaultPrevented();
    },

    _setOption: function(key, value) {
      // Use the _setOption method to respond to changes to options
      switch(key) {
        // TODO
      }
      if (typeof(this._superApply) == 'function'){
        this._superApply(arguments);
      }else{
        $.Widget.prototype._setOption.apply(this, arguments);
      }
    }
  });



  /**
   * Comparator registry.
   *
   * function(a, b, g)   where a is compared to b and g is true if they are groups
   */
  var ItemComparators = {
    /**
     * Naive general implementation
     */
    standard: function(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    },
    /*
     * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
     * Author: Jim Palmer (based on chunking idea from Dave Koelle)
     */
    natural: function naturalSort(a, b) {
      var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
        sre = /(^[ ]*|[ ]*$)/g,
        dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        hre = /^0x[0-9a-f]+$/i,
        ore = /^0/,
        i = function(s) { return naturalSort.insensitive && (''+s).toLowerCase() || ''+s },
        // convert all to strings strip whitespace
        x = i(a).replace(sre, '') || '',
        y = i(b).replace(sre, '') || '',
        // chunk/tokenize
        xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
        yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
        // numeric, hex or date detection
        xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
        yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null,
        oFxNcL, oFyNcL;
      // first try and sort Hex codes or Dates
      if (yD)
        if ( xD < yD ) return -1;
        else if ( xD > yD ) return 1;
      // natural sorting through split numeric strings and default strings
      for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
        // find floats not starting with '0', string or 0 if not defined (Clint Priest)
        oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
        oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
        // handle numeric vs string comparison - number < string - (Kyle Adams)
        if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
        // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
        else if (typeof oFxNcL !== typeof oFyNcL) {
          oFxNcL += '';
          oFyNcL += '';
        }
        if (oFxNcL < oFyNcL) return -1;
        if (oFxNcL > oFyNcL) return 1;
      }
      return 0;
    }
  };


  var transferDirection = ['n','e','s','w'];                          // button icon direction
  var transferOrientation = ['bottom','left','top','right'];    // list of matching directions with icons
  var transferIcon = function(pos, prefix, selected) {
    return prefix + transferDirection[($.inArray(pos.toLowerCase(), transferOrientation) + (selected ? 2 : 0)) % 4];
  };

  /**
   * setTimeout on steroids!
   */
  var asyncFunction = function(callback, timeout, self) {
    var args = Array.prototype.slice.call(arguments, 3);
    return setTimeout(function() {
      callback.apply(self || window, args);
    }, timeout);
  };


  var SearchDelayed = function(widget, options) {
    this._widget = widget;
    this._options = options;
    this._lastSearchValue = null;
  };

  SearchDelayed.prototype = {
    request: function() {
      if (this._widget._searchField.val() == this._lastSearchValue) return;  // prevent searching twice same term

      this.cancelLastRequest();

      this._timeout = asyncFunction(function() {
        this._timeout = null;
        this._lastSearchValue = this._widget._searchField.val();

        this._widget._search();
      }, this._widget.options.searchDelay, this);
    },
    cancelLastRequest: function() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
    }
  };

  /**
   * Map of all option groups
   */
  var GroupCache = function(comp) {
    // private members

    var keys = [];
    var items = {};
    var comparator = comp;

    // public methods

    this.setComparator = function(comp) {
      comparator = comp;
      return this;
    };

    this.clear = function() {
      keys = [];
      items = {};
      return this;
    };

    this.containsKey = function(key) {
      return !!items[key];
    };

    this.get = function(key) {
      return items[key];
    };

    this.put = function(key, val) {
      if (!items[key]) {
        if (comparator) {
          keys.splice((function() {
            var low = 0, high = keys.length;
            var mid = -1, c = 0;
            while (low < high) {
              mid = parseInt((low + high)/2);
              var a = items[keys[mid]].groupElement;
              var b = val.groupElement;
              c = comparator(a ? a.attr('label') : DEF_OPTGROUP, b ? b.attr('label') : DEF_OPTGROUP);
              if (c < 0)   {
                low = mid + 1;
              } else if (c > 0) {
                high = mid;
              } else {
                return mid;
              }
            }
            return low;
          })(), 0, key);
        } else {
          keys.push(key);
        }
      }

      items[key] = val;
      return this;
    };

    this.remove = function(key) {
      delete items[key];
      return keys.splice(keys.indexOf(key), 1);
    };

    this.each = function(callback) {
      var args = Array.prototype.slice.call(arguments, 1);
      args.splice(0, 0, null, null);
      for (var i=0, len=keys.length; i<len; i++) {
        args[0] = keys[i];
        args[1] = items[keys[i]];
        callback.apply(args[1], args);
      }
      return this;
    };

  };

  var OptionCache = function(widget) {
    this._widget = widget;
    this._listContainers = {
      'selected': $('<div></div>').appendTo(this._widget._lists['selected']),
      'available': $('<div></div>').appendTo(this._widget._lists['available'])
    };

    this._elements = [];
    this._groups = new GroupCache();

    this._moveEffect = {
      fn: widget.options.moveEffect,
      options: widget.options.moveEffectOptions,
      speed: widget.options.moveEffectSpeed
    };

    this._selectionMode = this._widget.options.selectionMode.indexOf('dblclick') > -1 ? 'dblclick'
      : this._widget.options.selectionMode.indexOf('click') > -1 ? 'click' : false;

    this.reset();
  };

  OptionCache.Options = {
    batchCount: 200,
    batchDelay: 50
  };

  OptionCache.prototype = {
    _createGroupElement: function(grpElement, optGroup, selected) {
      var that = this;
      var gData;

      var getLocalData = function() {
        if (!gData) gData = that._groups.get(optGroup);
        return gData;
      };

      var getGroupName = function() {
        return grpElement ? grpElement.attr('label') : that._widget.options.defaultGroupName;
      };

      var labelCount = $('<span></span>').addClass('label')
        .text(getGroupName() + ' (0)')
        .attr('title', getGroupName() + ' (0)');

      var fnUpdateCount = function() {
        var gDataDst = getLocalData()[selected?'selected':'available'];

        gDataDst.listElement[(!selected && (gDataDst.count || that._widget.options.showEmptyGroups)) || (gDataDst.count && ((gData.optionGroup != DEF_OPTGROUP) || that._widget.options.showDefaultGroupHeader)) ? 'show' : 'hide']();

        var t = getGroupName() + ' (' + gDataDst.count + ')';
        labelCount.text(t).attr('title', t);
      };

      var e = $('<div></div>')
        .addClass('ui-widget-header ui-priority-secondary group-element')
        .append( $('<button></button>', { type:"button" }).addClass('uix-control-right')
          .attr('data-localekey', (selected?'de':'')+'selectAllGroup')
          .attr('title', this._widget._t((selected?'de':'')+'selectAllGroup'))
          .button({icons:{primary:transferIcon(this._widget.options.availableListPosition, 'ui-icon-arrowstop-1-', selected)}, text:false})
          .click(function(e) {
            e.preventDefault(); e.stopPropagation();

            var gDataDst = getLocalData()[selected?'selected':'available'];

            if (gData.count > 0) {
              var _transferedOptions = [];

              that._bufferedMode(true);
              for (var i=gData.startIndex, len=gData.startIndex+gData.count, eData; i<len; i++) {
                eData = that._elements[i];
                if (!eData.filtered && !eData.selected != selected) {
                  that.setSelected(eData, !selected, true);
                  _transferedOptions.push(eData.optionElement[0]);
                }
              }

              that._updateGroupElements(gData);
              that._widget._updateHeaders();

              that._bufferedMode(false);

              that._widget._triggerUIEvent(EVENT_CHANGE, { optionElements:_transferedOptions, selected:!selected} );
            }

            return false;
          })
        )
        .append(labelCount)
      ;

      var fnToggle,
        groupIcon = (grpElement) ? grpElement.attr('data-group-icon') : null;
      if (this._widget.options.collapsableGroups) {
        var collapseIconAttr = (grpElement) ? grpElement.attr('data-collapse-icon') : null,
          grpCollapseIcon = (collapseIconAttr) ? 'ui-icon ' + collapseIconAttr : 'ui-icon ui-icon-triangle-1-s';
        var h = $('<span></span>').addClass('ui-icon collapse-handle')
          .attr('data-localekey', 'collapseGroup')
          .attr('title', this._widget._t('collapseGroup'))
          .addClass(grpCollapseIcon)
          .mousedown(function(e) { e.stopPropagation(); })
          .click(function(e) { e.preventDefault(); e.stopPropagation(); fnToggle(grpElement); return false; })
          .prependTo(e.addClass('group-element-collapsable'))
        ;

        fnToggle = function(grpElement) {
          var gDataDst = getLocalData()[selected?'selected':'available'],
            collapseIconAttr = (grpElement) ? grpElement.attr('data-collapse-icon') : null,
            expandIconAttr = (grpElement) ? grpElement.attr('data-expand-icon') : null,
            collapseIcon = (collapseIconAttr) ? 'ui-icon ' + collapseIconAttr : 'ui-icon ui-icon-triangle-1-s',
            expandIcon = (expandIconAttr) ? 'ui-icon ' + expandIconAttr : 'ui-icon ui-icon-triangle-1-e';
          gDataDst.collapsed = !gDataDst.collapsed;
          gDataDst.listContainer.slideToggle();  // animate options?
          h.removeClass(gDataDst.collapsed ? collapseIcon : expandIcon)
            .addClass(gDataDst.collapsed ? expandIcon : collapseIcon);
        };
      }else{
        if (groupIcon) {
          $('<span></span>').addClass('collapse-handle '+groupIcon)
            .css('cursor','default')
            .prependTo(e.addClass('group-element-collapsable'));
        }
      }
      return $('<div></div>')
      // create an utility function to update group element count
        .data('fnUpdateCount', fnUpdateCount)
        .data('fnToggle', fnToggle || $.noop)
        .append(e)
        ;
    },

    _createGroupContainerElement: function(grpElement, optGroup, selected) {
      var that = this;
      var e = $('<div></div>');
      var _received_index;

      if (this._widget.options.sortable && selected) {
        e.sortable({
          tolerance: "pointer",
          appendTo: this._widget._elementWrapper,
          connectWith: this._widget._lists['available'].attr('id'),
          scope: this._widget.scope,
          helper: 'clone',
          receive: function(evt, ui) {
            var e = that._elements[_received_index = ui.item.data('element-index')];

            e.selected = true;
            e.optionElement.prop('selected', true);
            e.listElement.removeClass('ui-state-active');
          },
          stop: function(evt, ui) {
            var e;
            if (_received_index != undefined) {
              e = that._elements[_received_index];
              _received_index = undefined;
              ui.item.replaceWith(e.listElement.addClass('ui-state-highlight option-selected'));
              that._widget._updateHeaders();
              that._widget._triggerUIEvent(EVENT_CHANGE, { optionElements:[e.optionElement[0]], selected:true } );
            } else {
              e = that._elements[ui.item.data('element-index')];
              if (e && !e.selected) {
                that._bufferedMode(true);
                that._appendToList(e);
                that._bufferedMode(false);
              }
              else {
                that._widget._triggerUIEvent(EVENT_REORDERED, { } );
              }
            }
            if (e) that._reorderSelected(e.optionGroup);
          },
          revert: true
        });
      }

      if (this._selectionMode) {
        $(e).on(this._selectionMode, 'div.option-element', function() {
          var eData = that._elements[$(this).data('element-index')];
          eData.listElement.removeClass('ui-state-hover');
          that.setSelected(eData, !selected);
        });
      }

      return e;
    },

    _createElement: function(optElement, optGroup) {
      var o = this._widget.options.optionRenderer
        ? this._widget.options.optionRenderer(optElement, optGroup)
        : $('<div></div>').text(optElement.text());
      var optIcon = optElement.attr("data-option-icon");
      var e = $('<div></div>').append(o).addClass('ui-state-default option-element')
        .attr("unselectable", "on")  // disable text selection on this element (IE, Opera)
        .data('element-index', -1)
        .hover(
          function() {
            if (optElement.prop('selected')) $(this).removeClass('ui-state-highlight');
            $(this).addClass('ui-state-hover');
          },
          function() {
            $(this).removeClass('ui-state-hover');
            if (optElement.prop('selected')) $(this).addClass('ui-state-highlight');
          }
        );
      if (this._widget.options.selectionMode.indexOf('d&d') > -1) {
        var that = this;
        e.draggable({
          addClasses: false,
          cancel: (this._widget.options.sortable ? '.option-selected, ' : '') + '.ui-state-disabled',
          appendTo: this._widget._elementWrapper,
          scope: this._widget.scope,
          start: function(evt, ui) {
            $(this).addClass('ui-state-disabled ui-state-active');
            ui.helper.width($(this).width()).height($(this).height());
          },
          stop: function(evt, ui) {
            $(this).removeClass('ui-state-disabled ui-state-active');
          },
          helper: 'clone',
          revert: 'invalid',
          zIndex: 99999,
          disabled: optElement.prop('disabled')
        });
        if (optElement.prop('disabled')) {
          e.addClass('ui-state-disabled');
        }
        if (this._widget.options.sortable) {
          e.draggable('option', 'connectToSortable', this._groups.get(optGroup)['selected'].listContainer);
        }
      } else if (optElement.prop('disabled')) {
        e[(optElement.prop('disabled') ? "add" : "remove") + "Class"]('ui-state-disabled');
      }
      if (optIcon) {
        e.addClass('grouped-option').prepend($('<span></span>').addClass('ui-icon ' + optIcon));
      }
      return e;
    },

    _isOptionCollapsed: function(eData) {
      return this._groups.get(eData.optionGroup)[eData.selected?'selected':'available'].collapsed;
    },

    _updateGroupElements: function(gData) {
      if (gData) {
        gData['selected'].count = 0;
        gData['available'].count = 0;
        for (var i=gData.startIndex, len=gData.startIndex+gData.count; i<len; i++) {
          gData[this._elements[i].selected?'selected':'available'].count++;
        }
        gData['selected'].listElement.data('fnUpdateCount')();
        gData['available'].listElement.data('fnUpdateCount')();
      } else {
        this._groups.each(function(k,gData,that) {
          that._updateGroupElements(gData);
        }, this);
      }
    },

    _appendToList: function(eData) {
      var that = this;
      var gData = this._groups.get(eData.optionGroup);

      var gDataDst = gData[eData.selected?'selected':'available'];

      if ((eData.optionGroup != this._widget.options.defaultGroupName) || this._widget.options.showDefaultGroupHeader) {
        gDataDst.listElement.show();
      }
      if (gDataDst.collapsed) {
        gDataDst.listElement.data('fnToggle')(); // animate show?
      } else {
        gDataDst.listContainer.show();
      }

      var insertIndex = eData.index - 1;
      while ((insertIndex >= gData.startIndex) &&
      (this._elements[insertIndex].selected != eData.selected)) {
        insertIndex--;
      }

      if (insertIndex < gData.startIndex) {
        gDataDst.listContainer.prepend(eData.listElement);
      } else {
        var prev = this._elements[insertIndex].listElement;
        // FIX : if previous element is animated, get it's animated parent as reference
        if (prev.parent().hasClass('ui-effects-wrapper')) {
          prev = prev.parent();
        }
        eData.listElement.insertAfter(prev);
      }
      eData.listElement[(eData.selected?'add':'remove')+'Class']('ui-state-highlight option-selected');

      if ((eData.selected || !eData.filtered) && !this._isOptionCollapsed(eData) && this._moveEffect && this._moveEffect.fn) {
        eData.listElement.hide().show(this._moveEffect.fn, this._moveEffect.options, this._moveEffect.speed);
      } else if (eData.filtered) {
        eData.listElement.hide();
      }
    },

    _reorderSelected: function(optGroup) {
      var e = this._elements;
      var g = this._groups.get(optGroup);
      var container = g.groupElement ? g.groupElement : this._widget.element;
      var prevElement;
      $('.option-element', g['selected'].listContainer).each(function() {
        var currElement = e[$(this).data('element-index')].optionElement;
        if (!prevElement) {
          container.prepend(currElement);
        } else {
          currElement.insertAfter(prevElement);
        }
        prevElement = currElement;
      });
      this._widget._triggerUIEvent(EVENT_REORDERED, { selectElement:container.context } );
    },

    _bufferedMode: function(enabled) {
      if (enabled) {
        this._oldMoveEffect = this._moveEffect; this._moveEffect = null;

        // backup lists' scroll position before going into buffered mode
        this._widget._lists['selected'].data('scrollTop', this._widget._lists['selected'].scrollTop());
        this._widget._lists['available'].data('scrollTop', this._widget._lists['available'].scrollTop());

        this._listContainers['selected'].detach();
        this._listContainers['available'].detach();
      } else {
        // restore scroll position (if available)
        this._widget._lists['selected'].append(this._listContainers['selected'])
          .scrollTop( this._widget._lists['selected'].data('scrollTop') || 0 );
        this._widget._lists['available'].append(this._listContainers['available'])
          .scrollTop( this._widget._lists['available'].data('scrollTop') || 0 );

        this._moveEffect = this._oldMoveEffect;

        delete this._oldMoveEffect;
      }

    },

    reset: function(destroy) {
      this._groups.clear();
      this._listContainers['selected'].empty();
      this._listContainers['available'].empty();

      if (destroy) {
        for (var i=0, e=this._elements, len=e.length; i<len; i++) {
          e[i].optionElement.removeData('element-index');
        }
        delete this._elements;
        delete this._groups;
        delete this._listContainers;
      } else {
        this._elements = [];
        this.prepareGroup();  // reset default group
        this._groups.setComparator(this.getComparator());
      }
    },

    // should call _reIndex after this
    cleanup: function() {
      var p = this._widget.element[0];
      var _groupsRemoved = [];
      this._groups.each(function(g,v) {
        if (v.groupElement && !$.contains(p, v.groupElement[0])) {
          _groupsRemoved.push(g);
        }
      });
      for (var i=0, eData; i<this._elements.length; i++) {
        eData = this._elements[i];
        if (!$.contains(p, eData.optionElement[0]) || ($.inArray(eData.optionGroup, _groupsRemoved) > -1)) {
          this._elements.splice(i--, 1)[0].listElement.remove();
        }
      }
      for (var i=0, len=_groupsRemoved.length; i<len; i++) {
        this._groups.remove(_groupsRemoved[i]);
      }

      this.prepareGroup();  // make sure we have the default group still!
    },

    getComparator: function() {
      return this._widget.options.sortMethod
        ? typeof this._widget.options.sortMethod == 'function'
          ? this._widget.options.sortMethod
          : ItemComparators[this._widget.options.sortMethod]
        : null;
    },

    // prepare option group to be rendered (should call reIndex after this!)
    prepareGroup: function(grpElement, optGroup) {
      optGroup = optGroup || DEF_OPTGROUP;
      if (!this._groups.containsKey(optGroup)) {
        this._groups.put(optGroup, {
          startIndex: -1,
          count: 0,
          'selected': {
            collapsed: false,
            count: 0,
            listElement: this._createGroupElement(grpElement, optGroup, true),
            listContainer: this._createGroupContainerElement(grpElement, optGroup, true)
          },
          'available': {
            collapsed: false,
            count: 0,
            listElement: this._createGroupElement(grpElement, optGroup, false),
            listContainer: this._createGroupContainerElement(grpElement, optGroup, false)
          },
          groupElement: grpElement,
          optionGroup: optGroup     // for back ref
        });
      }
    },

    // prepare option element to be rendered (must call reIndex after this!)
    // If optGroup is defined, prepareGroup(optGroup) should have been called already
    prepareOption: function(optElement, optGroup) {
      var e;
      if (optElement.data('element-index') === undefined) {
        optGroup = optGroup || DEF_OPTGROUP;
        this._elements.push(e = {
          index: -1,
          selected: false,
          filtered: false,
          listElement: this._createElement(optElement, optGroup),
          optionElement: optElement,
          optionGroup: optGroup
        });
      } else {
        this._elements[optElement.data('element-index')]
          .listElement[(optElement.prop('disabled') ? "add" : "remove") + "Class"]('ui-state-disabled')
        ;
      }

    },

    reIndex: function() {
      // note : even if not sorted, options are added as they appear,
      //        so they should be grouped just fine anyway!
      var comparator = this.getComparator();
      if (comparator) {
        var _groups = this._groups;
        this._elements.sort(function(a, b) {
          // sort groups
          var ga = _groups.get(a.optionGroup).groupElement;
          var gb = _groups.get(b.optionGroup).groupElement;
          var g = comparator(ga ? ga.attr('label') : DEF_OPTGROUP, gb ? gb.attr('label') : DEF_OPTGROUP);
          if (g != 0) return g;
          else        return comparator(a.optionElement.text(), b.optionElement.text());
        });
      }

      this._bufferedMode(true);

      this._groups.each(function(g, v, l, showDefGroupName) {
        if (!v['available'].listContainer.parents('.multiselect-element-wrapper').length) {  // if no parent, then it was never attached yet.
          if (v.groupElement) {
            v.groupElement.data('option-group', g);  // for back ref
          }

          var wrapper_selected = $('<div></div>').addClass('multiselect-element-wrapper').data('option-group', g);
          var wrapper_available = $('<div></div>').addClass('multiselect-element-wrapper').data('option-group', g);
          wrapper_selected.append(v.selected.listElement.hide());
          if (g != DEF_OPTGROUP || (g == DEF_OPTGROUP && showDefGroupName)) {
            wrapper_available.append(v['available'].listElement.show());
          }
          wrapper_selected.append(v['selected'].listContainer);
          wrapper_available.append(v['available'].listContainer);

          l['selected'].append(wrapper_selected);
          l['available'].append(wrapper_available);
        }
        v.count = 0;
      }, this._listContainers, this._widget.options.showDefaultGroupHeader);

      for (var i=0, eData, gData, len=this._elements.length; i<len; i++) {
        eData = this._elements[i];
        gData = this._groups.get(eData.optionGroup);

        // update group index and count info
        if (gData.startIndex == -1 || gData.startIndex >= i) {
          gData.startIndex = i;
          gData.count = 1;
        } else {
          gData.count++;
        }

        // save element index for back ref
        eData.listElement.data('element-index', eData.index = i);

        if (eData.optionElement.data('element-index') == undefined || eData.selected != eData.optionElement.prop('selected')) {
          eData.selected = eData.optionElement.prop('selected');
          eData.optionElement.data('element-index', i);  // also save for back ref here

          this._appendToList(eData);
        }
      }

      this._updateGroupElements();
      this._widget._updateHeaders();
      this._groups.each(function(g,v,t) { t._reorderSelected(g); }, this);

      this._bufferedMode(false);

    },

    filter: function(term, silent) {

      if (term && !silent) {
        var ui = { term:term };
        if (this._widget._triggerUIEvent(EVENT_SEARCH, ui )) {
          term = ui.term;  // update term
        } else {
          return;
        }
      }

      this._bufferedMode(true);

      var filterSelected = this._widget.options.filterSelected;
      var filterFn = this._widget.options.searchFilter || function(term, opt) {
          return opt.innerHTML.toLocaleLowerCase().indexOf(term) > -1;
        };
      term = (this._widget.options.searchPreFilter || function(term) {
        return term ? (term+"").toLocaleLowerCase() : false;
      })(term);

      for (var i=0, eData, len=this._elements.length, filtered; i<len; i++) {
        eData = this._elements[i];
        filtered = !(!term || filterFn(term, eData.optionElement[0]));

        if ((!eData.selected || filterSelected) && (eData.filtered != filtered)) {
          eData.listElement[filtered ? 'hide' : 'show']();
          eData.filtered = filtered;
        } else if (eData.selected) {
          eData.filtered = filtered;
        }
      }

      this._widget._updateHeaders();
      this._bufferedMode(false);
    },

    getSelectionInfo: function() {
      var info = {'selected': {'total': 0, 'count': 0, 'filtered': 0}, 'available': {'total': 0, 'count': 0, 'filtered': 0} };

      for (var i=0, len=this._elements.length; i<len; i++) {
        var eData = this._elements[i];
        info[eData.selected?'selected':'available'][eData.filtered?'filtered':'count']++;
        info[eData.selected?'selected':'available'].total++;
      }

      return info;
    },

    setSelected: function(eData, selected, silent) {
      if (eData.optionElement.attr('disabled') && selected) {
        return;
      }

      eData.optionElement.prop('selected', eData.selected = selected);

      this._appendToList(eData);

      if (!silent) {
        if (this._widget.options.sortable && selected) {
          this._reorderSelected(eData.optionGroup);
        }
        this._updateGroupElements(this._groups.get(eData.optionGroup));
        this._widget._updateHeaders();
        this._widget._triggerUIEvent(EVENT_CHANGE, { optionElements:[eData.optionElement[0]], selected:selected } );
      }
    },

    // utility function to select all options
    setSelectedAll: function(selected) {
      var _transferedOptions = [];
      var _modifiedGroups = {};

      this._bufferedMode(true);

      for (var i=0, eData, len=this._elements.length; i<len; i++) {
        eData = this._elements[i];
        if (!((eData.selected == selected) || (eData.optionElement.attr('disabled') || (selected && (eData.filtered || eData.selected))))) {
          this.setSelected(eData, selected, true);
          _transferedOptions.push(eData.optionElement[0]);
          _modifiedGroups[eData.optionGroup] = true;
        }
      }

      if (this._widget.options.sortable && selected) {
        var that = this;
        $.each(_modifiedGroups, function(g) {  that._reorderSelected(g); });
      }

      this._updateGroupElements();
      this._widget._updateHeaders();
      this._bufferedMode(false);

      this._widget._triggerUIEvent(EVENT_CHANGE, { optionElements:_transferedOptions, selected:selected } );
    }

  };

  /**
   * Expects paramter p to be
   *
   *   locale        (string) the locale to use (default = '')
   *   key           (string) the locale string key
   *   plural        (int)    the plural value to use
   *   data          (object) the data object to use as variables
   *
   */
  function _(p) {
    var locale = $.uix.multiselect.i18n[p.locale] ? p.locale : '';
    var i18n = $.uix.multiselect.i18n[locale];
    var plural = p.plural || 0;
    var data = p.data || {};
    var t;

    if (plural === 2 && i18n[p.key+'_plural_two']) {
      t = i18n[p.key+'_plural_two'];
    } else if ((plural === 2 || plural === 3) && i18n[p.key+'_plural_few']) {
      t = i18n[p.key+'_plural_few']
    } else if (plural > 1 && i18n[p.key+'_plural']) {
      t = i18n[p.key+'_plural'];
    } else if (plural === 0 && i18n[p.key+'_nil']) {
      t = i18n[p.key+'_nil'];
    } else {
      t = i18n[p.key] || '';
    }

    return t.replace(/\{([^\}]+)\}/g, function(m, n) { return data[n]; });
  };

  /**
   * Default translation
   */
  $.uix.multiselect.i18n = {
    '': {
      itemsSelected_nil: 'No items',          // 0
      itemsSelected: '{count} items',          // 0, 1
      itemsSelected_plural: '{count} items',  // n
      //itemsSelected_plural_two: ...                    // 2
      //itemsSelected_plural_few: ...                    // 3, 4
      itemsAvailable_nil: 'No items',
      itemsAvailable: '{count} item',
      itemsAvailable_plural: '{count} items',
      //itemsAvailable_plural_two: ...
      //itemsAvailable_plural_few: ...
      itemsFiltered_nil: 'None found',
      itemsFiltered: '{count} item',
      itemsFiltered_plural: '{count} items',
      //itemsFiltered_plural_two: ...
      //itemsFiltered_plural_few: ...
      selectAll: 'Select All',
      deselectAll: 'Deselect All',
      search: 'Search Options',
      collapseGroup: 'Collapse Group',
      expandGroup: 'Expand Group',
      selectAllGroup: 'Select All Group',
      deselectAllGroup: 'Deselect All Group'
    }
  };

})(jQuery, window);
},{}],9:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}],10:[function(require,module,exports){
var dexbase = {};

dexbase.version = "0.9.0.1";
dexbase.css = require('../css/dex.css');

// Dependencies:
// https://github.com/federico-lox/pubsub.js
dexbase.bus = require("../lib/pubsub");
dexbase.moment = require("../lib/moment/moment");

// Allow jqueryui to play well with bootstrap.  This
// also means we must include dex.js before bootstrap.
// REM: Would like to break the JQuery UI dependencies.
$.widget.bridge('uitooltip', $.ui.tooltip);
$.widget.bridge('uibutton', $.ui.button);

require("../lib/jquery-layout/jquery-layout");
require("../lib/uix-multiselect/uix.multiselect");
$.widget.bridge('listSelectView', $.uix.multiselect);

require("../lib/bootstrap-multiselect/bootstrap-multiselect");
require("../lib/bootstrap-toggle/bootstrap-toggle");
require("../lib/spectrum/spectrum");

module.exports = dexbase;
},{"../css/dex.css":1,"../lib/bootstrap-multiselect/bootstrap-multiselect":2,"../lib/bootstrap-toggle/bootstrap-toggle":3,"../lib/jquery-layout/jquery-layout":4,"../lib/moment/moment":5,"../lib/pubsub":6,"../lib/spectrum/spectrum":7,"../lib/uix-multiselect/uix.multiselect":8}]},{},[10])(10)
});