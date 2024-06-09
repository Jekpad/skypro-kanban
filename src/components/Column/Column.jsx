import { Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card";
import { StyledColumn, StyledColumnTitle, StyledCards } from "./Column.styled";

const Column = ({ title, cards }) => {
  return (
    <StyledColumn>
      <StyledColumnTitle>
        <p>{title}</p>
      </StyledColumnTitle>
      <Droppable droppableId={title}>
        {(provided) => (
          <StyledCards ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Card key={card._id} index={index} id={card._id} topic={card.topic} title={card.title} date={card.date} />
            ))}
            {provided.placeholder}
          </StyledCards>
        )}
      </Droppable>
    </StyledColumn>
  );
};

export default Column;
