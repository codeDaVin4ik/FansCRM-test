import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './model/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/createUser.dto';
import { hash } from 'bcrypt'


@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userModel: typeof User){}


    async getUserById(id: string) {
        const user = await this.userModel.findOne({where: { id }, attributes: {exclude: ['password']}}) 
        if(user != null){
            return user
        }
        throw new BadRequestException('User not found');
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.findAll({attributes: { exclude: ['password'] }});
        return users;
    }

    async getUserByEmail(email: string): Promise<User>{
        const user = await this.userModel.findOne({where: {email}});
        return user;
    }

    async createUser(createUser: CreateUserDto): Promise<User> {
        const user = await this.userModel.findOne({where: { email: createUser.email }});
        if(!user){
            createUser.password = await hash(createUser.password, 10)
            return await this.userModel.create(createUser)
        }
        throw new BadRequestException({ message: "User with such email already exist"});
    }
}
