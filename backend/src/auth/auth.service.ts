import { Scope, Injectable } from '@nestjs/common';
//se não tiver nada entre os parenteses é default, ao definir o tipo de scope, conseguimos melhorar o uso de memória
@Injectable({ scope: Scope.REQUEST })
export class AuthService {}