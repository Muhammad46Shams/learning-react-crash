import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "todo messg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

})


export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider