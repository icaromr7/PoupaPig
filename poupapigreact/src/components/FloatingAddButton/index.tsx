import React, { useState } from "react";

//style, icons e assets
import { Container } from "./style";
import theme from "../../styles/theme";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export function FloatingAddButton() {
  const navigate = useNavigate();
  const handleNewTransaction = () => {
    navigate("/new-transaction");
  };
  return (
    <Container onClick={handleNewTransaction}>
      <AddIcon style={{ color: theme.colors.green065, fontSize: 50 }} />
    </Container>
  );
}
