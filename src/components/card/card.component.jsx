import './card.styles.css';

const Card = (props) => {
  const { name, email, imgSrc } = props;
  return (
    <div className="card-container">
      <img alt={`monster ${name}`} src={imgSrc} />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};
export default Card;
