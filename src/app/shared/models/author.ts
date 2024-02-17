export interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface SignupInfo {
    username: string;
    email: string;
    password: string;
}

export type SignupResponse = SignupInfo & {
    token: string;
    bio: string;
    image: string;
};

export interface UserResponse {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}