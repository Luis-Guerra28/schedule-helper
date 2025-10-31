import React from 'react'
import { Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { generateHoursRange } from '../utils/generateHoursRanges'
import { weekDays } from '../utils/constants'

export function ScheduleGrid() {
  const hours = generateHoursRange()

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    ...theme.typography.body2,
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }))

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gridTemplateRows: 'repeat(6, 1fr)',
      gap: '6px',

    }}>
      <Item>---</Item>
      {weekDays.map(day => <Item>{day}</Item>)}
      {hours.map((hour, index) => (
        <Item sx={{ gridArea: `${index + 2} / 1 / ${index + 3} / 2` }}>
          {hour.replace('-', '')}
        </Item>
      ))}

    </Box>
  )
}
