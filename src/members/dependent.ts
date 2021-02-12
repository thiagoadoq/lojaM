import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Dependent extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  birthday: Date;

  @Prop()
  specification: string;
}

export const DependentSchema = SchemaFactory.createForClass(Dependent);
