import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AcessController } from 'src/access/acess.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  exports: [UsersService],
  controllers: [UsersController, AcessController],
  providers: [UsersService],
})
export class UsersModule {}
