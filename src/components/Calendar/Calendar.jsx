import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { format } from "date-fns";
import { ru } from "date-fns/locale";

import * as Styled from "./Calendar.styled";

const Calendar = ({ date, setDate, mode = "single" }) => {
  date = new Date(date || null);
  let formatedSelectedDate = format(date, "dd.MM.yyy");

  const updateSelectedDate = (date) => {
    formatedSelectedDate = format(date, "dd.MM.yyy");
    setDate(date);
  };

  return (
    <Styled.Calendar>
      <Styled.CalendarTitle>Даты</Styled.CalendarTitle>
      <Styled.DayPickerWrapper>
        <DayPicker mode={mode} selected={date} onSelect={(date) => updateSelectedDate(date)} locale={ru} />
      </Styled.DayPickerWrapper>
      <Styled.CalendarPeriod>
        <Styled.CalendarPeriodDateEnd>
          Срок исполнения: <span>{formatedSelectedDate}</span>
        </Styled.CalendarPeriodDateEnd>
      </Styled.CalendarPeriod>
    </Styled.Calendar>
  );
};

export default Calendar;
