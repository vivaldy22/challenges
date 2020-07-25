const initialState = {
  goods: [],
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: action.goods,
      };
    default:
      return state;
  }
};

export default goods;
