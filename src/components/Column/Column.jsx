import Card from "../Card/Card";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card id={card.id} topic={card.topic} title={card.title} date={card.date} />
        ))}
      </div>
    </div>
  );
};

export default Column;
