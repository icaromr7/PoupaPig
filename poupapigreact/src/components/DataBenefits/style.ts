import styled from "styled-components";
import theme from "../../styles/theme";

export const ContainerBenefits = styled.div`
  min-width: 230px;
  height: 180px;
  border: 3px solid ${theme.colors.blue038};
  background-color: ${theme.colors.blueE5F};
  border-radius: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBenefit = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeight600};
  color: ${theme.colors.blue002};
`;

export const NameBenefit = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};

  max-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonDiv = styled.div`
  width: 100%;
`;
