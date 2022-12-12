import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Request, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto/users.dto';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
// const bcrypt = require("bcrypt");

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService, private readonly authService: AuthService) { };

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async getUser(@Request() req): Promise<any> {
        console.log(req.user);
        
        return await this.authService.login(req.user)
    }

    
    @Post('/registro')
    async create(@Body() body: UsersDto): Promise<any> {   
        //  body.password = bcrypt.hashSync(body.password, 10)
        return await this.usersService.create(body);    
    }








}
