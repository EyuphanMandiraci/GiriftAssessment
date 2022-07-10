export default (state = [], action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return action.payload;
        case "DELETE_ALL_PRODUCTS":
            return [];
        default:
            return state;
    }
}