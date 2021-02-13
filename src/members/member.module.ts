import { MemberService } from './member.service';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './member';
import { MembersController } from './members.controller';
import { DashboardController } from 'src/dashboard/dashboard.controller';
import { ImeService } from 'src/CadIME/ime.service';
import { ImeModule } from 'src/CadIME/ime.module';
import { ImesController } from 'src/CadIME/imes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'members',
        schema: MemberSchema,
      },
    ]),
  ],

  controllers: [MembersController, DashboardController],
  providers: [MemberService],
})
export class MemberModule {}
