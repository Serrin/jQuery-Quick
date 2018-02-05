/** jQuery Quick plugin * @version 1.0.1 * @see https://github.com/Serrin/jQuery-Quick */
"use strict";

$.fn.quickHide = function () {
  this.css("display", "none");
  return this;
};

$.fn.quickShow = function (value) {
  this.css("display", value || "");
  return this;
};
