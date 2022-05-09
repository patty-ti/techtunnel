import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductRepository {  

  constructor(@InjectModel(Product.name) private readonly collection: Model<Product>) {
    
  }  
  products: Product[] = [
    {
      id: 1,
      title: "Televisão 50 polegadas",      
      description: "Televisor de última geração",
      price: 5000,
      category: "electronic",
      imageUrl: "http://google.com",
      createdDate: new Date(),
      updatedDate: new Date(),
    },
  ];
  create(product: Product) {
    this.collection.insertMany(this.products);
    return JSON.stringify(product);
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(product => product.id === id);
  }

  findByCategory(category: string) {
    return this.products.find(product => product.category === category);
  }

  findByTitle(title: string) {
    return this.products.find(product => product.title === title);
  }

  findWithStock(id: number) {
    return this.products.find(product => product.id === id);
  }

  update(id: number, product: Product) {
    return JSON.stringify(product);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
