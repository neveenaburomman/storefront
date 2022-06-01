import React from 'react';

import {connect} from 'react-redux';
import {deleteFromCart} from '../../store/cart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';



function Cart (props){

    return (
        <section style={{ marginLeft: "1050px",padding:"10px",color:"white",backgroundColor:"grey",width:"300px",alignText:"center"}}>
            <List >
            <h4 style={{color:"pink"}}>Shopping Bag</h4>

                {
                    props.cart.cart.map(product=>{
                        console.log(product)
                        return(
                            <ListItem>
                                <ListItemText>{product.name}</ListItemText>
                                <ListItemText>{product.price}JD</ListItemText>
                                <DeleteIcon onClick={()=> props.deleteFromCart(product)}>X</DeleteIcon>
                            </ListItem>
                        )
                    })
                }
            </List >
        </section>
    )
}

const mapStateToProps = (state) =>{
  return {cart : state.Cart}
} 
const mapDispatchToProps = { deleteFromCart } 

export default connect(mapStateToProps , mapDispatchToProps  )(Cart);