import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Cart from "../Cart/cart"

const Header = () => {

  return (
    <>
      <AppBar style={{ backgroundColor: "grey" }}>
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: 'Cursive',
                fontWeight: 900,
                letterSpacing: '.2rem',
                color: '#ffb6c1',
                textDecoration: 'none',
              }}
            >
              NEVEEN'S STORE
            </Typography>
            <Cart/>
            </Toolbar>
        </Container>
      </AppBar>

          
    </>
  );
}

export default Header;

