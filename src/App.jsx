import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { EventsForm } from './components/EventsForm'
import { EventList } from './components/EventList'
import { BasicModal } from './components/BasicModal'
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
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <>
      <Box sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: 2
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 2 }}>
          <Button
            variant='contained'
            startIcon={<AddIcon />}
            onClick={handleOpen}
            sx={{ alignSelf: 'flex-start' }}
          >Crear evento</Button>
          <EventList events={eventList} setEvents={setEventList} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Calendar key='calendar' eventList={eventList} />
        </Box>
      </Box >
      <BasicModal showModal={showModal} handleClose={handleClose}>
        <EventsForm setEventList={setEventList} eventList={eventList} handleClose={handleClose} />
      </BasicModal>
    </>
  )
}

export default App
