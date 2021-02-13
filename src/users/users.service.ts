import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

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

  //Pesquisar por email
  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  //Pesquisar por nome
  async getByName(name: string) {
    return await this.userModel.findOne({ name }).exec();
  }

  //Pesquisar por cpf
  async getByCpf(cpf: string) {
    return await this.userModel.findOne({ cpf }).exec();
  }

  async atualizar(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user).exec();
  }

  async remover(id: string) {
    const userApagado = this.userModel.findOneAndDelete({ _id: id }).exec();

    return (await userApagado).remove();
  }
}
