// import axios from 'axios';
// import {
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_FAIL,
//     PRODUCT_LIST_SUCCESS,
//     PRODUCT_DETAILS_FAIL,
//     PRODUCT_DETAILS_SUCCESS,
//     PRODUCT_DETAILS_REQUEST
// } from "../Constants/ProductConstants.js";

// export const listProduct = (keyword=" ") => async(dispatch) => {
//     try {
//         dispatch({type:PRODUCT_LIST_REQUEST})

//         const { data } = await axios.get(`http://localhost:5000/api/products?keyword=${keyword}`);
//         dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_LIST_FAIL,
//             payload:
//             error.response && error.response.data.message ? error.response.data.message : error.message,
//         });
//     }
// };

// // single product
// export const listProductDetails = (id) => async (dispatch) => {
//     try {
//         dispatch({
//             type: PRODUCT_DETAILS_REQUEST
//         })

//         const {
//             data
//         } = await axios.get(`http://localhost:5000/api/products/${id}`);
//         dispatch({
//             type: PRODUCT_DETAILS_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_DETAILS_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//         });
//     }
// };
