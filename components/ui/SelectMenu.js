import React from 'react';
import { Select, MenuItem } from '@mui/material';

const SelectMenu = ({ value, onChange, items }) => {
  return (
    <Select value={value} onChange={onChange}>
      {items.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectMenu;
