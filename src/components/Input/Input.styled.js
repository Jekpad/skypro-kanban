import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  color: ${(props) => props.theme.color_font_primary};
  background-color: transparent;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: ${(props) => props.theme.color_font_secondary};
  }

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: ${(props) => props.theme.color_font_secondary};
  }
`;
