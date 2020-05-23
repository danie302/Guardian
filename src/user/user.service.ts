import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { genSaltSync, hashSync } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/settings/interfaces/user.interface';
import { CreateUserDTO } from 'src/settings/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async findOne(username: string): Promise<IUser | undefined> {
    return this.userModel.findOne({ username }).lean();
  }

  async create(createUserDto: CreateUserDTO): Promise<IUser> {
    let { password, name, email, lastname, priority, username } = createUserDto;
    let salt = genSaltSync(10);
    let hashPassword = hashSync(password, salt);
    let createdUser = new this.userModel({
      name,
      email,
      username,
      lastname,
      priority,
      password: hashPassword,
    });
    return await createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<IUser> {
    return this.userModel.findById(id);
  }
}
