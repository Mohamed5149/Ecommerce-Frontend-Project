import Axios from 'axios';
const baseURL = process.env.REACT_APP_URL || 'http://localhost:3000'

export const SETPRODUCTS = 'SETPRODUCTS';
export const SETPRODUCTSPERUSER = 'SETPRODUCTSPERUSER';

export const addUser = (value) => {
    return Axios.post(`${baseURL}/users/`, value);
}

export const login = (value) => {
    return Axios.post(`${baseURL}/users/login`, value);
}

export const getAllProduct = () => {
    return dispatch => {
        return Axios.get(`${baseURL}/products`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            dispatch({
                type: SETPRODUCTS,
                products: res.data
            });
        })
    }
}

export const getProductsPerUser = () => {
    return dispatch => {
        return Axios.get(`${baseURL}/products/${localStorage.getItem('userid')}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
                dispatch({
                    type: SETPRODUCTSPERUSER,
                    products: res.data
                })
            });
    }
}

export const saveProduct = async (value) => {
    if (value.updateFlag === false) {
        Axios.post(`${baseURL}/products`, value, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }
    else {
        Axios.patch(`${baseURL}/products/${value.product_id}`, value, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
    }
}
export const deleteProduct = (id) => {
    return dispatch => {
        Axios.delete(`${baseURL}/products/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then(res => {
            dispatch(getProductsPerUser())
        })
    }
}