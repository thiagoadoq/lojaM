import { AcessController } from './access/acess.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://thiago:13234578@agendador.f65ge.mongodb.net/loja?retryWrites=true&w=majority',
    ), // Insira aqui a string de conexão do MongoDB
    UsersModule,
  ],
  controllers: [AcessController, AppController],
  providers: [AppService],
})
export class AppModule {}
