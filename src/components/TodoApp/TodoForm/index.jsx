import { Button, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from 'react';

function TodoForm(props) {

    const { onSubmit } = props
    let [name, setName] = useState("");

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(name)
        }
        setName("")
    }

    return (
        <div className="d-flex justify-content-center">
            <InputGroup className="m-3" >
                <FormControl
                    placeholder="Enter your task"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button
                    onClick={handleSubmit}
                >
                    Add
                </Button>
            </InputGroup>

            {/* <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" />
            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Add
            </button> */}
        </div>
    );
}

export default TodoForm;