/** Query quick plugin * @version 1.0.0 * @see https://github.com/Serrin/jQuery-Quick */
"use strict";
$.fn.quickHide = function () { this.css("display", "none"); };
$.fn.quickShow = function (value) { this.css("display", value || ""); };
