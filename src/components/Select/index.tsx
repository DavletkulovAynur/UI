import React from "react";
import ReactSelect from "react-select";
import StateManagedSelect from "react-select";

export const Select: StateManagedSelect = ({ ...props }) => {
  return <ReactSelect {...props} />;
};
