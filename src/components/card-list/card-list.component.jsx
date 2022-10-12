import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <Card
            key={id}
            name={name}
            email={email}
            imgSrc={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
        );
      })}
    </div>
  );
};

export default CardList;
