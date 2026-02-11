import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/core/database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
