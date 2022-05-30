const initialState = {
    products : [
        { name: 'cute blue bag ',
         category: 'ACCESSORIES',
          price: 30,
           inStock: 50 ,
           img:'https://image.shutterstock.com/image-photo/cute-blue-ladies-bag-stylish-600w-1032450790.jpg'
        },
        { 
        name: 'gold-earrings',
        category: 'ACCESSORIES',
         price: 10, 
         inStock: 10 ,
         img:'https://image.shutterstock.com/image-photo/gold-earrings-close-on-white-600w-1927593323.jpg'
        },
        { name: 'glasses',
         category: 'ACCESSORIES',
          price: 20,
           inStock: 20 ,
           img: 'https://image.shutterstock.com/image-photo/two-different-eye-glasses-on-600w-2055302285.jpg'
         },

         { name: 'dress',
         category: 'CLOTHING',
         price: 20, 
         inStock: 20 ,
         img:'https://image.shutterstock.com/image-photo/collection-womens-summer-clothes-yellow-600w-403841710.jpg'
         },

        { name: 'jeans',
         category: 'CLOTHING',
          price: 20,
          inStock: 20 ,
          img:'https://image.shutterstock.com/image-photo/blue-jeans-600w-480429019.jpg' 
        },
        
        
        { name: 'skirt',
         category: 'CLOTHING',
          price: .20,
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
            return {products}
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
