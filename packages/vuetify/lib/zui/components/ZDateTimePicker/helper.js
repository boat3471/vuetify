/**
 * @param {String|Date|Number} dateTime
 * @param type
 * @return YYYY-MM-DD HH:mm:ss
 */
export function dateTimeFormat(dateTime, type = '') {
  let dateObj = dateTime;

  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    dateObj = new Date(dateTime);

    if (dateObj + '' === 'Invalid Date') {
      dateObj = new Date();
    }
  }

  if (dateObj) {
    dateObj = dateObj;
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1 + '').padStart(2, '0');
    const date = (dateObj.getDate() + '').padStart(2, '0');
    const hours = (dateObj.getHours() + '').padStart(2, '0');
    const minutes = (dateObj.getMinutes() + '').padStart(2, '0');
    const seconds = (dateObj.getSeconds() + '').padStart(2, '0');

    if (type === 'date') {
      return `${year}-${month}-${date}`;
    }

    if (type === 'time') {
      return `${hours}:${minutes}:${seconds}`;
    }

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }

  return '';
}
export function dateTimeFormatDate(dateTime) {
  let dateObj = dateTime;

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
export function compareTime(time1, time2) {
  const t1 = +new Date(`1970-01-01 ${time1}`);
  const t2 = +new Date(`1970-01-01 ${time2}`);

  if (t1 > t2) {
    return 1;
  }

  if (t1 < t2) {
    return -1;
  }

  return 0;
}
export function compareDate(date1, date2) {
  const d1 = +new Date(date1);
  const d2 = +new Date(date2);

  if (d1 > d2) {
    return 1;
  }

  if (d1 < d2) {
    return -1;
  }

  return 0;
}
//# sourceMappingURL=helper.js.map