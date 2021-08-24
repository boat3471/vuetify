/**
 * @param {String|Date|Number} dateTime
 * @return YYYY-MM-DD HH:mm:ss
 */
export function dateTimeFormat (dateTime: string | Date | number): any {
  let dateObj = dateTime
  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    dateObj = new Date(dateTime)
  }
  if (dateObj) {
    dateObj = dateObj as Date
    const year = dateObj.getFullYear()
    const month = (dateObj.getMonth() + 1 + '').padStart(2, '0')
    const date = (dateObj.getDate() + '').padStart(2, '0')
    const hours = (dateObj.getHours() + '').padStart(2, '0')
    const minutes = (dateObj.getMinutes() + '').padStart(2, '0')
    const seconds = (dateObj.getSeconds() + '').padStart(2, '0')
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
  }
  return ''
}

export function dateTimeFormatDate (dateTime: string | Date | number): any {
  let dateObj = dateTime
  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    dateObj = new Date(dateTime)
  }
  if (dateObj) {
    dateObj = dateObj as Date
    if (dateObj.setMilliseconds) {
      dateObj.setMilliseconds(0)
    }
  }
  return dateObj || null
}
