import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Paper } from '@mui/material'

const DAYS = Object.freeze({
  DOMINGO: 0,
  LUNES: 1,
  MARTES: 2,
  MIERCOLES: 3,
  JUEVES: 4,
  VIERNES: 5,
  SABADO: 6
})

export default function Calendar({ eventList }) {
  const events = eventList.map((event) => {

    return {
      title: event.title,
      daysOfWeek: [DAYS[event.day.toUpperCase()]], // 5 es Viernes en el estándar (0-6)
      startTime: event.startTime,
      endTime: event.endTime,
      //      startRecur: "2025-12-01", // (Opcional) Cuándo empieza a repetirse
      //      //endRecur: "2026-06-01"    // (Opcional) Cuándo deja de repetirse
    }
  })
  console.log(events)









  return (
    <Paper sx={{ mx: 10 }}>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        weekends={false}
        events={events}
      />
    </Paper>
  )
}