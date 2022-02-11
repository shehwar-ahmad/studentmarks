import styles from "./Inputform.module.css";
import { useState } from "react";

var inpName = "",
  inpMarks = 0;

function Inputform(props) {

  const [isValid,setIsValid]=useState(true);

  function nameHandler(event) {
    setIsValid(true);

    inpName = event.target.value;
  }
  function marksHandler(event) {
    setIsValid(true);
    inpMarks = Number(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    if (inpName.trim().length===0){
      setIsValid(false);
      alert("Enter a Valid Student Name");
      return;
    }
    if(inpMarks<=0){
      setIsValid(false);
      alert("Marks should be greater than 0.");
      return;
    }
    
    const temp = {
      name: inpName,
      marks: inpMarks,
    };

    props.sendData(temp);
  }



  return (
    <div>
      <h4 id={styles.formtitle}>Add Marks</h4>

      <form>
        <input
          onChange={nameHandler}
          type="text"
          placeholder="Full Name"
          className={`${!isValid && styles.invalid}`}
        ></input>
        <input
          onChange={marksHandler}
          type="number"
          placeholder="Marks"
          min="0"
          max="100"
          className={`${!isValid && styles.invalid}`}

        ></input>

        <button onClick={submitHandler} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Inputform;
