import { ListItemIcon, ListItemText, Typography } from "@mui/material";

import * as S from "./style";

import { Link } from "@/presentations/sharedComponents/utilities";

/**
 * サイドバーのボタン
 */
export const NavItem: React.FC<{
  linkTo: string;
  selected: boolean;
  icon: JSX.Element;
  title: string;
}> = ({ linkTo, selected, icon, title }) => {
  return (
    <Link to={linkTo}>
      <S.ListItemButton selected={selected}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant={"body1"}
              color={selected ? "primary" : "inherit"}
            >
              {title}
            </Typography>
          }
        />
      </S.ListItemButton>
    </Link>
  );
};
