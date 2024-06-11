import { styled } from "styled-components";
import { StyledPopUpBlock } from "./PopUp.styled";

export const ExitTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.color_font_primary};
`;

export const ExitStyledPopUpBlock = styled(StyledPopUpBlock)`
  max-width: 370px;
  padding: 50px 60px;
`;
