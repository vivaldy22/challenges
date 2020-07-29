const initialState = {
  goods: [],
  total: 0,
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: action.goods,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.total,
      };
    default:
      return state;
  }
};

export default goods;
