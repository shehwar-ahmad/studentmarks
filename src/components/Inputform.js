import "./Inputform.css";

var inpName = "",
  inpMarks = 0;

function Inputform(props) {
  function nameHandler(event) {
    inpName = event.target.value;
  }
  function marksHandler(event) {
    inpMarks = Number(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const temp = {
      name: inpName,
      marks: inpMarks,
    };

    props.sendData(temp);
  }

  return (
    <div>
      <h4 id="formtitle">Add Marks</h4>

      <form>
        <input
          onChange={nameHandler}
          type="text"
          placeholder="Full Name"
        ></input>
        <input
          onChange={marksHandler}
          type="number"
          placeholder="Marks"
          min="0"
          max="100"
        ></input>

        <button onClick={submitHandler} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Inputform;
