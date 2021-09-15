"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTimeFormat = dateTimeFormat;
exports.dateTimeFormatDate = dateTimeFormatDate;

/**
 * @param {String|Date|Number} dateTime
 * @return YYYY-MM-DD HH:mm:ss
 */
function dateTimeFormat(dateTime) {
  var dateObj = dateTime;

  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    dateObj = new Date(dateTime);
  }

  if (dateObj) {
    dateObj = dateObj;
    var year = dateObj.getFullYear();
    var month = (dateObj.getMonth() + 1 + '').padStart(2, '0');
    var date = (dateObj.getDate() + '').padStart(2, '0');
    var hours = (dateObj.getHours() + '').padStart(2, '0');
    var minutes = (dateObj.getMinutes() + '').padStart(2, '0');
    var seconds = (dateObj.getSeconds() + '').padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
  }

  return '';
}

function dateTimeFormatDate(dateTime) {
  var dateObj = dateTime;

  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    dateObj = new Date(dateTime);
  }

  if (dateObj) {
    dateObj = dateObj;

    if (dateObj.setMilliseconds) {
      dateObj.setMilliseconds(0);
    }
  }

  return dateObj || null;
}
//# sourceMappingURL=helper.js.map