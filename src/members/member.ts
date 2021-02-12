import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Wife } from './wife';
import { Dependent } from './dependent';

@Schema()
export class Member extends Document {
  @Prop()
  storeName: string;

  @Prop()
  potency: string;

  @Prop()
  coordination: string;

  @Prop()
  userName: string;

  @Prop()
  birthDate: Date;

  @Prop()
  registerDate: Date;

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
  address: string;

  @Prop()
  email: string;

  @Prop()
  landline: string;

  @Prop()
  phone: string;

  @Prop()
  wife: Wife;

  @Prop()
  dependent: Dependent[];
}

export const MemberSchema = SchemaFactory.createForClass(Member);
