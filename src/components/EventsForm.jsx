import React from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Add, Clear } from '@mui/icons-material'
import { weekDays } from '../utils/constants'
import { useState } from 'react'


export function EventsForm({ setEventList, eventList, handleClose }) {
  const [title, setTitle] = useState('')
  const [sessions, setSessions] = useState([{
    startTime: '',
    endTime: '',
    day: ''
  }])

  const handleTitleChange = (e) => setTitle(e.target.value)

  const handleSessionsChange = (index, field, value) => {
    const updatedSessions = [...sessions]
    updatedSessions[index][field] = value
    setSessions(updatedSessions)
  }

  const addSession = () => setSessions([
    ...sessions,
    { day: '', startTime: '', endTime: '' }
  ])

  const removeSession = (index) => {
    setSessions(sessions.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validSessions = sessions.filter(session => (
      session.day &&
      session.startTime &&
      session.endTime
    ))
    if (!title || validSessions.length === 0) return
    const newEvents = validSessions.map(session => ({
      title, ...session
    }))

    setEventList([...eventList, ...newEvents])
    handleClose()
  }

  return (
    <form onSubmit={handleSubmit} id='event-form'>
      <Box
        sx={{ display: 'grid', gap: 2, p: 2, gridTemplateColumns: '1fr 1fr' }}
      >
        <TextField
          variant='outlined'
          label='Materia'
          name='title'
          value={title}
          onChange={handleTitleChange}
          required
          sx={{ gridColumn: 'span 2' }}
        />
        {sessions.map((session, index) => (
          <React.Fragment key={index}>
            <FormControl sx={{ gridColumn: 'span 2' }}>
              <InputLabel id='select-label'>
                Día de la semana *
              </InputLabel>
              <Select
                name='day'
                labelId='select-label'
                label='Día de la semana*'
                value={session.day}
                onChange={(e) => handleSessionsChange(index, 'day', e.target.value)}
                required
              >
                {weekDays.map(day => (
                  <MenuItem value={day}>{day}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              variant='outlined'
              label='Desde'
              type='time'
              name='startTime'
              value={session.startTime}
              onChange={(e) => handleSessionsChange(index, 'startTime', e.target.value)}
              required
              sx={{ gridColumn: 1 }}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              variant='outlined'
              label='Hasta'
              type='time'
              name='endTime'
              value={session.endTime}
              onChange={(e) => handleSessionsChange(index, 'endTime', e.target.value)}
              sx={{ gridColumn: 2 }}
              slotProps={{ inputLabel: { shrink: true } }}
              required
            />
            {index > 0 && (
              <Button
                size='small'
                startIcon={<Clear />}
                onClick={() => removeSession(index)}
                color='error'
              >
                Quitar
              </Button>
            )}
          </React.Fragment>
        ))}
        <Button
          size='small'
          startIcon={<Add />}
          onClick={addSession}
        >
          Añadir Sesión
        </Button>
      </Box >
    </form >
  )
}
