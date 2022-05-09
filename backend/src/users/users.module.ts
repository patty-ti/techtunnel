import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/product/infra/schemas/users.schema';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
  MongooseModule.forFeature([
    {
      name: User.name,
      schema: UsersSchema,        
    }
  ])    
],
  controllers: [UsersController],
  exports: [UsersService, Logger],
  providers: [UsersRepository, UsersService, JwtStrategy, Logger],
})
export class UsersModule {}