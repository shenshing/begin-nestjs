import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

import { User, LoginUser } from './interface/user.interface';
import config from '../../config/key';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userModel.findOne({ _id: id });
    }

    async create(user: User): Promise<User> {
        const salt = await bcrypt.genSalt(10);
        const encrypt_password = await bcrypt.hash(user.password, salt);
        user.password = encrypt_password;
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async login(loginUser: LoginUser): Promise<string> {
        const user_in_db = await this.userModel.findOne({ username: loginUser.username });
        const valid_password = await bcrypt.compare(loginUser.password, user_in_db.password);
        if (!valid_password) {
            return 'invalid username or password';
        }
        const signed_token = jwt.sign({ id: user_in_db._id }, config.token_secret);
        return signed_token;
    }
}
