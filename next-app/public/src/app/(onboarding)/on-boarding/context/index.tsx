"use client"

import {createContext, useContext, useState} from "react";

export const OnboardingStateContext = createContext({});

export function OnBoardingContextProvider({children}) {
    const value = useState({});
    return (
        <OnboardingStateContext.Provider value={value}>
            {children}
        </OnboardingStateContext.Provider>
    );
}

export function useOnBoardingState() {
    const context = useContext(OnboardingStateContext);
    if (!context) {
        throw new Error("useAppState must be used within the AppProvider");
    }
    return context;
}
