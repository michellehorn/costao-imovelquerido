import React from "react";
import { SelectInput, OptionsInput } from "./styles";

const Select = ({ items, onChange }) => {
  if (!items) return null;

  return (
    <SelectInput onChange={(e) => onChange(e)}>
      {items.map((item, ind) => (
        <OptionsInput value={item.descricao} key={`option-${ind}-${item}`}>
          {item.descricao}
        </OptionsInput>
      ))}
      <OptionsInput value="0">Todos</OptionsInput>
    </SelectInput>
  );
};

export default Select;
