import React from "react";
import Select from "react-select";
import StateManagedSelect from "react-select";

export const ReactSelect: StateManagedSelect = ({ ...props }) => {
  return <Select {...props} />;
};
