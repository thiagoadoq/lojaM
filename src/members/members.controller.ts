import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Member } from './member';
import { MemberService } from './member.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MemberService) {}

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
}
