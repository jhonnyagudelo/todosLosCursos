import { Box } from '@mui/system'
import { React } from 'react'

const JournalLayout = ({ children }) => {
  return (
    <>
      <Box
        sx={{ display: 'flex' }}
      >
        {/* NavBar */}
        {/* Sidebar */}
        <Box component='main'
          sx={{ flexGrow: 1, p: 3 }}
        >
          {/* toolbar */}
          {children}

        </Box>
      </Box>
    </>
  )
}

export { JournalLayout }
