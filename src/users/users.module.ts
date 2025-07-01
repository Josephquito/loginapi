import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
