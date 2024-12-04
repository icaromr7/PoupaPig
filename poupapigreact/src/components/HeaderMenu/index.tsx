import { useAuth } from "../../context/AuthContext";
import { Container, Line } from "./style";
import { useNavigate } from "react-router-dom";

interface HeaderMenuProps {
  notification?: boolean;
  config?: boolean;
}

export function HeaderMenu({ notification, config }: HeaderMenuProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleAccountConfig = () => {
    navigate("/config-account");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container>
      {notification && (
        <>
          <Line>Hoje é dia de pagar a conta</Line>
          <Line>Hoje é dia de pagar </Line>
          <Line>Hoje é dia de pagar a conta</Line>
          <Line>Hoje é dia de pagar a conta</Line>
        </>
      )}
      {config && (
        <>
          <Line onClick={handleAccountConfig}>Minha conta</Line>
          <Line onClick={handleLogout}>Sair</Line>
        </>
      )}
    </Container>
  );
}
