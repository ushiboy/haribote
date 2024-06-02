import { ListItemIcon, ListItemText, Typography } from "@mui/material";

import * as S from "./style";

/**
 * サイドバーのアクションボタン
 */
export const ActionItem: React.FC<{
  icon: JSX.Element;
  title: string;
  onClick: () => void;
  dataTestId?: string;
}> = ({ icon, title, dataTestId, onClick }) => {
  return (
    <S.ListItemButton
      data-testid={dataTestId || "actionItem"}
      onClick={onClick}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={<Typography variant={"body1"}>{title}</Typography>}
      />
    </S.ListItemButton>
  );
};
