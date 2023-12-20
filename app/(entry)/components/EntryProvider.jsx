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
        notes_modal_open: false,
        notes_modal_key: '',
        notes: {
            health_note: 'testings this and that',
            work_note: '',
            play_note: '',
            love_note: '',
            self_respect_note: '',
        },
        keep_doing: [],
        start_doing: [],

    });

    const updateScore = (key, value) => {
        dispatch({
            type: 'UPDATE_SCORE',
            key,
            value,
        })
    }

    const openNotesModal = (key) => {
        dispatch({
            type: 'OPEN_NOTES_MODAL',
            key,
        })
    }

    const closeNotesModal = () => {
        dispatch({
            type: 'CLOSE_NOTES_MODAL',
        })
    }

    const updateNote = (key, value) => {
        dispatch({
            type: 'UPDATE_NOTE',
            key,
            value,
        })
    }
    

    return (
        <EntryContext.Provider 
            value={{
                ...state,
                updateScore,
                openNotesModal,
                closeNotesModal,
                updateNote,
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
        case 'OPEN_NOTES_MODAL':
            return {
                ...state,
                notes_modal_open: true,
                notes_modal_key: action.key,
            }
        case 'CLOSE_NOTES_MODAL':
            return {
                ...state,
                notes_modal_open: false,
                notes_modal_key: '',
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [action.key]: action.value,
                }
            }
        default: return state;
    }
}