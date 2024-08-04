"use client"
import React, { createContext, useState } from 'react';
// Initial state
import { faker } from "@faker-js/faker";

// types.ts

interface HeadingSettings {
    fontSize: string;
    fontFamily: string;
    fontColor: string;
    classNames: string;
}

interface ParagraphSettings {
    fontSize: string;
    fontFamily: string;
    fontColor: string;
    classNames: string;
}

interface ThemeSettings {
    headings: {
        headingOne: HeadingSettings;
        headingTwo: HeadingSettings;
        headingThree: HeadingSettings;
        headingFour: HeadingSettings;
        headingFive: HeadingSettings;
        headingSix: HeadingSettings;
    };
    paragraph: ParagraphSettings;
}

export interface Settings {
    themeSettings: ThemeSettings;
}


const settings: Settings = {
    themeSettings: {
        headings: {
            headingOne: {
                fontSize: "text-4xl",
                fontFamily: "font-serif",
                fontColor: "text-black",
                classNames: "mb-4"
            },
            headingTwo: {
                fontSize: "text-3xl",
                fontFamily: "font-serif",
                fontColor: "text-gray-800",
                classNames: "mb-3"
            },
            headingThree: {
                fontSize: "text-2xl",
                fontFamily: "font-serif",
                fontColor: "text-gray-700",
                classNames: "mb-2"
            },
            headingFour: {
                fontSize: "text-xl",
                fontFamily: "font-sans",
                fontColor: "text-gray-600",
                classNames: "mb-2"
            },
            headingFive: {
                fontSize: "text-lg",
                fontFamily: "font-sans",
                fontColor: "text-gray-600",
                classNames: "mb-2"
            },
            headingSix: {
                fontSize: "text-base",
                fontFamily: "font-sans",
                fontColor: "text-gray-500",
                classNames: "mb-1"
            }
        },
        paragraph: {
            fontSize: "text-base",
            fontFamily: "font-sans",
            fontColor: "text-gray-800",
            classNames: "mb-4"
        }
    }
}

interface InitialState {

}
const initialState: InitialState = {
    user: {
        id: 1,
        username: "admin-corwel",
        avatar: null,
        fullName: "Main Admin",
        profile: {},
        roles: ["admin"],
        permissions: [],
        token: ""
    },
    theme: 'slate',
    menus:
    {
        header: [],
        footerMenu: [],
        sidebarMenu: [],

    },
    settings: settings
};



// Create context
export const OwnerServiceContext = createContext();
export const OwnerServiceProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const updateOwnerState = (newState) => {
        setState(prevState => ({
            ...prevState,
            ...newState
        }));
    };

    return (
        <OwnerServiceContext.Provider value={{ state, updateOwnerState }}>
            {children}
        </OwnerServiceContext.Provider>
    );
};
