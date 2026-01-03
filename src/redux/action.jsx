import axios from 'axios';

export const registerUser = (userData) => ({
    type: 'REGISTER_USER',
    payload: userData
});

export const loginUser = (credentials) => ({
    type: 'LOGIN_USER',
    payload: credentials
});

export const logoutUser = () => ({type: "LOGOUT_USER"});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({type: 'FETCH_PRODUCTS_START'});
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error.message });
        }
    }
}


export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
});

export const filterByCategory = (category) => ({
    type: 'FILTER_BY_CATEGORY',
    payload: category
});

export const filterByPrice = (price) => ({
    type: 'FILTER_BY_PRICE',
    payload: price
});


export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});