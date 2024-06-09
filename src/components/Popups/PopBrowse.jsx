import { useEffect, useState } from "react";
import { AppRoutesList } from "../../AppRoutesList";
import { useCardsContext } from "../../context/cards";
import Button from "../Button/Button";
import Calendar from "../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./PopUp.styled";
import { statusList, topicCompare } from "../../data";
import { useUserContext } from "../../context/user";
import { editTodos, deleteTodos } from "../../api";

const PopBrowse = ({ id }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const token = user.token;

  const { cards, updateCards } = useCardsContext();
  const [editMode, setEditMode] = useState(false);

  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString());
  const [status, setStatus] = useState("");

  let selectedCard = null;
  let functionalButton;
  let statusBar;

  if (cards) {
    selectedCard = cards.find((card) => card._id === id) || null;
  }

  const editCard = () => {
    editTodos({
      token: token,
      taskId: id,
      title: selectedCard?.title,
      topic: selectedCard?.topic,
      status: status,
      description: description,
      date: date,
    }).then((data) => {
      updateCards(data.tasks);
      navigate(AppRoutesList.Main);
    });
  };

  const deleteCard = () => {
    deleteTodos({ token: token, taskId: id }).then((data) => {
      updateCards(data.tasks);
      navigate(AppRoutesList.Main);
    });
  };

  // Получение данных, выбранной карточки
  useEffect(() => {
    setDescription(selectedCard?.description);
    setDate(selectedCard?.date);
    setStatus(selectedCard?.status);
  }, [cards]);

  // Обновление режима редактирования
  useEffect(() => {
    setDescription(selectedCard?.description);
    setDate(selectedCard?.date);
    setStatus(selectedCard?.status);
  }, [editMode]);

  if (editMode) {
    functionalButton = (
      <Styled.ButtonsGroup>
        <Styled.FunctionalButtons>
          <Button onClick={editCard} text="Сохранить" $inverted />
          <Button onClick={() => setEditMode(false)} text="Отменить" $inverted />
          <Button onClick={deleteCard} text="Удалить задачу" $inverted />
        </Styled.FunctionalButtons>
        <Link to="/">
          <Button text={"Закрыть"}></Button>
        </Link>
      </Styled.ButtonsGroup>
    );
    statusBar = (
      <Styled.StyledPopUpCategories>
        <Styled.StyledPopUpCategoriesSubtitle>Статус</Styled.StyledPopUpCategoriesSubtitle>
        <Styled.StyledPopUpCategoriesThemes>
          {statusList.map((statusItem, index) => (
            <div key={index}>
              <Styled.StyledCategoriesThemeInput
                id={statusItem}
                value={statusItem}
                type="radio"
                checked={status == statusItem}
                onChange={(e) => setStatus(e.target.value)}
              />
              <Styled.StyledCategoriesStatus htmlFor={statusItem}>{statusItem}</Styled.StyledCategoriesStatus>
            </div>
          ))}
        </Styled.StyledPopUpCategoriesThemes>
      </Styled.StyledPopUpCategories>
    );
  } else {
    functionalButton = (
      <Styled.ButtonsGroup>
        <Styled.FunctionalButtons>
          <Button onClick={() => setEditMode(true)} text="Редактировать задачу" $inverted />
          <Button onClick={deleteCard} text="Удалить задачу" $inverted />
        </Styled.FunctionalButtons>
        <Link to="/">
          <Button text={"Закрыть"}></Button>
        </Link>
      </Styled.ButtonsGroup>
    );
  }

  return (
    <>
      <Styled.StyledPopUp>
        <Styled.StyledPopUpContainer>
          <Styled.StyledPopUpBlock>
            <Styled.StyledPopUpContent>
              <Styled.StyledPopUpTopBlock>
                <Styled.StyledPopUpTitle>{selectedCard?.title}</Styled.StyledPopUpTitle>
                <>
                  <Styled.StyledCategoriesThemeInput id="topic" type="radio" defaultChecked />
                  <Styled.StyledCategoriesTheme htmlFor="topic" $colorName={`${topicCompare[selectedCard?.topic]}`}>
                    {selectedCard?.topic}
                  </Styled.StyledCategoriesTheme>
                </>
              </Styled.StyledPopUpTopBlock>
              {statusBar}
              <Styled.StyledPopUpWrap>
                <Styled.StyledPopUpForm>
                  <Styled.StyledPopUpFormBlock>
                    <Styled.StyledPopUpSubtitle>Описание задачи</Styled.StyledPopUpSubtitle>
                    <Styled.StyledPopUpFormTextarea
                      placeholder="Введите название задачи..."
                      readOnly={!editMode}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></Styled.StyledPopUpFormTextarea>
                  </Styled.StyledPopUpFormBlock>
                </Styled.StyledPopUpForm>
                <Calendar date={date} setDate={setDate} mode={editMode ? "single" : "none"} />
              </Styled.StyledPopUpWrap>
              {functionalButton}
            </Styled.StyledPopUpContent>
          </Styled.StyledPopUpBlock>
        </Styled.StyledPopUpContainer>
      </Styled.StyledPopUp>
    </>
  );
};

export default PopBrowse;
