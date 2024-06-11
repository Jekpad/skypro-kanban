import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.$width};
  min-height: 30px;
  border-radius: 4px;
  color: ${(props) => props.theme.color_button_font};
  background: ${(props) => props.theme.color_button_background};
  border: 1px solid ${(props) => props.theme.color_button_border};
  font-size: 14px;

  font-weight: 500;
  padding: 5px 10px;

  &:hover {
    background: ${(props) => props.theme.color_button_background_contrast};
    border: 1px solid ${(props) => props.theme.color_button_background_contrast};
  }
`;

export const StyledButtonInverted = styled(StyledButton)`
  color: ${(props) => props.theme.color_button_inverted_font};
  background: ${(props) => props.theme.color_button_inverted_background};
  border: 1px solid ${(props) => props.theme.color_button_inverted_border};

  &:hover {
    color: ${(props) => props.theme.color_button_font};
    background: ${(props) => props.theme.color_button_background};
    border: 1px solid ${(props) => props.theme.color_button_background};
  }
`;
