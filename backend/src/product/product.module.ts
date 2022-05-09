import { Logger, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductProfile } from './mappers/product.profile';
import { Product } from './entities/product.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './infra/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,        
      }
    ])    
  ],
  controllers: [ProductController],
  providers: [ProductProfile, ProductService, ProductRepository, Logger]
})
export class ProductModule {}