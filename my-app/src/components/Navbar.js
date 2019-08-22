import React  from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

  const Navbar = () => {
  return(
    <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
    </div>
  )
}

  export default Navbar;