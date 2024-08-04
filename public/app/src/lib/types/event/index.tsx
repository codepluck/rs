interface EventDetails {
    package_title: string;
    package_description: string;
    package_image: string;
    package_details: { title: string }[];
    menu_title: string;
    menu_description: string;
    event_menus: {
        title: string;
        menu_items: { title: string; description: string }[];
    };
}

interface EventPackages {
    title: string;
    description: string;
    flyer: string;
    items: { name: string }[];
}


interface EventFAQ {
    question: string;
    answer: string;
}

interface EventReminder {
    question: string;
    answer: string;
}

export interface EventInerface {
    name: string;
    venue_id: string;
    event_category_id: bigint;
    title: string;
    sub_title: string;
    heading: string;
    description: string;
    banner: string;
    galleries: string[];
    event_details: EventDetails;
    packages: EventPackages;
    faqs: EventFAQ[];
    email_reminder_days: EventReminder[];
}