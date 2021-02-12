import { Controller, Get } from '@nestjs/common';
import { Member } from 'src/members/member';
import { MemberService } from 'src/members/member.service';

@Controller('dashbord')
export class DashboardController {
  constructor(private readonly membersService: MemberService) {}

  @Get()
  async getTotalmember(): Promise<any> {
    const coutTridade = await this.membersService.getCoutCodenacao();

    return coutTridade;
  }
}
