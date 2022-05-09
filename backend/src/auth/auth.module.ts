import { Logger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Auth } from './entities/auth.entity';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from 'src/product/infra/schemas/auth.schema';

@Module({
  imports: [UsersModule, JwtModule.register ({
    secret: 'ecommercetechtunnel', //esse será o token secreto, colocar um token que seja de segurança alta, dificil de adivinharem
    signOptions: { expiresIn: '60s' }, //tempo para o token expirar
  }),
  MongooseModule.forFeature([
    {
      name: Auth.name,
      schema: AuthSchema,        
    }
  ])    
],
  controllers: [AuthController],
  exports: [JwtStrategy, Logger],
  providers: [AuthService, JwtStrategy, Logger],
})
export class AuthModule {}
