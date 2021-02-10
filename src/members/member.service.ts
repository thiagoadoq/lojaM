import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from './member';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
  constructor(@InjectModel('members') private memberModel: Model<Member>) {}


  async criar(member: Member): Promise<Member> {
    const newUser = new this.memberModel(member);

    return newUser.save();
  }

}
