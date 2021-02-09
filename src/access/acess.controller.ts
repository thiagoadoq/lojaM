import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { User } from 'src/users/user';
import { UsersService } from 'src/users/users.service';

import * as bcrypt from 'bcrypt';

@Controller('login')
export class AcessController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async login(@Body() userDto: User): Promise<User> {
    const user = await this.usersService.getByEmail(userDto.email);

    const userPassword = await bcrypt.compare(userDto.password, user.password);

    if (userPassword && user.email == userDto.email) {
      return user;
    } else
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Email ou senha incorreto!',
        },
        HttpStatus.BAD_REQUEST,
      );
  }
}
