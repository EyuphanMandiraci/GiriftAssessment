import FakeStoreAPI from "../../services/FakeStoreAPI";

export const fetchSingleProduct = (id) => async dispatch => {
    const response = await FakeStoreAPI.get(`/products/${id}`);
    dispatch({type: "SET_PRODUCT", payload: response.data})
}