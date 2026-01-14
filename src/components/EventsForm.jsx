import React from 'react'
import { Box, Button, MenuItem, Select, TextField } from '@mui/material'
import { weekDays } from '../utils/constants'
import { useState } from 'react'


export function EventsForm({ setEventList, eventList, handleClose }) {
  const [formData, setFormData] = useState({
    title: '',
    startTime: '',
    endTime: '',
    day: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEventList([...eventList, formData])
    handleClose()
  }

  return (
    <form onSubmit={handleSubmit} id='event-form'>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          variant='outlined'
          label='Materia'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          variant='outlined'
          label='Hora de inicio'
          type='time'
          name='startTime'
          value={formData.startTime}
          onChange={handleChange}
          required
        />
        <TextField
          variant='outlined'
          label='Hora de fin'
          type='time'
          name='endTime'
          value={formData.endTime}
          onChange={handleChange}
          required
        />
        <Select
          sx={{ width: '8em' }}
          name='day'
          value={formData.day}
          onChange={handleChange}
          required
        >
          {weekDays.map(day => (
            <MenuItem value={day}>{day}</MenuItem>
          ))}
        </Select>
      </Box>
    </form>
  )
}
