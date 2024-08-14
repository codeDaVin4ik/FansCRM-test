import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/model/user.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([User]), 
  JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '3600s' },
  }),],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class AuthModule {}
