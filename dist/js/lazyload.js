"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:(void 0).window||(void 0).global,function(e){"function"==typeof define&&define.amd&&(e=window);var o={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0};function r(t,e){this.settings=function o(){var r={},s=!1,t=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(s=arguments[0],t++);for(var n=function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s&&"[object Object]"===Object.prototype.toString.call(t[e])?r[e]=o(!0,r[e],t[e]):r[e]=t[e])};t<e;t++)n(arguments[t]);return r}(o,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}if(r.prototype={init:function(){if(e.IntersectionObserver){var r=this,t={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){r.observer.unobserve(t.target);var e=t.target.getAttribute(r.settings.src),o=t.target.getAttribute(r.settings.srcset);"img"===t.target.tagName.toLowerCase()?(e&&(t.target.src=e),o&&(t.target.srcset=o)):t.target.style.backgroundImage="url("+e+")"}})},t),Array.prototype.forEach.call(this.images,function(t){r.observer.observe(t)})}else this.loadImages()},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(this.settings){var r=this;Array.prototype.forEach.call(this.images,function(t){var e=t.getAttribute(r.settings.src),o=t.getAttribute(r.settings.srcset);"img"===t.tagName.toLowerCase()?(e&&(t.src=e),o&&(t.srcset=o)):t.style.backgroundImage="url('"+e+"')"})}},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},e.lazyload=function(t,e){return new r(t,e)},e.jQuery){var s=e.jQuery;s.fn.lazyload=function(t){return(t=t||{}).attribute=t.attribute||"data-src",new r(s.makeArray(this),t),this}}return r});