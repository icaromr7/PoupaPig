import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0px;
  top: 100px;
  z-index: 99999;
  margin: auto;
  @media screen and (max-width: 850px) {
    top: 60px;
  }
`;
