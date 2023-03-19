import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { blueGrey } from '@mui/material/colors';

const mainFont = blueGrey[900];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: '#F5EAEA'
      }}
    >
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center',  backgroundColor: '#F5EAEA' }} className>
        <Link href="https://github.com/DesislavaMetodieva" target="_blank" rel="noopener" sx={{ mx: 2 }}>
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/desim" target="_blank" rel="noopener" sx={{ mx: 2 }}>
          <LinkedInIcon />
        </Link>
        <Link href="mailto:metodieva.desislava@gmail.com" sx={{ mx: 2 }}>
          <EmailIcon />
        </Link>
        <Link href="https://drive.google.com/file/d/11c6IZI_HgaekE96Ny2KFGBuH_sC6xP8J/view?usp=sharing" target="_blank" rel="noopener" sx={{ mx: 2 }}>
          <DescriptionIcon />
        </Link>
      </Container>
      <Typography variant="body2" color={mainFont} sx={{ mt: 1, display: 'flex', justifyContent: 'center', fontFamily: "'Montserrat', sans-serif",  backgroundColor: '#F5EAEA'}}>
        {'© '}
        {new Date().getFullYear()}
        {' Your Website. All rights reserved.'}
      </Typography>
    </Box>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '33vh',
      }}
    >
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
       
      </Box>
      <Footer />
    </Box>
  );
}
