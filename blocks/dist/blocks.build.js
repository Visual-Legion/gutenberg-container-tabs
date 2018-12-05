/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/ContainerBlock/block.js":
/*!********************************************!*\
  !*** ./blocks/src/ContainerBlock/block.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/ContainerBlock/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/ContainerBlock/editor.scss");

// import * as api from './api';

/**
 * BLOCK: container
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var Button = wp.components.Button;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('vl-ct/container', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('VL Container Tab Content'), // Block title.
  icon: 'admin-plugins', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('VL Container Tab Content'), __('Container Tab Content')],
  attributes: {},

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  // edit: function(props) {
  edit: function edit() {

    // const {attributes: {title}, setAttributes} = props;


    // REMOVE FOR PRODUCTION
    // console.log('settings_values.api_key', settings_values.api_key);

    //TODO : if api key return map, else ask to setup api key => <h2>Please enter your google maps api key <a href="/wp-admin/admin.php?page=vl_ct">here</a> before we can load your map.</h2>

    return wp.element.createElement(
      'div',
      { className: 'vl_container_tab_content tabs_item' },
      wp.element.createElement(InnerBlocks, null)
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  // save: function(props) {
  save: function save() {
    // const {attributes: {title}, setAttributes} = props;

    return wp.element.createElement(
      'div',
      { className: 'vl_container_tab_content tabs_item' },
      wp.element.createElement(InnerBlocks.Content, null)
    );
  }
});

/***/ }),

/***/ "./blocks/src/ContainerBlock/editor.scss":
/*!***********************************************!*\
  !*** ./blocks/src/ContainerBlock/editor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/ContainerBlock/style.scss":
/*!**********************************************!*\
  !*** ./blocks/src/ContainerBlock/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./container-tabs/block */ "./blocks/src/container-tabs/block.js");

__webpack_require__(/*! ./ContainerBlock/block */ "./blocks/src/ContainerBlock/block.js");

/***/ }),

/***/ "./blocks/src/container-tabs/block.js":
/*!********************************************!*\
  !*** ./blocks/src/container-tabs/block.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/container-tabs/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/container-tabs/editor.scss");

// import * as api from './api';

/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText,
    InnerBlocks = _wp$editor.InnerBlocks;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var Button = wp.components.Button;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('vl-ct/tab', {
		// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __('VL Container Tabs '), // Block title.
		icon: 'admin-plugins', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
		keywords: [__('VL Container Tabs '), __('Container Tabs ')],
		attributes: {
				tab1: {
						type: 'string',
						selector: '.vl_ct_tab1--text',
						default: 'Tab1'
				},
				tab2: {
						type: 'string',
						selector: '.vl_ct_tab2--text',
						default: 'Tab2'
				},
				tab3: {
						type: 'string',
						selector: '.vl_ct_tab3--text',
						default: 'Tab3'
				},
				tab4: {
						type: 'string',
						selector: '.vl_ct_tab4--text',
						default: 'Tab4'
				}
		},

		/**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
		edit: function edit(props) {
				var _props$attributes = props.attributes,
				    tab1 = _props$attributes.tab1,
				    tab2 = _props$attributes.tab2,
				    tab3 = _props$attributes.tab3,
				    tab4 = _props$attributes.tab4,
				    setAttributes = props.setAttributes;


				var VL_TAB_ALLOWED_BLOCKS = ['vl-ct/container'];
				var VL_TAB_TEMPLATE = [VL_TAB_ALLOWED_BLOCKS, VL_TAB_ALLOWED_BLOCKS, VL_TAB_ALLOWED_BLOCKS, VL_TAB_ALLOWED_BLOCKS];

				var addBlock = function addBlock() {
						console.log('adddddd');
				};

				// REMOVE FOR PRODUCTION
				// console.log('settings_values.api_key', settings_values.api_key);

				//TODO : if api key return map, else ask to setup api key => <h2>Please enter your google maps api key <a href="/wp-admin/admin.php?page=vl_ct">here</a> before we can load your map.</h2>

				return wp.element.createElement(
						'div',
						{ className: 'vl_container_tab tab' },
						wp.element.createElement(
								'ul',
								{ 'class': 'tabs' },
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(PlainText, { value: tab1, onChange: function onChange(content) {
														return setAttributes({
																tab1: content
														});
												} })
								),
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(PlainText, { value: tab2, onChange: function onChange(content) {
														return setAttributes({
																tab2: content
														});
												} })
								),
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(PlainText, { value: tab3, onChange: function onChange(content) {
														return setAttributes({
																tab3: content
														});
												} })
								),
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(PlainText, { value: tab4, onChange: function onChange(content) {
														return setAttributes({
																tab4: content
														});
												} })
								)
						),
						wp.element.createElement(
								'div',
								{ 'class': 'tab_content' },
								wp.element.createElement(InnerBlocks, { allowedBlocks: VL_TAB_ALLOWED_BLOCKS, template: VL_TAB_TEMPLATE, key: '1' })
						)
				);
		},

		/*<h3 class="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
         <div id="tab1" class="tab_content">
           <InnerBlocks allowedBlocks={ VL_TAB_ALLOWED_BLOCKS } key="1" />
         </div>
         <h3 class="tab_drawer_heading" rel="tab2">Tab 2</h3>
         <div id="tab2" class="tab_content">
           <InnerBlocks allowedBlocks={ VL_TAB_ALLOWED_BLOCKS } key="2" />
         </div>
         <h3 class="tab_drawer_heading" rel="tab3">Tab 3</h3>
         <div id="tab3" class="tab_content">
           <InnerBlocks allowedBlocks={ VL_TAB_ALLOWED_BLOCKS } key="3" />
         </div>
         <h3 class="tab_drawer_heading" rel="tab4">Tab 4</h3>
         <div id="tab4" class="tab_content">
           <InnerBlocks allowedBlocks={ VL_TAB_ALLOWED_BLOCKS } key="4" />
         </div>*/

		/**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
		save: function save(props) {
				var _props$attributes2 = props.attributes,
				    tab1 = _props$attributes2.tab1,
				    tab2 = _props$attributes2.tab2,
				    tab3 = _props$attributes2.tab3,
				    tab4 = _props$attributes2.tab4,
				    setAttributes = props.setAttributes;


				return wp.element.createElement(
						'div',
						{ className: 'vl_container_tab tab' },
						wp.element.createElement(
								'ul',
								{ 'class': 'tabs' },
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(
												'a',
												{ 'class': 'vl_ct_tab1--text', href: '#' },
												tab1
										)
								),
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(
												'a',
												{ 'class': 'vl_ct_tab2--text', href: '#' },
												tab2
										)
								),
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(
												'a',
												{ 'class': 'vl_ct_tab3--text', href: '#' },
												tab3
										)
								),
								wp.element.createElement(
										'li',
										null,
										wp.element.createElement(
												'a',
												{ 'class': 'vl_ct_tab4--text', href: '#' },
												tab4
										)
								)
						),
						wp.element.createElement(
								'div',
								{ 'class': 'tab_content' },
								wp.element.createElement(InnerBlocks.Content, null)
						)
				);

				/*<h3 class="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
           <div id="tab1" class="tab_content">
             <InnerBlocks.Content key="1" />
           </div>
           <h3 class="tab_drawer_heading" rel="tab2">Tab 2</h3>
           <div id="tab2" class="tab_content">
             <InnerBlocks.Content key="2" />
           </div>
           <h3 class="tab_drawer_heading" rel="tab3">Tab 3</h3>
           <div id="tab3" class="tab_content">
             <InnerBlocks.Content key="3" />
           </div>
           <h3 class="tab_drawer_heading" rel="tab4">Tab 4</h3>
           <div id="tab4" class="tab_content">
             <InnerBlocks.Content key="4" />
           </div>*/
		}
});

/***/ }),

/***/ "./blocks/src/container-tabs/editor.scss":
/*!***********************************************!*\
  !*** ./blocks/src/container-tabs/editor.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/container-tabs/style.scss":
/*!**********************************************!*\
  !*** ./blocks/src/container-tabs/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9Db250YWluZXJCbG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL0NvbnRhaW5lckJsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvQ29udGFpbmVyQmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2NvbnRhaW5lci10YWJzL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvY29udGFpbmVyLXRhYnMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9jb250YWluZXItdGFicy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbIndwIiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJSaWNoVGV4dCIsIklubmVyQmxvY2tzIiwiX18iLCJpMThuIiwiYmxvY2tzIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJJbnNwZWN0b3JDb250cm9scyIsIkJ1dHRvbiIsImNvbXBvbmVudHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwiYXR0cmlidXRlcyIsImVkaXQiLCJzYXZlIiwidGFiMSIsInR5cGUiLCJzZWxlY3RvciIsImRlZmF1bHQiLCJ0YWIyIiwidGFiMyIsInRhYjQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJWTF9UQUJfQUxMT1dFRF9CTE9DS1MiLCJWTF9UQUJfVEVNUExBVEUiLCJhZGRCbG9jayIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUFXRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxTQUFNLGtCQUFULEVBQTRCLE1BQUssR0FBakM7QUFDSUM7QUFESjtBQURGLFNBWEY7QUFnQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUcsU0FBTSxrQkFBVCxFQUE0QixNQUFLLEdBQWpDO0FBQ0lDO0FBREo7QUFERjtBQWhCRixPQURGO0FBdUJFO0FBQUE7QUFBQSxVQUFLLFNBQU0sYUFBWDtBQUNFLGlDQUFDLFdBQUQsQ0FBYSxPQUFiO0FBREY7QUF2QkYsS0FERDs7QUE4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFwSzZCLENBQS9CLEU7Ozs7Ozs7Ozs7O0FDaENBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCIvKipcbiAqIEJMT0NLOiBjb250YWluZXJcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vLyBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHQsIElubmVyQmxvY2tzfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHtfX30gPSB3cC5pMThuOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cbmNvbnN0IHtyZWdpc3RlckJsb2NrVHlwZSwgSW5zcGVjdG9yQ29udHJvbHN9ID0gd3AuYmxvY2tzOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgndmwtY3QvY29udGFpbmVyJywge1xuICAvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cbiAgdGl0bGU6IF9fKCdWTCBDb250YWluZXIgVGFiIENvbnRlbnQnKSwgLy8gQmxvY2sgdGl0bGUuXG4gIGljb246ICdhZG1pbi1wbHVnaW5zJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuICBjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuICBrZXl3b3JkczogW1xuICAgIF9fKCdWTCBDb250YWluZXIgVGFiIENvbnRlbnQnKSxcbiAgICBfXygnQ29udGFpbmVyIFRhYiBDb250ZW50JylcbiAgXSxcbiAgYXR0cmlidXRlczoge1xuICB9LFxuXG5cbiAgLyoqXG4gICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAgKlxuICAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICAqL1xuICAvLyBlZGl0OiBmdW5jdGlvbihwcm9wcykge1xuICBlZGl0OiBmdW5jdGlvbigpIHtcblxuICAgIC8vIGNvbnN0IHthdHRyaWJ1dGVzOiB7dGl0bGV9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cbiAgICAvLyBSRU1PVkUgRk9SIFBST0RVQ1RJT05cbiAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZ3NfdmFsdWVzLmFwaV9rZXknLCBzZXR0aW5nc192YWx1ZXMuYXBpX2tleSk7XG5cbiAgICAvL1RPRE8gOiBpZiBhcGkga2V5IHJldHVybiBtYXAsIGVsc2UgYXNrIHRvIHNldHVwIGFwaSBrZXkgPT4gPGgyPlBsZWFzZSBlbnRlciB5b3VyIGdvb2dsZSBtYXBzIGFwaSBrZXkgPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9jdFwiPmhlcmU8L2E+IGJlZm9yZSB3ZSBjYW4gbG9hZCB5b3VyIG1hcC48L2gyPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmxfY29udGFpbmVyX3RhYl9jb250ZW50IHRhYnNfaXRlbVwiPlxuICAgICA8SW5uZXJCbG9ja3MgLz5cbiAgIDwvZGl2PlxuICAgIClcblxuICB9LFxuXG5cbiAgLyoqXG4gICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgICpcbiAgICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgICovXG4gIC8vIHNhdmU6IGZ1bmN0aW9uKHByb3BzKSB7XG4gIHNhdmU6IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnN0IHthdHRyaWJ1dGVzOiB7dGl0bGV9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmxfY29udGFpbmVyX3RhYl9jb250ZW50IHRhYnNfaXRlbVwiPlxuICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuICAgPC9kaXY+XG4gICAgKVxuXG5cbiAgfSxcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAnLi9jb250YWluZXItdGFicy9ibG9jayc7XG5pbXBvcnQgJy4vQ29udGFpbmVyQmxvY2svYmxvY2snO1xuLy8gaW1wb3J0ICcuL3ZsLWN0LWVkaXRvci9ibG9jayc7XG4vLyBpbXBvcnQgJy4vdmwtY3QtcGFnZS9ibG9jayc7IiwiLyoqXG4gKiBCTE9DSzogbWFpblxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8vIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHtNZWRpYVVwbG9hZCwgUGxhaW5UZXh0LCBSaWNoVGV4dCwgSW5uZXJCbG9ja3N9ID0gd3AuZWRpdG9yO1xuY29uc3Qge19ffSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlLCBJbnNwZWN0b3JDb250cm9sc30gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd2bC1jdC90YWInLCB7XG5cdC8vIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuXHR0aXRsZTogX18oJ1ZMIENvbnRhaW5lciBUYWJzICcpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ2FkbWluLXBsdWdpbnMnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIENvbnRhaW5lciBUYWJzICcpLFxuXHRcdF9fKCdDb250YWluZXIgVGFicyAnKVxuXHRdLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGFiMToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJy52bF9jdF90YWIxLS10ZXh0Jyxcblx0XHRcdGRlZmF1bHQ6ICdUYWIxJ1xuXHRcdH0sXG5cdFx0dGFiMjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJy52bF9jdF90YWIyLS10ZXh0Jyxcblx0XHRcdGRlZmF1bHQ6ICdUYWIyJ1xuXHRcdH0sXG5cdFx0dGFiMzoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJy52bF9jdF90YWIzLS10ZXh0Jyxcblx0XHRcdGRlZmF1bHQ6ICdUYWIzJ1xuXHRcdH0sXG5cdFx0dGFiNDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzZWxlY3RvcjogJy52bF9jdF90YWI0LS10ZXh0Jyxcblx0XHRcdGRlZmF1bHQ6ICdUYWI0J1xuXHRcdH1cblx0fSxcblxuXG5cdC8qKlxuXHQgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG5cdCAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cblx0ICpcblx0ICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0ZWRpdDogZnVuY3Rpb24ocHJvcHMpIHtcblxuXHRcdGNvbnN0IHthdHRyaWJ1dGVzOiB7dGFiMSwgdGFiMiwgdGFiMywgdGFiNH0sIHNldEF0dHJpYnV0ZXN9ID0gcHJvcHM7XG5cblx0XHRjb25zdCBWTF9UQUJfQUxMT1dFRF9CTE9DS1MgPSBbJ3ZsLWN0L2NvbnRhaW5lciddO1xuXHRcdGNvbnN0IFZMX1RBQl9URU1QTEFURSA9IFtWTF9UQUJfQUxMT1dFRF9CTE9DS1MsIFZMX1RBQl9BTExPV0VEX0JMT0NLUywgVkxfVEFCX0FMTE9XRURfQkxPQ0tTLCBWTF9UQUJfQUxMT1dFRF9CTE9DS1NdO1xuXG5cdFx0Y29uc3QgYWRkQmxvY2sgPSAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnYWRkZGRkZCcpO1xuXHRcdH1cblxuXHRcdC8vIFJFTU9WRSBGT1IgUFJPRFVDVElPTlxuXHRcdC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nc192YWx1ZXMuYXBpX2tleScsIHNldHRpbmdzX3ZhbHVlcy5hcGlfa2V5KTtcblxuXHRcdC8vVE9ETyA6IGlmIGFwaSBrZXkgcmV0dXJuIG1hcCwgZWxzZSBhc2sgdG8gc2V0dXAgYXBpIGtleSA9PiA8aDI+UGxlYXNlIGVudGVyIHlvdXIgZ29vZ2xlIG1hcHMgYXBpIGtleSA8YSBocmVmPVwiL3dwLWFkbWluL2FkbWluLnBocD9wYWdlPXZsX2N0XCI+aGVyZTwvYT4gYmVmb3JlIHdlIGNhbiBsb2FkIHlvdXIgbWFwLjwvaDI+XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2bF9jb250YWluZXJfdGFiIHRhYlwiPlxuICAgICA8dWwgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICAgPGxpPlxuICAgICAgICAgPFBsYWluVGV4dCB2YWx1ZT17IHRhYjEgfSBvbkNoYW5nZT17IChjb250ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRhYjE6IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG4gICAgICAgPC9saT5cbiAgICAgICA8bGk+XG4gICAgICAgICA8UGxhaW5UZXh0IHZhbHVlPXsgdGFiMiB9IG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0dGFiMjogY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0gLz5cbiAgICAgICA8L2xpPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxQbGFpblRleHQgdmFsdWU9eyB0YWIzIH0gb25DaGFuZ2U9eyAoY29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR0YWIzOiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSAvPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPFBsYWluVGV4dCB2YWx1ZT17IHRhYjQgfSBvbkNoYW5nZT17IChjb250ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRhYjQ6IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG4gICAgICAgPC9saT5cbiAgICAgPC91bD5cbiAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50XCI+XG4gICAgICAgPElubmVyQmxvY2tzIGFsbG93ZWRCbG9ja3M9eyBWTF9UQUJfQUxMT1dFRF9CTE9DS1MgfSB0ZW1wbGF0ZT17IFZMX1RBQl9URU1QTEFURSB9IGtleT1cIjFcIiAvPlxuICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuXHRcdClcblxuXHR9LFxuXG5cdC8qPGgzIGNsYXNzPVwiZF9hY3RpdmUgdGFiX2RyYXdlcl9oZWFkaW5nXCIgcmVsPVwidGFiMVwiPlRhYiAxPC9oMz5cblx0ICAgICAgIDxkaXYgaWQ9XCJ0YWIxXCIgY2xhc3M9XCJ0YWJfY29udGVudFwiPlxuXHQgICAgICAgICA8SW5uZXJCbG9ja3MgYWxsb3dlZEJsb2Nrcz17IFZMX1RBQl9BTExPV0VEX0JMT0NLUyB9IGtleT1cIjFcIiAvPlxuXHQgICAgICAgPC9kaXY+XG5cdCAgICAgICA8aDMgY2xhc3M9XCJ0YWJfZHJhd2VyX2hlYWRpbmdcIiByZWw9XCJ0YWIyXCI+VGFiIDI8L2gzPlxuXHQgICAgICAgPGRpdiBpZD1cInRhYjJcIiBjbGFzcz1cInRhYl9jb250ZW50XCI+XG5cdCAgICAgICAgIDxJbm5lckJsb2NrcyBhbGxvd2VkQmxvY2tzPXsgVkxfVEFCX0FMTE9XRURfQkxPQ0tTIH0ga2V5PVwiMlwiIC8+XG5cdCAgICAgICA8L2Rpdj5cblx0ICAgICAgIDxoMyBjbGFzcz1cInRhYl9kcmF3ZXJfaGVhZGluZ1wiIHJlbD1cInRhYjNcIj5UYWIgMzwvaDM+XG5cdCAgICAgICA8ZGl2IGlkPVwidGFiM1wiIGNsYXNzPVwidGFiX2NvbnRlbnRcIj5cblx0ICAgICAgICAgPElubmVyQmxvY2tzIGFsbG93ZWRCbG9ja3M9eyBWTF9UQUJfQUxMT1dFRF9CTE9DS1MgfSBrZXk9XCIzXCIgLz5cblx0ICAgICAgIDwvZGl2PlxuXHQgICAgICAgPGgzIGNsYXNzPVwidGFiX2RyYXdlcl9oZWFkaW5nXCIgcmVsPVwidGFiNFwiPlRhYiA0PC9oMz5cblx0ICAgICAgIDxkaXYgaWQ9XCJ0YWI0XCIgY2xhc3M9XCJ0YWJfY29udGVudFwiPlxuXHQgICAgICAgICA8SW5uZXJCbG9ja3MgYWxsb3dlZEJsb2Nrcz17IFZMX1RBQl9BTExPV0VEX0JMT0NLUyB9IGtleT1cIjRcIiAvPlxuXHQgICAgICAgPC9kaXY+Ki9cblxuXHQvKipcblx0ICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcblx0ICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuXHQgKlxuXHQgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cblx0ICpcblx0ICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuXHQgKi9cblx0c2F2ZTogZnVuY3Rpb24ocHJvcHMpIHtcblx0XHRjb25zdCB7YXR0cmlidXRlczoge3RhYjEsIHRhYjIsIHRhYjMsIHRhYjR9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmxfY29udGFpbmVyX3RhYiB0YWJcIj5cbiAgICAgPHVsIGNsYXNzPVwidGFic1wiPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxhIGNsYXNzPVwidmxfY3RfdGFiMS0tdGV4dFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgIHsgdGFiMSB9XG4gICAgICAgICA8L2E+XG4gICAgICAgPC9saT5cbiAgICAgICA8bGk+XG4gICAgICAgICA8YSBjbGFzcz1cInZsX2N0X3RhYjItLXRleHRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICB7IHRhYjIgfVxuICAgICAgICAgPC9hPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPGEgY2xhc3M9XCJ2bF9jdF90YWIzLS10ZXh0XCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgeyB0YWIzIH1cbiAgICAgICAgIDwvYT5cbiAgICAgICA8L2xpPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxhIGNsYXNzPVwidmxfY3RfdGFiNC0tdGV4dFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgIHsgdGFiNCB9XG4gICAgICAgICA8L2E+XG4gICAgICAgPC9saT5cbiAgICAgPC91bD5cbiAgICAgPGRpdiBjbGFzcz1cInRhYl9jb250ZW50XCI+XG4gICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cbiAgICAgPC9kaXY+XG4gICA8L2Rpdj5cblx0XHQpXG5cblx0XHQvKjxoMyBjbGFzcz1cImRfYWN0aXZlIHRhYl9kcmF3ZXJfaGVhZGluZ1wiIHJlbD1cInRhYjFcIj5UYWIgMTwvaDM+XG5cdFx0ICAgICAgIDxkaXYgaWQ9XCJ0YWIxXCIgY2xhc3M9XCJ0YWJfY29udGVudFwiPlxuXHRcdCAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IGtleT1cIjFcIiAvPlxuXHRcdCAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgPGgzIGNsYXNzPVwidGFiX2RyYXdlcl9oZWFkaW5nXCIgcmVsPVwidGFiMlwiPlRhYiAyPC9oMz5cblx0XHQgICAgICAgPGRpdiBpZD1cInRhYjJcIiBjbGFzcz1cInRhYl9jb250ZW50XCI+XG5cdFx0ICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQga2V5PVwiMlwiIC8+XG5cdFx0ICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICA8aDMgY2xhc3M9XCJ0YWJfZHJhd2VyX2hlYWRpbmdcIiByZWw9XCJ0YWIzXCI+VGFiIDM8L2gzPlxuXHRcdCAgICAgICA8ZGl2IGlkPVwidGFiM1wiIGNsYXNzPVwidGFiX2NvbnRlbnRcIj5cblx0XHQgICAgICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCBrZXk9XCIzXCIgLz5cblx0XHQgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgIDxoMyBjbGFzcz1cInRhYl9kcmF3ZXJfaGVhZGluZ1wiIHJlbD1cInRhYjRcIj5UYWIgNDwvaDM+XG5cdFx0ICAgICAgIDxkaXYgaWQ9XCJ0YWI0XCIgY2xhc3M9XCJ0YWJfY29udGVudFwiPlxuXHRcdCAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IGtleT1cIjRcIiAvPlxuXHRcdCAgICAgICA8L2Rpdj4qL1xuXG5cdH0sXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9