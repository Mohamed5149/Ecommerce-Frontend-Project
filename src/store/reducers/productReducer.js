import * as actionTypes from '../actions/actions';

const initalState = {
    products: [],
    userproducts:[]
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SETPRODUCTS:
            return {
                ...state,
                products: action.products
            }

            case actionTypes.SETPRODUCTSPERUSER:
            return {
                ...state,
                userproducts:action.products
            }
        default:
            return state;
    }
}
export default reducer;