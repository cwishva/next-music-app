import { Box, Typography } from '@mui/material';

export default function Search() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      <Box sx={{ maxWidth: '25rem' }}>
        <Typography typography="h3" mb="1rem">
          Welcome to Next
        </Typography>
        <Typography typography="body1" mb="4rem">
         Search Your Information
        </Typography>
      </Box>
    </Box>
  );
}
