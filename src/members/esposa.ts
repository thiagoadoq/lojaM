import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Esposa extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  dataNiver: Date;
}

export const EsposaSchema = SchemaFactory.createForClass(Esposa);
