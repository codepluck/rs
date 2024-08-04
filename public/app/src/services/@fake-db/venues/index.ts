// services/venues.ts

import { faker } from "@faker-js/faker"

interface VenueInterface {
    name: string;
    contact: string;
    email: string;
    address: string;
    domain?: string;
    details: {
        banner_title?: string;
        title?: string;
        logo: string | null;
        description?: string | null;
        banner_image: string | null;
    };
    payments: {
        bank_details: {
            bank_name: string;
            account_number: string;
            short_code: string;
            ref_name: string;
        };
        payment_gateway_details: {
            live_secret_key: string;
            test_secret_key: string;
            live_publish_key: string;
            test_publish_key: string;
            payment_method: {
                stripe: string;
                paypal: string;
                wordpay: string;
            };
        };
    };
    description: string;
    title: string;
    bank_name: string;
    account_number: string;
    short_code: string;
    ref_name: string;
}
const generateVenue = (): VenueInterface => {
    const venue: VenueInterface = {
        name: faker.company.name(),
        contact: faker.phone.number(),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        domain: faker.internet.domainName(),
        details: {
            banner_title: faker.lorem.words(3),
            title: faker.company.catchPhrase(),
            logo: faker.image.urlPicsumPhotos(),
            description: faker.lorem.paragraph(),
            banner_image: faker.image.urlLoremFlickr(),
        },
        payments: {
            bank_details: {
                bank_name: faker.finance.accountName(),
                account_number: faker.finance.accountNumber(),
                short_code: faker.finance.routingNumber(),
                ref_name: faker.person.fullName()
            },
            payment_gateway_details: {
                live_secret_key: faker.string.uuid(),
                test_secret_key: faker.string.uuid(),
                live_publish_key: faker.string.uuid(),
                test_publish_key: faker.string.uuid(),
                payment_method: {
                    stripe: faker.string.uuid(),
                    paypal: faker.string.uuid(),
                    wordpay: faker.string.uuid(),
                },
            },
        },
        description: faker.lorem.paragraphs(3),
        title: faker.company.catchPhrase(),
        bank_name: faker.finance.accountName(),
        account_number: faker.finance.accountNumber(),
        short_code: faker.finance.routingNumber(),
        ref_name: faker.person.fullName()
    };

    return venue;
};

const fetchAllVenues = (count: number = 10): VenueInterface[] => {
    const venues: VenueInterface[] = [];
    for (let i = 0; i < count; i++) {
        venues.push(generateVenue());
    }
    return venues;
};

export { fetchAllVenues };
