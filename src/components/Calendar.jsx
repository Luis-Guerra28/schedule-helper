import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
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

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        weekends={false}
        events={events}

        height={isMobile ? 'auto' : '100%'}
      />
    </Box>
  )
}