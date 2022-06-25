import DesktopFooter from '@components/layouts/DesktopFooter';
import DesktopNavbar from '@components/layouts/DesktopNavbar';
import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
  pageTitle: string;
  children: ReactNode;
  maxWidth: 'sm' | 'md' | 'lg';
}

export default function PageLayout({ pageTitle, children, maxWidth }: IProps) {

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="Next"
          content="Music app for quering the information"
        />
      </Helmet>

      <DesktopNavbar />
      <Box
        sx={{
          position: 'relative',
          top: '3rem',
          height: 'calc(100vh - 6rem)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Container maxWidth={maxWidth} sx={{ flex: 1 }}>
          <main>{children}</main>
        </Container>
        <DesktopFooter />
      </Box>
    </>
  );
}
