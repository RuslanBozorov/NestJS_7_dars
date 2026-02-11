import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private readonly prisma : PrismaService){}
    async createUser(payload:CreateUserDto){
        await this.prisma.user.create({
            data:payload
        })

        return {
            success:true,
            message:"Created"
        }
    }

    async getAllUser(){
        return this.prisma.user.findMany({select:{id:true,fullname:true,orders:true}})
    }


    async getOneUser(id : number){
        const user = await this.prisma.user.findUnique({where:{id}})
        if(!user){
            throw new NotFoundException("User not found :(")
        }
        return this.prisma.user.findUnique({where:{id},select:{id:true,fullname:true,orders:true}})
    }


    async updateUser(id : number,payload:UpdateUserDto){
        const existUser = await this.prisma.user.findUnique({where:{id}})
        if(!existUser) throw new NotFoundException("User not found :(")
        await this.prisma.user.update({where:{id},data:payload})
        return {
            success:true,
            message:"User updated :)"
        }
    }

    async deleteUser(id:number){
        const user = await this.prisma.user.findUnique({where:{id}})
        if(!user) throw new NotFoundException("User not found :(")
        await this.prisma.user.delete({where:{id}})
    }
}
