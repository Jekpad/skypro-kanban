import styled from "styled-components";
import { breakpoints } from "../../Global.styled";

export const StyledColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;

  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const StyledColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  & p {
    color: ${(props) => props.theme.color_font_secondary};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const StyledCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  flex-grow: 1;

  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
