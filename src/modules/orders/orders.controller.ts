import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private orderService : OrdersService){}

    @Post()
    createOrder(@Body() payload : any){
        return this.orderService.createOrder(payload)
    }
}
