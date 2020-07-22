import React from "react";
import Swal from "sweetalert2";

const mySwal = (props) => {
  const {
    title,
    text,
    icon,
    confirmColor,
    confirmText,
    allowOutsideClick,
    doNext,
  } = props;

  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: confirmColor || "#3085d6",
    confirmButtonText: confirmText || "OK",
    allowOutsideClick: allowOutsideClick || false,
  }).then((result) => {
    if (result.value) {
      doNext();
    }
  });
};

export default mySwal;