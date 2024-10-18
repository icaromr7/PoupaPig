import React from "react";
import theme from "../../styles/theme";

type StyledIconProps = {
  IconComponent: React.ElementType;
};

const StyledIcon: React.FC<StyledIconProps> = ({ IconComponent }) => (
  <IconComponent
    style={{
      color: theme.colors.blue002,
      cursor: "pointer",
      transition: "border 0.3s ease",
    }}
    sx={{
      "&:hover": {
        border: `1px solid ${theme.colors.blue002}`,
        borderRadius: "4px",
      },
    }}
  />
);

export default StyledIcon;
