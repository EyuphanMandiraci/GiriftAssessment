import FakeStoreAPI from "../../services/FakeStoreAPI";

export const fetchCategories = () => async dispatch => {
    const response = await FakeStoreAPI.get("/products/categories");
    dispatch({type: "SET_CATEGORIES", payload: response.data})
}