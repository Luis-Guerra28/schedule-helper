export const generateHoursRange = (
  timeStart = '7:00',
  timeEnd = '17:00',
  intervalMinutes = 120
) => {
  const hoursRanges = []
  const formatHour = (fecha) => {
    const hours = fecha.getHours().toString().padStart(2, '0')
    const minutes = fecha.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const [hStart, mStart] = timeStart.split(':').map(Number)
  const dateStart = new Date()
  dateStart.setHours(hStart, mStart, 0, 0)

  const [hEnd, mEnd] = timeEnd.split(':').map(Number)
  const dateEnd = new Date()
  dateEnd.setHours(hEnd, mEnd, 0, 0)

  let currentTime = dateStart

  while (currentTime < dateEnd) {
    let rangeEndTime = new Date(currentTime.getTime() + intervalMinutes * 60000)

    const rangeStr = `${formatHour(currentTime)} - ${formatHour(rangeEndTime)}`
    hoursRanges.push(rangeStr)
    currentTime = rangeEndTime
  }
  return hoursRanges
}