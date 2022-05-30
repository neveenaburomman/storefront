import React from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import  Button  from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


function Products(props) {
    return (
        <section>
            <ul className='products'>
                {
                    props.products.products.map(product => {
                        return (
                            <Card style={{ width: '18rem' }} className={`cards ${product.name}`} key={product.name}>
                                <CardMedia
                                    className={"img"}
                                    image={product.img}
                                />
                                <CardContent>
                                {product.name}
                                </CardContent>
                                <CardContent>
                                Price : {product.price}$
                                 </CardContent>
                                 <CardContent>
                                in Stock : {product.inStock}
                                </CardContent>
                                <section className="btnn">
                                    <Button variant="light">ADD TO CART</Button>
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
export default connect(mapStateToProps)(Products);