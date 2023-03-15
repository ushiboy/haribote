import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton } from "@mui/material";

import * as S from "./style";

/**
 * 通知
 */
export const NotificationSection: React.FC = () => {
  return (
    <S.Root>
      <IconButton aria-label="notification">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </S.Root>
  );
};
