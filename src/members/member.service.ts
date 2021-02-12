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

  async validaDados(member: Member) {
    const query = { cpf: member.cpf };
    const memberCpfDto = await this.memberModel.find(query);

    const memberWifiCpfDto = memberCpfDto.find(
      c => c.wife.email == member.wife.email,
    );

    const data = { member: memberCpfDto, wife: memberWifiCpfDto };

    return data;
  }

  async criar(member: Member): Promise<Member> {
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
