import FakeStoreAPI from "../../services/FakeStoreAPI";

export const fetchProducts = (category) => async dispatch => {
    const response = await FakeStoreAPI.get(`/products/category/${category}`);
    dispatch({type: "SET_PRODUCTS", payload: response.data})
}