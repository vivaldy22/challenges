import React from "react";
import withLocalStorage from "./withLocalStorage";
import { FAVFOODKEY, USERNAMEKEY } from "../global-utils/GlobalConsts";

const SubmitBtnContainer = (props) => {
  console.log("PROPS UNAME", props.username);
  console.log("PROPS FAV", props.favFood);
  return (
    <>
      {props.set(USERNAMEKEY, props.username)}
      {props.set(FAVFOODKEY, props.favFood)}
    </>
  );
};

export default withLocalStorage(SubmitBtnContainer, USERNAMEKEY, FAVFOODKEY);
