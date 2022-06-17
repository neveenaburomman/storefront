import superagent from 'superagent';


export const getRemoteData = function (api) {
  
  return (dispatch) => {
    return superagent
      .get(api)
      .then((res) => {
        dispatch(getProducts({ results: res.body.products }));
      })
      .catch((e) => console.error(e.message));
  };
};


export const getProducts = (products) => {
  console.log('product action', products);
  return {
    type: 'GET',
    payload: products.results,
  };
};

export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export const addtoCart = (product) => {
  return {
    type: 'ADDTOCART',
    payload: product,
  };
};

export const show = (bool) => {
  return {
    type: 'SHOW_CART',
    payload: bool,
  };
};

export const DELETE = (product) => {
  return {
    type: 'DELETE',
    payload: product,
  };
};