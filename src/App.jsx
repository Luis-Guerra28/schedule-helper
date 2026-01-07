import React, { useState } from 'react'
import { Box } from '@mui/material'
import { EventsForm } from './components/EventsForm'
import { EventList } from './components/EventList'
import Calendar from './components/Calendar'

function App() {

  const events = [
    {
      day: "Lunes",
      title: "Matemáticas Avanzadas",
      startTime: "08:00",
      endTime: "09:30"
    },
    {
      day: "JUEVES",
      title: "Física Cuántica",
      startTime: "09:30",
      endTime: "11:00"
    },
    {
      day: "Martes",
      title: "Electrotecnia",
      startTime: "11:00",
      endTime: "12:00"
    },
    {
      day: "JUEVES",
      title: "Programación Orientada a Objetos",
      startTime: "12:00",
      endTime: "13:45"
    },
    {
      day: "VIERNES",
      title: "Historia del Arte Moderno",
      startTime: "13:45",
      endTime: "15:00"
    },
    {
      day: "VIERNES",
      title: "Química Orgánica",
      startTime: "15:00",
      endTime: "16:30"
    }
  ]

  const [eventList, setEventList] = useState(events)

  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <EventsForm setEventList={setEventList} eventList={eventList} />
          <EventList events={eventList} setEvents={setEventList} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Calendar key='calendar' eventList={eventList} />
        </Box>
      </Box>
    </>
  )
}

export default App
