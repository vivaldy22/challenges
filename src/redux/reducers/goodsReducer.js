const initialState = {
  goods: [],
  types: [],
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: action.goods,
      };
    case "SET_TYPES":
      return {
        ...state,
        types: action.types,
      };
    default:
      return state;
  }
};

export default goods;
