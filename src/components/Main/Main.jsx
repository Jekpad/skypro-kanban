import { statusList } from "../../data";
import Column from "../Column/Column";
import { StyledMain, StyledMainBlock, StyledMainContent } from "./Main.styled";
import { StyledContainer } from "../Container/Container.styled";
import { useCardsContext } from "../../context/cards";
import { DragDropContext } from "react-beautiful-dnd";
import { useUserContext } from "../../context/user";
import { editTodos } from "../../api";

const Main = () => {
  const { cards, updateCards } = useCardsContext();
  const { user } = useUserContext();
  const token = user.token;

  // Потому что от сервера приходят очень странные статусы
  const сorrectCards = cards.map((card) => {
    if (!statusList.includes(card.status)) {
      return { ...card, status: statusList[0] };
    }
    return card;
  });

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId == source.droppableId && destination.index == source.index) {
      return;
    }

    let newCard = {};
    const newCards = Object.values(cards).map((card) => {
      if (card._id === draggableId) {
        newCard = { ...card, status: destination.droppableId };
        return newCard;
      }
      return card;
    });

    updateCards(newCards);

    try {
      await editTodos({
        token: token,
        taskId: newCard._id,
        title: newCard.title,
        topic: newCard.topic,
        status: destination.droppableId,
        description: newCard.description,
        date: newCard.date,
      });

      updateCards(newCards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledMain>
      <StyledContainer>
        <StyledMainBlock>
          <StyledMainContent>
            <DragDropContext onDragEnd={onDragEnd}>
              {statusList.map((status, index) => (
                <Column key={index} title={status} cards={сorrectCards.filter((card) => card.status == status)} />
              ))}
            </DragDropContext>
          </StyledMainContent>
        </StyledMainBlock>
      </StyledContainer>
    </StyledMain>
  );
};

export default Main;
