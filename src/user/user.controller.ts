import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { JwtAuthGuard } from 'src/guards/jwtAuthGuard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(){
    return this.userService.getAllUsers()
  }

  
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getUser(@Param('id') userId: string){
    return this.userService.getUserById(userId);
  }

  @Post()
  createUser(@Body(new ValidationPipe({ transform: true })) createUser: CreateUserDto){
    return this.userService.createUser(createUser);
  }
}
