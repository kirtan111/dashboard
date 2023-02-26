import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [addtask, setAddtask] = useState(false);
    const [count, setCount] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue !== "") {
            setTodos([inputValue, ...todos]);
            setAddtask(true);
            setInputValue("");
            setCount(count + 1);
        }
    };

    // const handleDeleteTodo = (index) => {
    //     const newTodos = [...todos];
    //     newTodos.splice(index, 1);
    //     setTodos(newTodos);
    // };

    return (
        <div>
            <div className="d-flex justify-content-between todoTitle  ">
                <div className="fw-bolder fs-4 mx-3 my-3">
                    TO DO List <span className="count fw-normal fs-5 border">{count}</span>
                </div>
                <span>
                    <AddIcon className="addicon fw-bolder fs-2 mx-3 my-4" onClick={() => setAddtask(true)} />
                </span>
            </div>
            <div>
                {addtask && (
                    <div className="inputfield d-flex justify-content-between mx-3">
                        <input className="border rounded-3" type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a new task..." />
                        <button className="border rounded-3 btn btn-primary" onClick={handleAddTodo}>
                            Add
                        </button>
                    </div>
                )}
                <div className="mx-3">
                    {todos.map((todo, index) => (
                        <div className="d-flex my-4 justify-content-between todoTask" key={index}>
                            <div>{todo}</div>
                            <div>
                                <select className="border rounded-3">
                                    <option className="btn btn-primary" value="Open">
                                        Open
                                    </option>
                                    <option className="btn btn-info" value="vegetable">
                                        In Progress
                                    </option>
                                    <option className="btn btn-warning" value="Pending">
                                        Pending
                                    </option>
                                    <option className="btn btn-danger" value="In Review">
                                        In Review
                                    </option>
                                    <option className="btn btn-success" value="Finished">
                                        Finished
                                    </option>
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
