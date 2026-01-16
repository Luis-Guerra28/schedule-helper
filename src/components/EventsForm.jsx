import React from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'
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
      <Box
        /* sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} */
        sx={{ display: 'grid', gap: 2, p: 2, gridTemplateColumns: '1fr 1fr' }}

      >
        <TextField
          variant='outlined'
          label='Materia'
          name='title'
          value={formData.title}
          onChange={handleChange}
          required
          sx={{ gridColumn: 'span 2' }}
        />
        <TextField
          variant='outlined'
          label='Desde'
          type='time'
          name='startTime'
          value={formData.startTime}
          onChange={handleChange}
          required
          sx={{ gridColumn: 1 }}
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          variant='outlined'
          label='Hasta'
          type='time'
          name='endTime'
          value={formData.endTime}
          onChange={handleChange}
          sx={{ gridColumn: 2 }}
          slotProps={{ inputLabel: { shrink: true } }}
          required
        />
        <FormControl sx={{ gridColumn: 'span 2' }}>
          <InputLabel id='select-label'>Día de la semana*</InputLabel>
          <Select
            name='day'
            labelId='select-label'
            label='Día de la semana*'
            value={formData.day}
            onChange={handleChange}
            required
          >
            {weekDays.map(day => (
              <MenuItem value={day}>{day}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box >
    </form >
  )
}
