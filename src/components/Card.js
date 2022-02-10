import "./Card.css";

function Card(props) {
  return (
    <div id="card">
            <p>{props.oneStudent.name}</p>
            <p>{props.oneStudent.marks}</p>
    </div>
  );
}

export default Card;
