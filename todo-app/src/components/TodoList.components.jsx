import React, { useState } from 'react';
import TodoForm from './TodoForm.components';
import Todo from './Todo.components';

export default function TodoList(){
    const [ todos, setTodos ] = useState([])


    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];
        
        setTodos(newTodos);
    };

    const udpateTodo = (todoId, newValue) => {
        if(!newValue.text ||  /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item ))
    };


    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return(
        <>
         <h1>What's the plan for today?</h1>
         <TodoForm onSubmit={addTodo}/>
         <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={udpateTodo}
         />
        </>
    );

}