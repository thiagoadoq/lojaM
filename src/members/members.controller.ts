import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Member } from './member';
import { MemberService } from './member.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MemberService) {}

  @Get()
  async listarTodos(): Promise<Member[]> {
    return this.membersService.listarTodos();
  }

  @Get(':id')
  async buscarPorId(@Param('id') _id: string): Promise<Member> {
    return this.membersService.buscarPorId(_id);
  }

  @Get('/email/:email')
  async buscarPorEmail(@Param('email') email: string): Promise<Member> {
    const userEmail = await this.membersService.getByEmail(email);

    if (userEmail) {
      return userEmail;
    } else
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Email do obreiro não encontrado!',
        },
        HttpStatus.BAD_REQUEST,
      );
  }

  //Ver se esta validando loopcase
  @Get('/name/:name')
  async buscarPorNome(@Param('name') nomeUser: string): Promise<Member> {
    const userName = await this.membersService.getByName(nomeUser);
    if (userName) {
      return userName;
    } else
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Nome do obreiro não encontrado!',
        },
        HttpStatus.BAD_REQUEST,
      );
  }

  @Get('/cpf/:cpf')
  async buscarPorCpf(@Param('cpf') cpf: string): Promise<Member> {
    const userCpf = await this.membersService.getByCpf(cpf);

    if (userCpf) {
      return userCpf;
    } else
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'CPF do obreiro não encontrado!',
        },
        HttpStatus.BAD_REQUEST,
      );
  }

  @Post()
  async criar(@Body() member: Member): Promise<Member> {
    return await this.membersService.criar(member);

    // const userDto = await this.userSevice.getByEmail(member.email);

    // if (!userDto) {

    //   return await  this.membersService.criar(Member);

    // } else
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.BAD_REQUEST,
    //       error: 'Email já cadastrado na nossa base!',
    //     },
    //     HttpStatus.BAD_REQUEST,
    //   );
  }

  @Put(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() memberAtualizado: Member,
  ): Promise<Member> {
    return this.membersService.atualizar(id, memberAtualizado);
  }
}
