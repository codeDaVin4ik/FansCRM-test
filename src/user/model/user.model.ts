import { Exclude } from 'class-transformer';
import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number 
    
    @Column
    username: string;

    @Column({
        unique: true
    })
    email: string;

    @Column
    phone: string;

    @Exclude()
    @Column
    password: string;
}


