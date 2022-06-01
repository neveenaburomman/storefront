const initialState = {
    products : [
        { name: 'cute blue bag ',
         category: 'ACCESSORIES',
          price: 30,
           inStock: 50 ,
           img:'https://image.shutterstock.com/image-photo/cute-blue-ladies-bag-stylish-600w-1032450790.jpg',
        },
        { 
        name: 'gold-earrings',
        category: 'ACCESSORIES',
         price: 10, 
         inStock: 10 ,
         img:'https://image.shutterstock.com/image-photo/gold-earrings-close-on-white-600w-1927593323.jpg',
        },
        { name: 'glasses',
         category: 'ACCESSORIES',
          price: 20,
           inStock: 20 ,
           img: 'https://image.shutterstock.com/image-photo/two-different-eye-glasses-on-600w-2055302285.jpg',
         },

         { name: 'dress',
         category: 'CLOTHING',
         price: 20, 
         inStock: 20 ,
         img:'https://image.shutterstock.com/image-photo/collection-womens-summer-clothes-yellow-600w-403841710.jpg',
         },

        { name: 'jeans',
         category: 'CLOTHING',
          price: 20,
          inStock: 20 ,
          img:'https://image.shutterstock.com/image-photo/blue-jeans-600w-480429019.jpg' 
        },
        
        
        { name: 'skirt',
         category: 'CLOTHING',
          price: 20,
           inStock: 20 ,
           img: 'https://image.shutterstock.com/image-photo/long-beige-skirt-600w-331643456.jpg'
        }
    ],
}
export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ACTIVE' :
            const products = initialState.products.filter(product=> product.category === payload) ;
            return {products :products }
        case 'ADDTOCART' :
                const updatedProducts = state.products.map(product=> product === payload && product.inStock>0 ? {...product,inStock : product.inStock - 1 } :{... product,inStock:0}) ;
                return {products :  updatedProducts};
        case 'DELETE' :
                const deletedProducts = state.products.map(product=> product === payload&& product.inStock>0 ? {...product,inStock : product.inStock + 1} : product) ;
                return {products :  deletedProducts};
        default :
        return state;
    }
}
export const active = (categoryName) => {
    return {
        type : 'ACTIVE',
        payload : categoryName,
    }
}

export const addtoCart = (product) => {
    return {
        type : 'ADDTOCART',
        payload : product,
    }
}
export const deleteFromCart = (product) => {
    return {
        type : 'DELETE',
        payload : product,
    }
}

