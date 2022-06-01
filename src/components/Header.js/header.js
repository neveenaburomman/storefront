import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {connect} from 'react-redux';



const Header = (props) => {

  
  return (
    <>
    <AppBar  style={{backgroundColor :"grey"}}>
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
          
          <Button style={{color:"white" ,fontSize:"20px",paddingLeft:"800px"}}>CART({props.cart.cart.length})</Button >
         

          </Toolbar>
      </Container>
        
    </AppBar>
    </>
  );
}
const mapStateToProps = (state) =>{
  return {cart : state.Cart}
} 

export default connect(mapStateToProps)(Header);
