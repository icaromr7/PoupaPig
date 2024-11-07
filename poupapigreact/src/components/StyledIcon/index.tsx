import React from "react";
import theme from "../../styles/theme";

type StyledIconProps = {
  IconComponent: React.ElementType;
  onClick?: () => void;
  isSelected?: boolean;
};

const StyledIcon: React.FC<StyledIconProps> = ({
  IconComponent,
  onClick,
  isSelected,
}) => (
  <IconComponent
    style={{
      color: theme.colors.blue002,
      cursor: "pointer",
      transition: "border 0.3s ease",
      border: isSelected ? `2px solid ${theme.colors.blue002}` : "none",
      borderRadius: "4px",
    }}
    sx={{
      "&:hover": {
        border: `1px solid ${theme.colors.blue002}`,
        borderRadius: "4px",
      },
    }}
    onClick={onClick}
  />
);

export default StyledIcon;
