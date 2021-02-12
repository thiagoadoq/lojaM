import { ImeService } from './ime.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImeSchema } from './ime';
import { ImesController } from './imes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'imes',
        schema: ImeSchema,
      },
    ]),
  ],
  controllers: [ImesController],
  providers: [ImeService],
})
export class ImeModule {}
