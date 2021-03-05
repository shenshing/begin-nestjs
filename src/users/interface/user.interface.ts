import { Document } from 'mongoose';

export interface User extends Document {
    id?: string;
    username: string;
    password: string;
    email: string;
    friends: [string];
    current_status: string;
    created_at: string;
};

export interface LoginUser extends Document {
    username: string;
    password: string;
};