const initialState = {
    categories : [
        { name: 'CLOTHING',
         displayName: 'CLOTHING'
         },

        { name: 'ACCESSORIES',
         displayName: 'ACCESSORIES'
         },
    ],
    activeCategory : '',
}


export default (state = initialState ,action) =>{
    const { type , payload } = action;

    switch(type){
        case 'ACTIVE' :
            const categories = state.categories;
            const activeCategory = payload;
            return {categories , activeCategory}
        default :
        return state;
    }
}

export const active = (category) =>{
    return {
        type : 'ACTIVE',
        payload : category
    }
}