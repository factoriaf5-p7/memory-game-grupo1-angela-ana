import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const user = new this.userModel(createUserDTO);
    return await user.save();
  }
}
