import React from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import  Button  from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './products.css'
import {addtoCart,getRemoteData} from '../../store/actions';

import { useEffect } from 'react';

const api = 'https://run.mocky.io/v3/2c116130-6f4a-4924-87aa-0b3837a13e55';


function Products(props) {

    useEffect(() => {
        props.getRemoteData(api);
      }, []);
      
    return (
        <section>
            <ul className='products'>
            {props.products.display.length > 0
                     ? props.products.display.map((product) => {
                        return (
                            <Card style={{ width: '18rem' }} className={`cards ${product.name}`} key={product.name}>
                                <CardMedia
                                    className={"img"}
                                    image={product.url}
                                />
                                <CardContent>
                                {product.name}
                                </CardContent>
                                <CardContent>
                                Price : {product.price}$
                                 </CardContent>
                                 <CardContent>
                             {product.inStock > 0 ? `In Stock : ${product.inStock} items left` : 'Out of Stock'}
                                </CardContent>
                                <section className="btnn">
                                    <Button onClick={()=> props.addtoCart((product))} variant="light"  disabled={product.inStock > 0 ? false : true }>ADD TO CART</Button>
                                    <Button variant="light">VIEW DETAILS</Button>
                                </section>
                            </Card>
                        )
                    })
                    : props.products.products.map((product) => {
                        return (
                            <Card style={{ width: '18rem' }} className={`cards ${product.name}`} key={product.name}>
                                <CardMedia
                                    className={"img"}
                                    image={product.url}
                                />
                                <CardContent>
                                {product.name}
                                </CardContent>
                                <CardContent>
                                Price : {product.price}$
                                 </CardContent>
                                 <CardContent>
                             {product.inStock > 0 ? `In Stock : ${product.inStock} items left` : 'Out of Stock'}
                                </CardContent>
                                <section className="btnn">
                                    <Button onClick={()=> props.addtoCart((product))} variant="light"  disabled={product.inStock > 0 ? false : true }>ADD TO CART</Button>
                                    <Button variant="light">VIEW DETAILS</Button>
                                </section>
                            </Card>
                        )
                    })
                }
            </ul>
        </section>
    )
}
const mapStateToProps = (state) => {
    return { products: state.Products }
}

const mapDispatchToProps = { addtoCart,getRemoteData  } 
export default connect(mapStateToProps , mapDispatchToProps)(Products);