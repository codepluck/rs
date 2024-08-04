"use client"
import React, { createContext, useState } from 'react';
// Initial state
import { faker } from "@faker-js/faker";
import { EventInerface } from '@/lib/types/event';
import { VenueInterface } from '@/lib/types/venue';
import { UserInterface } from '@/lib/types/user';


interface ThemeSettings {
    // Define any specific properties related to theme settings
}

interface VenueSettings {
    // Define any specific properties related to venue settings
}

interface Settings {
    themeSettings: ThemeSettings;
    venueSettings: VenueSettings;
}

interface InitialState {
    user: UserInterface;
    theme: string; // replace 'default' with your current theme
    mainNavigation: any[]; // Assuming an array of any type for navigation items
    sidebarNavigation: any[]; // Assuming an array of any type for navigation items
    footerNavigation: any[]; // Assuming an array of any type for navigation items
    settings: Settings;
    venues: [VenueInterface]
}


const fetchEvent = () => {
    const event: EventInerface = {
        name: "",
        venue_id: faker.string.alpha(),
        event_category_id: faker.number.bigInt(),
        title: faker.person.jobArea(),
        sub_title: faker.person.jobTitle(),
        heading: faker.person.jobDescriptor(),
        description: faker.lorem.paragraph(2),
        banner: faker.image.urlPicsumPhotos(),
        galleries: [
            faker.image.urlPicsumPhotos(),
            faker.image.urlPicsumPhotos(),
            faker.image.urlPicsumPhotos(),
            faker.image.urlPicsumPhotos(),
        ],

        event_details: {
            package_title: faker.person.suffix(),
            package_description: faker.lorem.paragraph(2),
            package_image: faker.image.urlPicsumPhotos(),
            package_details: [{ title: "" }],
            menu_title: "menu-item-title",
            menu_description: "menu-item-description",
            event_menus: {
                title: "event-menus-item-title",
                menu_items: [
                    { title: "menu-items-title", description: "menu-items-description" },
                ],
            },
        },

        packages: {
            title: "package title",
            description: "Package 1 Description",
            flyer: "",
            items: [
                {
                    name: "Package 1",
                },
                {
                    name: "Package 2",
                },
                {
                    name: "Package 3",
                },
            ],
        },

        faqs: [
            {
                question: "Hello Question",
                answer: "Hello Answer",
            },
            {
                question: "World Question",
                answer: "World Answer",
            },
        ],
        email_reminder_days: [
            {
                title: "Table drink serves",
                time: "",
            },
        ],
    };
    return event
}
const defaultEvents = (limit = 10) => {
    let events = []
    for (let i = 0; i < limit; i++) {
        events.push(fetchEvent())
    }
    return events
}




const getVenue = () => {
    return {
        name: faker.company.name(),
        title: faker.company.buzzNoun(),
        account_number: faker.phone.number(),
        address: faker.location.streetAddress(),
        description: faker.location.streetAddress(),
        owner: {
            id: faker.string.uuid(),
            username: faker.person.fullName(),
            avatar: faker.image.avatar(),
            fullName: faker.person.fullName(),
            profile: {},
            roles: ["owner"],
            permissions: [],
            token: ""
        },
        details: {
            banner_title: faker.lorem.text(),
            title: faker.lorem.text(),
            logo: faker.image.urlPicsumPhotos(),
            description: faker.lorem.text(),
            banner_image: faker.image.urlPicsumPhotos(),
        },
        payments: {
            bank_details: {
                bank_name: faker.finance.accountName(),
                account_number: faker.finance.accountNumber(),
                short_code: faker.finance.maskedNumber(),
                ref_name: faker.finance.iban()
            },
            payment_gateway_details: {
                live_secret_key: faker.string.uuid(),
                test_secret_key: faker.string.uuid(),
                live_publish_key: faker.string.uuid(),
                test_publish_key: faker.string.uuid(),
                payment_method: "stripe",
            },
        },
        events: defaultEvents(5)

    };
}

const defaultVenues = (limit = 10) => {
    let venues = []
    for (let i = 0; i < limit; i++) {
        const vanue = getVenue();
        venues.push(vanue)
    }
    return venues
}


// Example usage
const initialState: InitialState = {
    user: {
        id: 1,
        username: "owner-corwel",
        avatar: null,
        fullName: "Main Owner",
        profile: {},
        roles: ["owner"],
        permissions: [],
        token: ""
    },
    theme: 'default',
    mainNavigation: [],
    sidebarNavigation: [],
    footerNavigation: [],
    settings: {
        themeSettings: {},
        venueSettings: {}
    },
    venues: defaultVenues(10),
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
