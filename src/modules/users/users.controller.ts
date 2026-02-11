import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/exception.filter';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UsersController {
    constructor(private readonly UsersService:UsersService){}
    
    @Post()
    createUser(@Body() payload:CreateUserDto){
        
        return this.UsersService.createUser(payload)
    }

    @Get()
    getAllUser(){
        return this.UsersService.getAllUser()
    }

    @Get("single/:id")
    getOneUser(@Param("id",ParseIntPipe) id : number){
        return this.UsersService.getOneUser(id)
    }


    @Put("update/:id")
    updateUser(@Param("id",ParseIntPipe) id : number,@Body() payload:UpdateUserDto){
        if(!id){
            throw new NotFoundException("User not found :(")
        }

        return this.UsersService.updateUser(id,payload)
    }


    @Delete("delete/:id")
    deleteUser(@Param("id",ParseIntPipe) id : number){
            return this.UsersService.deleteUser(id)
    }

}
