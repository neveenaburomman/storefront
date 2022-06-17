import React from 'react';

import { connect } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { addtoCart, show, DELETE } from '../../store/actions';
import { Grid, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart(props) {

  let display = props.cart.display || [];
  return (
    <>

      <Button color="inherit" onClick={() => props.show(!props.cart.show)}>
        <Box
          position="absolute"
          width={130}
          height={50}
          left={1000}
          borderRadius={7}
          bgcolor="lightpink"
          alignItems="center"
          justifyContent="center"

        >
          <Typography variant="h7" gutterBottom mx={3} alignItems="center">
            cart ({props.cart.count})
          </Typography>
        </Box>
      </Button>
      <Drawer
        anchor="right"
        open={props.cart.show}
        variant="permanent"
        sx={{
          width: 140,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
          },
        }}
        onClose={() => props.show(false)}>
        
          <Typography variant="h5">Cart</Typography>

        {display.map((product) => {
          return (
            <ListItem key={product._id}>
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="wrap"
                spacing={2}
              >
                <Typography variant="h6"></Typography>
                <strong>{product.name}</strong> ({product.count + 1})
                <Typography variant="body1">
                  ${(product.count + 1) * product.price}
                  <DeleteIcon
                    color="secondary"
                    onClick={() => props.DELETE(product)}
                    style={{
                      cursor: 'pointer',
                      paddingTop: '5px',
                    }}
                  />
                </Typography>
              </Grid>
            </ListItem>
          );
        })}
      </Drawer>
    </>
  );
};



const mapStateToProps = (state) => {
  return { cart: state.Cart }
}
const mapDispatchToProps = { addtoCart, show, DELETE };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);