import React from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './products.css'
import { addtoCart, getRemoteData } from '../../store/actions';
import Modal from '@mui/material/Modal';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { productDetailPage } from '../../store/products';
import productDetail from '../ProductDetails';

const api = 'https://run.mocky.io/v3/2c116130-6f4a-4924-87aa-0b3837a13e55';



function Products(props) {

    const [open, setOpen] = React.useState(false);
    const [detail, setDetail] = React.useState({});
    const handleOpen = (b) => {
        setDetail(b)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }



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
                                    <Button onClick={() => props.addtoCart((product))} variant="light" disabled={product.inStock > 0 ? false : true}>ADD TO CART</Button>
                                    <Button onClick={() => handleOpen(product)} size="small" color="primary">
                                        VIEW DETAILS  </Button>
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

                                    <Button onClick={() => props.addtoCart((product))} variant="light" disabled={product.inStock > 0 ? false : true}>ADD TO CART</Button>
                                    <Button onClick={() => handleOpen(product)} size="small" color="primary">
                                        VIEW DETAILS
                                    </Button>
                                </section>
                            </Card>
                        )
                    })
                }
            </ul>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"

            >
                <div style={{
                    display: 'flex',
                    backgroundColor: "white",
                    flexDirection: 'column',
                    width:"592px", 
                    height:"512px",
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    objectFit: 'cover',
                    margin: "center",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft:"-296px",
                    marginTop:"-256px",
                    
                  }}  >
                <CardMedia
                    image={detail.url}
                    title="Image title"
                    style={{ paddingTop: '200px', width: "100px" }}

                />
                <h2 id="transition-modal-title">{detail.category}</h2>
                <p id="transition-modal-description">name:  {detail.name} </p>
                <p id="transition-modal-description">inStock:  {detail.inStock} </p>
                <p id="transition-modal-description">Price: {detail.price}$ and there are {detail.inStock} items in the store</p>

            </div>
        </Modal>
        </section >
    );
};


const mapStateToProps = (state) => {
    return { products: state.Products }
}

const mapDispatchToProps = { addtoCart, getRemoteData, productDetailPage }
export default connect(mapStateToProps, mapDispatchToProps)(Products);