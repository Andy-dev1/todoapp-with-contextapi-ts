import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';
import { useContext } from 'react';



const Todos = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => <TodoItem onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} key={item.text} text={item.text} />)}
        </ul>
    );
}

export default Todos;