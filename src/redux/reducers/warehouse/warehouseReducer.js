const initialState = {
  warehouses: [],
};

const warehouses = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WAREHOUSES":
      return {
        ...state,
        warehouses: action.warehouses,
      };
    default:
      return state;
  }
};

export default warehouses;
