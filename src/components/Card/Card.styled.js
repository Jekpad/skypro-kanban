import styled from "styled-components";
import { topicStyles } from "../../data";
export const StyledCardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const StyledCard = styled.div`
  width: 220px;
  height: 130px;
  background: ${(props) => props.theme.color_background_primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const StyledCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  background-color: ${(props) => topicStyles[props.$color]?.backgroundColor || topicStyles["_gray"]?.backgroundColor};
  color: ${(props) => topicStyles[props.$color]?.color || topicStyles["_gray"]?.color};

  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;

    background-color: ${(props) => topicStyles[props.$color]?.backgroundColor || topicStyles["_gray"]?.backgroundColor};
    color: ${(props) => topicStyles[props.$color]?.color || topicStyles["_gray"]?.color};
  }
`;

export const StyledCardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.color_font_primary};
  margin-bottom: 10px;
`;

export const StyledCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${(props) => props.theme.color_font_secondary};
    letter-spacing: 0.2px;
  }
`;
