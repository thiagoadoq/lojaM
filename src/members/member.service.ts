import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from './member';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
  constructor(@InjectModel('members') private memberModel: Model<Member>) {}

  async listarTodos(): Promise<Member[]> {
    return this.memberModel.find().exec();
  }

  async buscarPorId(_id: string): Promise<Member> {
    return this.memberModel.findById(_id).exec();
  }

  async getByEmail(email: string) {
    return await this.memberModel.findOne({ email }).exec();
  }

  //Pesquisar por nome
  async getByName(userName: string) {
    return await this.memberModel.findOne({ userName }).exec();
  }

  //Pesquisar por cpf
  async getByCpf(cpf: string) {
    return await this.memberModel.findOne({ cpf }).exec();
  }

  async criar(member: Member): Promise<Member> {
    const query = { cpf: member.cpf };
    const query1 = { email: member.wife.email };

    const memberCpfDto = await this.memberModel.countDocuments(query);
    const memberWifiCpfDto = await this.memberModel.countDocuments(query1);

    if (memberCpfDto) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Cpf do do usuário já cadastrado!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const newUser = new this.memberModel(member);
    return newUser.save();
  }

  async atualizar(id: string, member: Member): Promise<Member> {
    return this.memberModel.findByIdAndUpdate(id, member).exec();
  }

  //Pesquisar por nome
  async getCoutCodenacao() {
    const query = { cordenacao: 'Tridade' };
    const query1 = { cordenacao: 'Anicuns' };
    const query2 = { cordenacao: 'Palmeiras' };
    const query3 = { cordenacao: 'Guapo' };
    const query4 = { cordenacao: 'Goiania' };

    const coutMemberTrindade = await this.memberModel.countDocuments(query);
    const coutMemberAnicuns = await this.memberModel.countDocuments(query1);
    const coutMemberPalmeiras = await this.memberModel.countDocuments(query2);
    const coutMemberGuapo = await this.memberModel.countDocuments(query3);
    const coutMemberGoiania = await this.memberModel.countDocuments(query4);
    const totalMember = await this.memberModel.countDocuments();

    const data = {
      memberTidade: coutMemberTrindade,
      memberAnicuns: coutMemberAnicuns,
      memberPalmeiras: coutMemberPalmeiras,
      memberGuapo: coutMemberGuapo,
      memberGoiania: coutMemberGoiania,
      totalMember: totalMember,
    };

    return data;
  }
}
