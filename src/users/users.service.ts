import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user)
    private readonly userRepository: Repository<user>,
  ) {}

  create(RegisterDto: RegisterDto) {
    return this.userRepository.save(RegisterDto);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
