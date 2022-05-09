import { Controller, Post, Body, Logger, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

@ApiBearerAuth()
@ApiTags( 'auth' ) //ao colocar essa tag conseguimos definir um nome para a controller de forma separada e organizada no swagger
@Controller({ path: 'auth', scope: Scope.REQUEST }) //ao definir o tipo de scope, conseguimos melhorar o uso de memória
export class AuthController {
  constructor(
    private readonly usersService: UsersService, 
    private readonly jwtService: JwtService,
    private readonly logger: Logger, //devemos adicionar o logger nas controllers
  ) {
    this.logger = new Logger(AuthController.name); //ai mostrará no carregamento a estilização com colchetes amarelos-só p/ decoração
  }

  @Post()
  async login(@Body() loginDto: LoginDto) {
    this.logger.log(`Buscando usuario por email: ${loginDto?.email}`); //ao dar yarn start ele mostrará no carregamento o que está fazendo
    const user = await this.usersService.findByEmail(loginDto.email);   
    if ( user && user.password === loginDto.password ) { //se usuario foi encontrado e os dados forem identicos, ai faz login e retorna o token
      this.logger.log(`Usuario ${loginDto?.email}  encontrado e senha validada com sucesso! `);
      const payload = {
        email: user.email,
        sub: user.email,
      };     
      return { acessToken: await this.jwtService.signAsync(payload) }; 
    } 
    this.logger.error(`Erro ao buscar usuario: ${loginDto.email}. Usuario ou senha incorreto! `);
    return null;
  }
}