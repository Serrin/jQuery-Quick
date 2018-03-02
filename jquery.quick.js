/**
 * @name jQuery Quick plugin
 * @version 1.0.2
 * @see https://github.com/Serrin/jQuery-Quick
 * @license MIT https://opensource.org/licenses/MIT
 */

(function($){
"use strict";

$.fn.quickHide = function () {
  this.css("display", "none");
  return this;
};

$.fn.quickShow = function (value) {
  this.css("display", value || "");
  return this;
};

}(jQuery));
