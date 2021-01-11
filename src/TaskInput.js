import { useState } from "react";

const TaskInput = ({ addInToDo }) => {
    const [value, setValue] = useState("");

    return (
        <div className="taskInput">
            <form onSubmit={e => {
                e.preventDefault();
                addInToDo(value);
                setValue("");
                // console.log("Executing Form Submit");
                // console.log("Value of input is " + value);
            }}>
                <label htmlFor="inpText">Give Task</label>
                <input type="text" name="inpText" id="inpText" value={value} onChange={e => setValue(e.target.value)} />
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default TaskInput;