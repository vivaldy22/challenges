import { combineReducers } from "redux";
import goods from "./goods/goodsReducer";
import types from "./types/typeReducer";
import warehouses from "./warehouse/warehouseReducer";

export const rootReducer = combineReducers({
  goodsReduc: goods,
  typesReduc: types,
  warehouseReduc: warehouses,
});
