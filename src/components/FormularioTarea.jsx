import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, { id: Date.now(), text: tarea }]);
        setTarea("");
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group
                    className="mb-3 d-flex gap-1"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una tarea"
                        onChange={(e) => setTarea(e.target.value)}
                        value={tarea}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas listaTareas={tareas}></ListaTareas>
        </>
    );
};

export default FormularioTarea;
