import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SelectBox = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 180,
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
