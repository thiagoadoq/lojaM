import {
  Injectable,
  UnauthorizedException,
  ValidationPipe,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { strict } from 'assert';
import { Strategy } from 'passport-local';
import { stringify } from 'querystring';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private outhService: AuthService) {
    super({
      userNameField: 'email',
      passwordField: 'password',
    });
  }

  async Validation(email: string, password: string): Promise<any> {
    const user = await this.outhService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
