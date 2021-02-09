import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async listarTodos(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async criar(user: User): Promise<User> {
    const newUser = new this.userModel(user);

    return newUser.save();
  }

  async buscarPorId(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async atualizar(id: string, gato: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, gato).exec();
  }

  async remover(id: string) {
    const userApagado = this.userModel.findOneAndDelete({ _id: id }).exec();

    return (await userApagado).remove();
  }
}
