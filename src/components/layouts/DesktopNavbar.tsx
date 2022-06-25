import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import { AppBar, Container } from '@mui/material';
import { ROUTES } from '@utils/constants';
import { Link } from 'react-router-dom';

export default function DesktopNavbar() {

  return (
    <AppBar color="transparent" position="absolute" elevation={0}>
      <Container
        maxWidth={'lg'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: '3rem'
        }}
      >
        <Link to={ROUTES.HOME}>
          <Logo width="200" height="100" />
        </Link>
      </Container>
    </AppBar>
  );
}
