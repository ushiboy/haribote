import InboxIcon from "@mui/icons-material/Inbox";
import {
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

import * as S from "./style";

/**
 * カテゴリのセレクター
 */
export const SelectSection: React.FC = () => {
  const categories = ["Category1", "Category2", "Category3"];
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  return (
    <S.SelectBox size="small">
      <InputLabel>Category</InputLabel>
      <Select
        value={category}
        onChange={handleChange}
        label="Category"
        startAdornment={
          <InputAdornment position="start">
            <InboxIcon />
          </InputAdornment>
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {categories.map((v) => (
          <MenuItem key={v} value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </S.SelectBox>
  );
};
