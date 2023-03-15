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
 * 私書箱のセレクター
 */
export const SelectSection: React.FC = () => {
  const poBoxes = ["PoBox1", "PoBox2", "PoBox3"];
  const [poBox, setPoBox] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPoBox(event.target.value);
  };
  return (
    <S.SelectBox size="small">
      <InputLabel>PoBox</InputLabel>
      <Select
        value={poBox}
        onChange={handleChange}
        label="PoBox"
        startAdornment={
          <InputAdornment position="start">
            <InboxIcon />
          </InputAdornment>
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {poBoxes.map((v) => (
          <MenuItem value={v}>{v}</MenuItem>
        ))}
      </Select>
    </S.SelectBox>
  );
};
