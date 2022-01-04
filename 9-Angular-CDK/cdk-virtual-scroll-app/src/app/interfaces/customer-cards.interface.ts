
interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface User {
    name: string;
    email: string;
    phone: string;
    address: Address;
}

export interface CustomerCardsInterface extends User {
    picture: string;
}
