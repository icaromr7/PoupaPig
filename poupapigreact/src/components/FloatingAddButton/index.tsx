import React, { useState } from "react";

//style, icons e assets
import { Container } from "./style";
import theme from "../../styles/theme";
import AddIcon from "@mui/icons-material/Add";

export function FloatingAddButton() {
  return (
    <Container>
      <AddIcon style={{ color: theme.colors.green065, fontSize: 50 }} />
    </Container>
  );
}
