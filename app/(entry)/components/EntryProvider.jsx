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
            health_note: '',
            work_note: '',
            play_note: '',
            love_note: '',
            self_respect_note: '',
        },
        keep_doing: [
            { area: 'health', text: '' },
            { area: 'work', text: '' },
            { area: 'play', text: '' },
            { area: 'love', text: '' },
            { area: 'self_respect', text: '' },
        ],
        start_doing: [
            { area: 'health', text: '' },
            { area: 'work', text: '' },
            { area: 'play', text: '' },
            { area: 'love', text: '' },
            { area: 'self_respect', text: '' },
        ],
        reminder_frequency: 'weekly',
        reminder_day_of_week: 'sunday',
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

    const updateKeepDoing = (updatedKP) => {
        dispatch({
            type: 'UPDATE_KEEP_DOING',
            value: updatedKP,
        })
    }

    const updateStartDoing = (updatedSD) => {
        dispatch({
            type: 'UPDATE_START_DOING',
            value: updatedSD,
        })
    }

    const updateReminderFrequency = (value) => {
        dispatch({
            type: 'UPDATE_REMINDER_FREQUENCY',
            value: value,
        })
    }

    const updateReminderDayOfWeek = (value) => {
        dispatch({
            type: 'UPDATE_REMINDER_DAY_OF_WEEK',
            value: value,
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
                updateKeepDoing,
                updateStartDoing,
                updateReminderFrequency,
                updateReminderDayOfWeek,
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
        case 'UPDATE_KEEP_DOING':
            return {
                ...state,
                keep_doing: action.value,
            }
        case 'UPDATE_START_DOING':
            return {
                ...state,
                start_doing: action.value,
            }
        case 'UPDATE_REMINDER_FREQUENCY':
            return {
                ...state,
                reminder_frequency: action.value,
            }
        case 'UPDATE_REMINDER_DAY_OF_WEEK':
            return {
                ...state,
                reminder_day_of_week: action.value,
            }
        default: return state;
    }
}