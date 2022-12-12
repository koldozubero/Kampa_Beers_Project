import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersDto } from './dto/users.dto/users.dto';
import { User, UserDocument } from './user.schema';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private usersModel: Model<UserDocument>
    ){}

    async getUsers(): Promise<User[]> {
        return await this.usersModel.find();
    }

    // async getUser(id: number): Promise<User>{
    //     return await this.usersModel.findOne({id});
    // }

    async getUser(username: string): Promise< User | undefined > {
        console.log(username);
        
        return await this.usersModel.findOne({username: username});
    }

    async create(body: UsersDto){
        let users: any = (await this.getUsers())
        let id: number = users.length > 0 ? (users[users.length - 1].id + 1) : 1     
        let newBody = {id,...body}
        await this.usersModel.collection.insertOne(newBody)
        return await this.usersModel.find()
      }

}
