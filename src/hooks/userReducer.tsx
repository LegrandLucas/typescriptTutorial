/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react'


type Actions = 
| {type: "add"; text: string}
| {type: "remove"; idx: number}

interface Todo {
    text: string;
    idx: number;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
    switch(action.type) {
        case "add":
            return [...state, {text: action.text, complete: false}];
            case "remove":
                return state.filter((_, i) => action.idx !== i);
                default: 
                return state;
    }
}

const userReducer: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [])
  return (
    <div>
        <button
        onClick={() => {
            dispatch({type: "add", text: "..."})
        }}>+</button>
    </div>
  )
}

export default userReducer