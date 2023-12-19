'use client'

import { createContext, useReducer, useEffect, useRef, useState } from "react";

export const EntryContext = createContext();

export const EntryProvider = ({ profile, children }) => {

    const [state, dispatch] = useReducer(reducer, {
        scores: {
            health_score: 3,
            work_score: 3,
            play_score: 3,
            love_score: 3,
            self_respect_score: 3,
        },
        health_note: '',
        work_note: '',
        play_note: '',
        love_note: '',
        self_respect_note: '',
    });

    const updateScore = (key, value) => {
        dispatch({
            type: 'UPDATE_SCORE',
            key,
            value,
        })
    }

    return (
        <EntryContext.Provider 
            value={{
                ...state,
                updateScore,
            }}
        >
            {children}
        </EntryContext.Provider>
    );
    }

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_SCORE':
            return {
                ...state,
                scores: {
                    ...state.scores,
                    [action.key]: action.value,
                }
            }
        default: return state;
    }
}