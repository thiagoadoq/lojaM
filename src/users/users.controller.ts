import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Put,
} from '@nestjs/common';
import { User } from './user';
import { UsersService } from './users.service';

import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async listarTodos(): Promise<User[]> {
    return this.usersService.listarTodos();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<User> {
    return this.usersService.buscarPorId(id);
  }

  @Get('/email/:email')
  async buscarPorEmail(@Param('email') email: string): Promise<User> {
    return this.usersService.getByEmail(email);
  }

  //Ver se esta validando loopcase
  @Get('/name/:name')
  async buscarPorNome(@Param('name') name: string): Promise<User> {
    return this.usersService.getByName(name);
  }

  @Get('/cpf/:cpf')
  async buscarPorCpf(@Param('cpf') cpf: string): Promise<User> {
    return this.usersService.getByCpf(cpf);
  }

  @Post()
  async criar(@Body() user: User): Promise<User> {
    const userDto = await this.usersService.getByEmail(user.email);

    if (!userDto) {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(user.password, saltOrRounds);
      user.password = hash;
      return this.usersService.criar(user);
    } else
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Email já cadastrado na nossa base!',
        },
        HttpStatus.BAD_REQUEST,
      );
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() userAtualizado: User,
  ): Promise<User> {
    return this.usersService.atualizar(id, userAtualizado);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<User> {
    return this.usersService.remover(id);
  }
}
