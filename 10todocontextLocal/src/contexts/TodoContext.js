import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "to do message",
            complete : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (todo) => {},
    deleteTodo : (id, todo) => {},
    toggleComplete : (id) => {}
})
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider