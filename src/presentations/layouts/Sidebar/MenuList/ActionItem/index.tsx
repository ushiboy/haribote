import { ListItemIcon, ListItemText, Typography } from "@mui/material";

import * as S from "./style";

/**
 * サイドバーのアクションボタン
 */
export const ActionItem: React.FC<{
  icon: JSX.Element;
  title: string;
  onClick: () => void;
}> = ({ icon, title, onClick }) => {
  return (
    <S.ListItemButton onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={<Typography variant={"body1"}>{title}</Typography>}
      />
    </S.ListItemButton>
  );
};
