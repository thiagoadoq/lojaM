import { MemberService } from './member.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './member';
import { MembersController } from './members.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'members',
        schema: MemberSchema,
      },
    ]),
  ],
  controllers: [MembersController],
  providers: [MemberService],
})
export class MemberModule {}
