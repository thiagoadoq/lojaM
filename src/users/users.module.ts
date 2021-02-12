import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AcessController } from 'src/access/acess.controller';
import { DashboardController } from 'src/dashboard/dashboard.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],

  controllers: [UsersController, AcessController],
  providers: [UsersService],
})
export class UsersModule {}
