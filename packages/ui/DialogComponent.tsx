import { Button,Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React , {MouseEvent} from 'react';
import styled from '@emotion/styled';
 
 
export interface SimpleDialogProps {
  children: React.ReactNode;
  open: boolean;
  title : string;
  maxWidth : false | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  onClose: () => void;
}
 

 


export const DialogComponent = ({children, maxWidth, title,open, onClose} : SimpleDialogProps) => {
  console.log(maxWidth)
  return (
    <Dialog maxWidth={maxWidth} fullWidth open={open} onClose={onClose}>
    <DialogTitle>
       {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
    </DialogTitle>
    <DialogContent dividers>
        {children}
    </DialogContent>
</Dialog>
  );
}
 
 