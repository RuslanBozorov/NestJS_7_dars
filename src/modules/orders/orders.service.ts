import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';

@Injectable()
export class OrdersService {
    constructor(private prisma : PrismaService){}

    async createOrder(payload:any){
        await this.prisma.order.create({
            data:payload
        })

        return {
            success:true,
            message:"Order created"
        }
    }
}
