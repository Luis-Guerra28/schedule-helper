import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'

export function BasicModal({ showModal, handleClose, children }) {
  return (
    <Dialog open={showModal} onClose={handleClose}>
      <DialogTitle>Crear evento</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button type='submit' form='event-form'>
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  )
}
