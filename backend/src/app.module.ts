import { ProductProfile } from './product/mappers/product.profile';
import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';

import { MongooseModule } from '@nestjs/mongoose';
import { classes } from '@automapper/classes';
import { CamelCaseNamingConvention } from '@automapper/core';
import { AutomapperModule } from '@automapper/nestjs';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/techtunnel'),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
      namingConventions: new CamelCaseNamingConvention(),
    }), ProductModule,
    AuthModule,
    UsersModule, 
    ProductModule,
  ],  
  controllers: [],
  exports: [],
  providers: [ProductProfile],
})
export class AppModule {}