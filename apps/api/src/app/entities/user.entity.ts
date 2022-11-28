import * as mongoose from 'mongoose';

export interface User {
    realname: string;
    emailaddress: number;
    username: string;
    password: string;
    id: number;
}

export const UserSchema = new mongoose.Schema({
    realname: { type: String, required: false },
    emailaddress: { type: Number, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
    id: {type: Number, required: false }
});