export interface UserResponse {
    results: User[];
}

export interface User {
    name: {first: string; last: string;};
    gender: string;
    email: string;
    location: {city: string, country: string, coordinates: {latitude: string;longitude: string;};};
    picture: {large: string; medium: string;};

}