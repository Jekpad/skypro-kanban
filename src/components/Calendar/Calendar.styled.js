import { styled } from "styled-components";
import { breakpoints } from "../../Global.styled";

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.lg}px) {
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${(props) => props.theme.color_font_primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const DayPickerWrapper = styled.div`
  * {
    font-size: 10px;
    color: rgb(148, 166, 190);
  }

  .rdp {
    margin: 0;
  }

  .rdp-caption_label {
    font-size: 14px;
  }

  .rdp-cell {
    height: 22px;
  }

  .rdp-day_selected {
    background-color: #94a6be;
    color: #ffffff;
  }

  & button {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${breakpoints.lg}px) {
    * {
      font-size: 14px;
    }

    .rdp-cell {
      height: 42px;
    }

    & button {
      width: 42px;
      height: 42px;
    }
  }
`;

export const CalendarPeriod = styled.div`
  * {
    font-size: 10px;
  }

  margin-top: 12px;
  padding: 0 7px;
`;

export const CalendarPeriodDateEnd = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  & span {
    color: ${(props) => props.theme.color_font_primary};
  }

  @media (max-width: ${breakpoints.lg}px) {
    font-size: 14px;
    & span {
      font-size: 14px;
    }
  }
`;
