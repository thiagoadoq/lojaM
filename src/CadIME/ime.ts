import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()
export class Ime extends Document {
  @Prop()
  codIme: string;
}

export const ImeSchema = SchemaFactory.createForClass(Ime);
