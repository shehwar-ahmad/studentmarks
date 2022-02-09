import './Inputform.css';


function Inputform(){
    return (
        <div>

            <h3 id='formtitle'>Add Marks</h3>

            <form>

            <input type='text' placeholder='Full Name'></input>
            <input type='number' placeholder='Marks' min='0' max='100'></input>

            <button type='submit'>Add</button>

            </form>
        </div>
    );
}

export default Inputform;