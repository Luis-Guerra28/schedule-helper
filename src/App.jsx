import React from 'react'
import { EventsForm } from './components/EventsForm'
import { useState } from 'react'
import Calendar from './components/Calendar'

function App() {

  const events = [
    {
      day: "JUEVES",
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
      day: "JUEVES",
      title: "Descanso/Almuerzo",
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

  const [eventList] = useState(events)

  return (
    <>
      <EventsForm />
      <Calendar key='calendar' eventList={eventList} />
    </>
  )
}

export default App
