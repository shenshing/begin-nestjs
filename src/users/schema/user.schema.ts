import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    email: String,
    // friends: [String],
    current_status: String,
    created_at: String
});