import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServise: AuthService){}

    @Post('login')
    async signIn(@Body() signInDto: SignInDto){
        return await this.authServise.signIn(signInDto);
    }
}
