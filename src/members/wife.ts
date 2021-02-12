import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Wife extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  birthday: Date;
}

export const WifeSchema = SchemaFactory.createForClass(Wife);
