import { React } from 'react'
import { ImageGalery } from '../../ua/components';
import {JournalLayout} from '../layout/JournalLayout'
import { NothingSelectedView, NoteView } from '../view';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
const JournalPage = ({ }) => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView/>
        {/* <NoteView/> */}
        {/* <ImageGalery/> */}
    <IconButton
      size='large'
    sx={{
      color:'white',
        backgroundColor:'error.main',
        ':hover':{ backgroundColor: 'error.main', opacity:0.9},
        position:'fixed',
        right:100,
        bottom:50,
    }}
    >
    <AddOutlined sx={{ fontSize:30}}/>
    </IconButton>
      </JournalLayout>
    </>
  )
}

export { JournalPage }
