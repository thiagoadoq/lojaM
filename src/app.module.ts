import { MembersController } from './members/members.controller';
import { MemberModule } from './members/member.module';
import { AcessController } from './access/acess.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { MemberService } from './members/member.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://thiago:13234578@agendador.f65ge.mongodb.net/loja?retryWrites=true&w=majority',
    ), // Insira aqui a string de conexão do MongoDB
    UsersModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
