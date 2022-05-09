import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository'

@Injectable({ scope: Scope.REQUEST })
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    @InjectMapper() private mapper: Mapper,
    private readonly logger: Logger,
    ) {
      this.logger = new Logger(ProductService.name);
    }

  create(createProductDto: CreateProductDto) {
    const product = this.mapper.map(
      createProductDto,
      CreateProductDto,
      Product, 
    );
    return this.productRepository.create(product);
  }

  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  findByCategory(category: string) {
    return this.productRepository.findByCategory(category);
  }

  findByTitle(title: string) {
    return this.productRepository.findByTitle(title);
  }

  findWithStock(id: number) {
    return this.productRepository.findWithStock(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}