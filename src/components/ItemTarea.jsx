import { ListGroup } from "react-bootstrap";

const ItemTarea = ({textoTarea}) => {
    return (
        <ListGroup.Item className="my-2">{textoTarea}</ListGroup.Item>
    );
};

export default ItemTarea;