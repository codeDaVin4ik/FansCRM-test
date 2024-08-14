import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/signIn.dto';
import { compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(user: SignInDto): Promise<any> {
    const foundUser = await this.userService.getUserByEmail(user.email);
    if (!(await compare(user.password, foundUser.password))) {
      return new UnauthorizedException();
    }
    else {
        const payload = { sub: foundUser.id, username: foundUser.username };
        return {
            access_token: await this.jwtService.signAsync(payload, {secret: process.env.JWT_SECRET})
        }
    }
  }
}