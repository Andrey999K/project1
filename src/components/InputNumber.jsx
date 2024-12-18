import { Input } from "antd";
import { useState } from "react";

export const InputNumber = ({ defaultValue, onChange, placeholder }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    } else {
      setValue(newValue.replace(/[^0-9]/g, ""));
    }
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder || ""}
    />
  );
};
