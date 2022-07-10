export default (state = [], action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return action.payload;
        case "DELETE_PRODUCT":
            return {};
        default:
            return state;
    }
}