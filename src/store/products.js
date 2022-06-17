const initialState = {
    products: [],
    display: []
};
/*
        {
            id: 500,
            name: 'cute blue bag ',
            category: 'ACCESSORIES',
            price: 30,
            inStock: 50,
            img: 'https://image.shutterstock.com/image-photo/cute-blue-ladies-bag-stylish-600w-1032450790.jpg',
            count: 0,
        },
        {
            id: 501,
            name: 'gold-earrings',
            category: 'ACCESSORIES',
            price: 10,
            inStock: 10,
            img: 'https://image.shutterstock.com/image-photo/gold-earrings-close-on-white-600w-1927593323.jpg',
            count: 0,
        },
        {
            id: 505,
            name: 'glasses',
            category: 'ACCESSORIES',
            price: 20,
            inStock: 20,
            img: 'https://image.shutterstock.com/image-photo/two-different-eye-glasses-on-600w-2055302285.jpg',
            count: 0,
        },

        {
            id: 509,
            name: 'dress',
            category: 'CLOTHING',
            price: 20,
            inStock: 20,
            img: 'https://image.shutterstock.com/image-photo/collection-womens-summer-clothes-yellow-600w-403841710.jpg',
            count: 0,
        },

        {
            id: 512,
            name: 'jeans',
            category: 'CLOTHING',
            price: 20,
            inStock: 20,
            img: 'https://image.shutterstock.com/image-photo/blue-jeans-600w-480429019.jpg',
            count: 0,

        },


        {
            id: 513,
            name: 'skirt',
            category: 'CLOTHING',
            price: 20,
            inStock: 20,
            img: 'https://image.shutterstock.com/image-photo/long-beige-skirt-600w-331643456.jpg',
            count: 0,

        }
    ],
}*/

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET':
            return { products: payload, display: state.display };
        case 'ACTIVE':
            let products = state.products.filter((product) =>
                product.category === payload ? product.category : null
            );
            return { products: state.products, display: products };

        case 'ADDTOCART':
            let productList = state.products.map((product) =>
                payload.name === product.name
                    ? {
                        _id: product._id,
                        name: product.name,
                        url: product.url,
                        category: product.category,
                        price: product.price,
                        inStock: product.inStock - 1,
                        count: product.count + 1,
                    }
                    : product
            );
            let displayList = state.display.map((product) =>
                payload.name === product.name
                    ? {
                        _id: product._id,
                        name: product.name,
                        url: product.url,
                        category: product.category,
                        price: product.price,
                        inStock: product.inStock - 1,
                        count: product.count + 1,
                    }
                    : product
            );

            return { products: productList, display: displayList };

        case 'DELETE':
            let newProducts = state.products.map((product) =>
                payload.name === product.name
                    ? {
                        _id: product._id,
                        name: product.name,
                        url: product.url,
                        category: product.category,
                        price: product.price,
                        inStock: product.inStock + payload.count + 1,
                        count: product.count - payload.count - 1,
                    }
                    : product
            );
            let newDisplayProducts = state.display.map((product) =>
                payload.name === product.name
                    ? {
                        _id: product._id,
                        name: product.name,
                        url: product.url,
                        category: product.category,
                        price: product.price,
                        inStock: product.inStock + payload.count + 1,
                        count: product.count - payload.count - 1,
                    }
                    : product
            );
            return { products: newProducts, display: newDisplayProducts };
            case 'SET_ACTIVE_ITEM':
        let product = state.products.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock ,
              count: product.count ,
            }
          : product
      );
      let DisplayProduct = state.display.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock ,
              count: product.count ,
            }
          : product
          );
        return {products:product,display:DisplayProduct };
    default:
      return state;
  }
};
export const productDetailPage = data => {
  return {
    type:'SET_ACTIVE_ITEM',
    payload: data
  }
}
        

