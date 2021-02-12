import { DashboardController } from './dashboard/dashboard.controller';
import { ImeModule } from './CadIME/ime.module';
import { MemberModule } from './members/member.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ImeService } from './CadIME/ime.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://thiago:13234578@agendador.f65ge.mongodb.net/loja?retryWrites=true&w=majority',
      { useFindAndModify: false },
    ),
    UsersModule,
    MemberModule,
    ImeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
