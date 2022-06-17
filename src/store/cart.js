const initialState = {
    cart: [],
    count: 0,
    show: false,
    display:[]

};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADDTOCART':
            let newList = [...state.cart, payload];
            return {
                cart: newList,
                display: uniqueArr(newList),
                count: state.count + 1,
                show: true,
            }

        case 'DELETE':
            const cartProducts = state.cart.filter((item) => item.name !== payload.name);
            return {
                cart: cartProducts,
                display: uniqueArr(cartProducts),
                count: state.count - payload.count - 1,
                show: true,
            }

        case 'SHOWCART':
            return {
                cart: state.cart,
                count: state.count,
                show: payload,
            };
        default:
            return state;
        }
    }


function uniqueArr(arr) {
    const map = new Map();
    for (const item of arr) {
      if (!map.has(item._id)) {
        map.set(item._id, {
          id: item._id,
          name: item.name,
          url: item.url,
          category: item.category,
          price: item.price,
          inStock: item.inStock,
          count: item.count,
        });
      } else {
        map.delete(item._id);
        map.set(item._id, {
          id: item._id,
          name: item.name,
          url: item.url,
          category: item.category,
          price: item.price,
          inStock: item.inStock,
          count: item.count,
        });
      }
    }
    return Array.from(map.values());
}
