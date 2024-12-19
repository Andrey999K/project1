import { Input } from "antd";
import { useEffect, useState } from "react";

export const InputNumber = ({ defaultValue, onChange, placeholder }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d+$/.test(newValue)) {
      setValue(String(Number(newValue)));
    } else if (newValue === "") {
      setValue("0");
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
