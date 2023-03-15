import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

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
      <ListItemButton
        sx={{
          borderRadius: `12px`,
          mb: 1,
          px: 1,
        }}
        selected={selected}
        onClick={() => {
          console.log("click");
        }}
      >
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
      </ListItemButton>
    </Link>
  );
};
