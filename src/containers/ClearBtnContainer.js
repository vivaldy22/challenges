import React from "react";
import withLocalStorage from "./withLocalStorage";
import { FAVFOODKEY, USERNAMEKEY } from "../global-utils/GlobalConsts";

const ClearBtnContainer = (props) => {
  return (
    <>
      {props.remove(USERNAMEKEY)}
      {props.remove(FAVFOODKEY)}
    </>
  );
};

export default withLocalStorage(ClearBtnContainer, USERNAMEKEY, FAVFOODKEY);
