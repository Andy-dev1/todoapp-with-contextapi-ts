import classes from './TodoItem.module.css';

interface IProps {
    text: string;
    onRemoveTodo:()=>void;
}

const TodoItem=({text,onRemoveTodo}:IProps)=>{
    return(<li onClick={onRemoveTodo} className={classes.item}>{text}</li>);
};

export default TodoItem;