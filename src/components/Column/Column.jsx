import Card from "../Card/Card";

const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card category="Web Design" title="Дизайн карточки" date="30.06.24" />
        <Card category="Reseatch" title="Новый UI/UX React" date="12.04.24" />
      </div>
    </div>
  );
};

export default Column;
