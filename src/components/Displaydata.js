import "./Displaydata.css";
import Card from "./Card";
function Displaydata(props) {
  return (
    <div id="displaydata">
      {props.studentData.map((student) => {
        return <Card oneStudent={student} key={student.name+Math.random()+Math.random()}></Card>;
      })}
    </div>
  );
}

export default Displaydata;
