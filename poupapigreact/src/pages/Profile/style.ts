import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CardFinancialControl = styled.div`
  min-width: 300px;
  border: 5px solid ${theme.colors.green0FB};
  border-radius: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileImage = styled.div`
  height: 80px;
  min-width: 80px;
  border-radius: 20px;

  background-color: #876564;
`;

export const UserTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeTitle = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 22px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const Subtitle = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 10px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const FinancialControlResume = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${theme.colors.greenBFF};
  border-radius: 20px;
  padding: 10px;

  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 50px;
`;

export const MessageFinancialControl = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 14px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const SocialSituation = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid ${theme.colors.blue038};
  border-radius: 20px;
  padding: 10px;
`;

export const Column = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 10px;
`;

export const TitleSocial = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightBold};
  color: ${theme.colors.blue038};
`;

export const MessageSocial = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

export const LetterSocial = styled.div`
  height: fit-content;
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 60px;
  font-weight: ${theme.fonts.fontWeightBold};
  color: ${theme.colors.blue038};
`;

export const ClientData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const BenefitContainer = styled.div`
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

export const TextBenefit = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  font-size: 15px;
  font-weight: ${theme.fonts.fontWeightRegular};
  color: ${theme.colors.black171};
`;

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

export const Side = styled.div`
  width: 48%;
`;

export const Title = styled.div`
  font-family: ${theme.fonts.fontMontserrat};
  color: ${theme.colors.blue002};
  font-size: 20px;
  font-weight: ${theme.fonts.fontWeightBold};
`;

export const TableContainer = styled.div`
  width: 100%;
  max-height: 360px;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${theme.colors.greenAEC};
  z-index: 1;
`;

export const TableRow = styled.tr<{ even: boolean }>`
  height: 30px;
  background-color: ${({ even }) =>
    even ? "rgba(174, 207, 159, 0.5)" : "rgba(191, 243, 167, 0.5)"};
`;

export const TableCell = styled.td`
  padding: 5px;
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.black171};
  font-size: 15px;
`;

export const HeaderCell = styled.th`
  padding: 5px;
  text-align: left;
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.black171};
  font-size: 15px;
`;

export const IconCell = styled.td`
  text-align: center;
`;

export const ContainerCategory = styled.div`
  background-color: ${theme.colors.greenBFF};
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled.img`
  height: 20px;
`;

export const ValueSpentLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 80%;
`;

export const ValueSpent = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.green0FB};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightMedium};
`;

export const LoadingBar = styled.div`
  width: 100%;
  border: 3px solid #d9d9d9;
`;

export const TotalCategory = styled.div`
  font-family: ${theme.fonts.fontOpenSans};
  color: ${theme.colors.black171};
  font-size: 12px;
  font-weight: ${theme.fonts.fontWeightRegular};
`;
