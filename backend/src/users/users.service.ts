import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  //usuario será criado e injetado no banco
  constructor(     
    private readonly usersRepository: UsersRepository, 
    @InjectMapper() private mapper: Mapper, 
    private readonly logger: Logger,
    ) {
      this.logger = new Logger(UsersService.name);
  }
  //criação do usuário
  create(createUserDto: CreateUserDto) {    
    const user = this.mapper.map(
      createUserDto,
      CreateUserDto,
      User, 
    );
    return this.usersRepository.create(user);
  }
    
  //retornar tudo ao fazer um get
  findAll() {
    return this.usersRepository.findAll();
  }
  //retornar por um id específico
  findOne(id: number) {
    this.logger.log(`Buscando usuario no repositorio por id: ${id}`);
    return this.usersRepository.findOne(id);
  }
  //buscar por name 
  findByName(name: string) {
    this.logger.log(`Buscando usuario no repositorio por name: ${name}`);
    return this.usersRepository.findByName(name);
  }
  //buscar por email 
  findByEmail(email: string) {
    this.logger.log(`Buscando usuario no repositorio pelo email: ${email}`);
    return this.usersRepository.findByEmail(email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.logger.log(`Removendo usuario com o id: ${id}`);
    return `This action removes a #${id} user`;
  }
}