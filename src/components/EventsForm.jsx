import React from 'react'
import { Box, Button, MenuItem, Select, TextField } from '@mui/material'
import { weekDays } from '../utils/constants'


export function EventsForm() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 5 }}>
        <TextField
          variant='outlined'
          label='Materia'
          id='name'
        />
        <TextField
          variant='outlined'
          label='Hora de inicio'
          id='timeStart'
          type='time'
        />
        <TextField
          variant='outlined'
          label='Hora de fin'
          id='timeEnd'
          type='time'
        />
        <Select sx={{ width: '8em' }}>
          {weekDays.map(day => (
            <MenuItem value={day}>{day}</MenuItem>
          ))}
        </Select>
        <Button variant='contained' >Crear</Button>
      </Box>
    </>
  )
}
