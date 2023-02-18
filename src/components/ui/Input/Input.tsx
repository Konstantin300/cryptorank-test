import React, { Dispatch, FC, SetStateAction } from "react";
import { StyledInput } from "./styled";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  placeholder: string;
};

const Input: FC<Props> = ({ onChange, value, placeholder }) => {
  return (
    <StyledInput
      min={0}
      type={"number"}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
