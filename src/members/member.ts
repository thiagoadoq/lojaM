import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Esposa } from './Esposa';
import { Depedente } from './depedente';

@Schema()
export class Member extends Document {
  @Prop()
  nameLoja: string;

  @Prop()
  potencia: string;

  @Prop()
  cordenacao: string;

  @Prop()
  nomeUser: string;

  @Prop()
  dataNacimento: Date;

  @Prop()
  dataCadastro: Date;

  @Prop()
  cim: number;

  @Prop()
  ime: number;

  @Prop()
  cpf: string;

  @Prop()
  rg: string;

  @Prop()
  cep: string;

  @Prop()
  endereco: string;

  @Prop()
  email: string;

  @Prop()
  telFixo: string;

  @Prop()
  celular: string;

  @Prop()
  esposa: Esposa;

  @Prop()
  depedente: Depedente[];
}

export const MemberSchema = SchemaFactory.createForClass(Member);
