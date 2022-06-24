import React, { useState } from 'react';
import Todo from '../models/todo';

interface IProps {
    children: JSX.Element | JSX.Element[];
};
interface IContext{
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<IContext>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
});

const TodosContextProvider = (props: IProps) => {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        })
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };

    const contextValue:IContext = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;