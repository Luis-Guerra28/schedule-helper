
import * as React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { IconButton } from '@mui/material'

export function EventList({ events, setEvents }) {
  const deleteEvent = (eventToDelete) => {
    setEvents(events.filter((event) => event !== eventToDelete))
  }
  return (
    <List sx={{ width: '100%', overflow: 'auto' }}>
      {events.map((event, i) => (
        <ListItem
          key={i}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteEvent(event)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={event.title}
            secondary={`${event.day} | ${event.startTime} - ${event.endTime}`}
          />
        </ListItem>
      ))}
    </List>
  )
}
