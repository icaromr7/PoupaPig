//React
import React, { useState } from "react";

//Style, assets e icons
import { Container, Title, Icon } from "./style";
import theme from "../../styles/theme";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface ButtonHeaderProps {
  title?: string;
  icon?: any;
  type?: "config" | "notif";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ButtonHeader({
  title,
  type,
  icon,
  onClick,
}: ButtonHeaderProps) {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };

  return (
    <Container onClick={handleClick}>
      {title && <Title>{title}</Title>}
      {icon && <Icon>{icon}</Icon>}
      {type &&
        (type === "config" ? (
          <SettingsIcon
            style={{ color: theme.colors.whiteF2F, width: 20, height: 20 }}
          />
        ) : (
          <NotificationsIcon
            style={{ color: theme.colors.whiteF2F, width: 20, height: 20 }}
          />
        ))}
    </Container>
  );
}
