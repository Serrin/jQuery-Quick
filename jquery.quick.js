/**
 * @name jQuery Quick plugin
 * @version 1.0.3
 * @see https://github.com/Serrin/jQuery-Quick
 * @license MIT https://opensource.org/licenses/MIT
 */

(function($){
"use strict";

$.fn.quickHide = function () { return this.css("display", "none"); };

$.fn.quickShow = function (value) { return this.css("display", value || ""); };

}(jQuery));
