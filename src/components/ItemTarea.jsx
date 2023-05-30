import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({textoTarea, borrarTarea}) => {
    return (
        <>
            <ListGroup.Item className="my-2">{textoTarea}</ListGroup.Item>
            <Button onClick={() => borrarTarea(textoTarea)}>Eliminar tarea</Button>
        </>
    );
};

export default ItemTarea;