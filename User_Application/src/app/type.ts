export interface UserDetail {
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    company?: Company;
}

export interface Company {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}

export interface Address {
    city?: string;
    street?: string;
    suite?: string;
    zipcode?: string;
}