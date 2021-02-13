import { ImeService } from './ime.service';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImeSchema } from './ime';
import { ImesController } from './imes.controller';
import { MemberModule } from 'src/members/member.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'imes',
        schema: ImeSchema,
      },
    ]),
  ],
  exports: [ImeService],
  controllers: [ImesController],
  providers: [ImeService],
})
export class ImeModule {}
