const initialState = {
  types: [],
};

const types = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TYPES":
      return {
        ...state,
        types: action.types,
      };
    default:
      return state;
  }
};

export default types;
