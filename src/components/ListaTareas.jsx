import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({listaTareas}) => {
    
    return (
        <ListGroup>
            {listaTareas.map((tarea)=>{
                return <ItemTarea valueTarea={tarea}></ItemTarea>
            })}
        </ListGroup>
    );
};

export default ListaTareas;
