"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTimeFormat = dateTimeFormat;
exports.dateTimeFormatDate = dateTimeFormatDate;
exports.compareTime = compareTime;
exports.compareDate = compareDate;

/**
 * @param {String|Date|Number} dateTime
 * @param type
 * @return YYYY-MM-DD HH:mm:ss
 */
function dateTimeFormat(dateTime) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var dateObj = dateTime;

  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    dateObj = new Date(dateTime);

    if (dateObj + '' === 'Invalid Date') {
      dateObj = new Date();
    }
  }

  if (dateObj) {
    dateObj = dateObj;
    var year = dateObj.getFullYear();
    var month = (dateObj.getMonth() + 1 + '').padStart(2, '0');
    var date = (dateObj.getDate() + '').padStart(2, '0');
    var hours = (dateObj.getHours() + '').padStart(2, '0');
    var minutes = (dateObj.getMinutes() + '').padStart(2, '0');
    var seconds = (dateObj.getSeconds() + '').padStart(2, '0');

    if (type === 'date') {
      return "".concat(year, "-").concat(month, "-").concat(date);
    }

    if (type === 'time') {
      return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }

    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
  }

  return '';
}

function dateTimeFormatDate(dateTime) {
  var dateObj = dateTime;

  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    dateObj = new Date(dateTime);

    if (dateObj + '' === 'Invalid Date') {
      dateObj = new Date();
    }
  }

  if (dateObj) {
    dateObj = dateObj;

    if (dateObj.setMilliseconds) {
      dateObj.setMilliseconds(0);
    }
  }

  return dateObj || null;
}

function compareTime(time1, time2) {
  var t1 = +new Date("1970-01-01 ".concat(time1));
  var t2 = +new Date("1970-01-01 ".concat(time2));

  if (t1 > t2) {
    return 1;
  }

  if (t1 < t2) {
    return -1;
  }

  return 0;
}

function compareDate(date1, date2) {
  var d1 = +new Date(date1);
  var d2 = +new Date(date2);

  if (d1 > d2) {
    return 1;
  }

  if (d1 < d2) {
    return -1;
  }

  return 0;
}
//# sourceMappingURL=helper.js.map