import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {  

  constructor(@InjectModel(User.name) private readonly collection: Model<User>) {
    
  }  
  users: User[] = [
    {
      id: 2,
      name: "Teste",
      email: "teste@teste.com",
      password: "654321",
      deleted: false
    },
  ];
  create(user: User) {
    this.collection.insertMany(this.users);
    return JSON.stringify(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }  

  findByName(name: string) {
    return this.users.find(user => user.name === name);
  }

  findByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  update(id: number) {
    return JSON.stringify(id);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
