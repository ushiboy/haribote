import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import { List } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

import { NavItem } from "./NavItem";

/**
 * サイドバーのリスト
 */
const MenuList = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <List sx={{ px: "16px" }}>
      <>
        <NavItem
          linkTo="articles"
          selected={pathname === "/articles"}
          icon={
            <DescriptionIcon
              color={pathname === "/articles" ? "primary" : "inherit"}
            />
          }
          title={t("Article")}
        />
        <NavItem
          linkTo="about"
          selected={pathname === "/about"}
          icon={
            <InfoIcon color={pathname === "/about" ? "primary" : "inherit"} />
          }
          title={t("About")}
        />
      </>
    </List>
  );
};

export default MenuList;
