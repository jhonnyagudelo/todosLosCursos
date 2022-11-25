import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { React} from 'react' 

const NoteView = () => {
  return (
    <>
      <Grid 
        container
        direction='row'
        justifyContent='space-between'
        sx={{ mb:1}}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight='light'>28 de agosto, 2023</Typography>
        </Grid>
        <Grid>
          <Button>
            <SaveOutlined sx={{ fontSize:30, mr:1}} />
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type="text"
            variant='filled'
            fullWidth
            placeholder="ingrese titulo"
            label="Titulo"
            sx={{ boder:'none', mb:1 }}
          />
        </Grid>
        <Grid container>
          <TextField
            type="text"
            variant='filled'
            fullWidth
            multiline
            placeholder="Que sucedio hoy"
            minRows={5}
            sx={{ boder:'none', mb:1 }}
          />
        </Grid>
    {/* Galeria de imagenes */}
      </Grid>
    </>
  )
}

export  {NoteView}
