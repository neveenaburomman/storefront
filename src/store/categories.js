const initialState = {
    categories : [
        { name: 'electronics',
         displayName: 'Electronics'
         },

        { name: 'food',
         displayName: 'Food'
         },
    ],
    activeCategories : {},
}


const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        let activeCategories = initialState.categories.find((category)=>category.name === payload);
        return { categories: initialState.categories, activeCategories};
      default:
        return state;
    }
  };
  
  export default categories;