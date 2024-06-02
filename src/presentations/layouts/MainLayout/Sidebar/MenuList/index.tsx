import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

import { useMainLayoutContext } from "../../context";

import { ActionItem } from "./ActionItem";
import { NavItem } from "./NavItem";
import * as S from "./style";

/**
 * サイドバーのリスト
 */
const MenuList = () => {
  const { logout } = useMainLayoutContext();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <S.List>
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
      <ActionItem icon={<LogoutIcon />} title={t("SignOut")} onClick={logout} />
    </S.List>
  );
};

export default MenuList;
