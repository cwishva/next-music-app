import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import { AppBar, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DesktopNavbar() {

  return (
    <AppBar color="transparent" position="absolute" elevation={0}>
      <Container
        maxWidth={'lg'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}
      >
        <Link to="/">
          <Logo width="200" height="100" />
        </Link>
      </Container>
    </AppBar>
  );
}
