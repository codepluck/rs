export interface BankDetails {
    bank_name: string;
    account_number: string;
    short_code: string;
    ref_name: string;
}

export interface PaymentGatewayDetails {
    live_secret_key: string;
    test_secret_key: string;
    live_publish_key: string;
    test_publish_key: string;
    payment_method: {
        stripe: string;
        paypal: string;
        wordpay: string;
    };
}
export interface VenueDetails {
    banner_title?: string;
    title?: string;
    logo: string | null;
    description?: string | null;
    banner_image: string | null;
}

export interface VenueInterface {
    name: string;
    contact: string;
    email: string;
    address: string;
    domain?: string;
    details: VenueDetails;
    payments: {
        bank_details: BankDetails;
        payment_gateway_details: PaymentGatewayDetails;
    };
    description: string;
    title: string;
    bank_name: string;
    account_number: string;
    short_code: string;
    ref_name: string;
}


