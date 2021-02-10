import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Depedente extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  dataNiver: Date;

  @Prop()
  especificacao: string;
}

export const DepedenteSchema = SchemaFactory.createForClass(Depedente);
