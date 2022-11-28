
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly UserModel: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    debugger
    const newUser = new this.UserModel(createUserDto);
    const result = await newUser.save();

    return result.id;
  }

  async findAllUsers() {
    
    return await this.UserModel.find().exec();
  }

  async findOne(id: number) {
    console.log('Find one fired: ' + id);
    debugger
    return await this.UserModel.find({ id }).exec();

  }
}