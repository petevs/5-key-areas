'use client'

import { createContext, useReducer, useEffect, useRef, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ profile, children }) => {

    const [state, dispatch] = useReducer(reducer, {
        user: profile,
    });

    return (
        <UserContext.Provider 
            value={{
                ...state,
            }}
        >
            {children}
        </UserContext.Provider>
    );
    }

const reducer = (state, action) => {
    switch (action.type) {
        default: return state;
    }
}