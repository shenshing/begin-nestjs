import { Document } from 'mongoose';

export class CreateUserDto extends Document {
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly friends: [string];
    readonly current_status: string;
    readonly created_at: string;
}

export class LoginUserDto extends Document {
    readonly username: string;
    readonly password: string;
}

    // id?: string;
    // username: string;
    // password: string;
    // email: string;
    // // friends: [string];
    // current_status: string;
    // created_at: string;