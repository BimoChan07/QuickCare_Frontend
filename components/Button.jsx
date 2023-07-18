import React from "react";

function Button(type, variant, className, id, onclick, children) {
  return (
    <button
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onclick}
    ></button>
  );
}
export default Button;
