import * as actionTypes from '../actions/actions';

const initalState = {
    products: []
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SETPRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}
export default reducer;