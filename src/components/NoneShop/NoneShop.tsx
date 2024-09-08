import {Box, Typography} from '@mui/material'

function NoneShop({ children }: {children: string}) {
  return (
    <Box height={80} display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: '1rem', backgroundColor: '#E3D026', borderRadius: '10px', fontSize: '1.5rem'}}>
      <Typography variant="body1" component="p" >
        {children}
      </Typography>
    </Box>
  )
}

export default NoneShop;