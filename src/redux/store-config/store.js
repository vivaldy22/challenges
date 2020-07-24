import { createStore } from "redux";
import goods from "../reducers/goodsReducer";

const store = createStore(goods);

export { store };
