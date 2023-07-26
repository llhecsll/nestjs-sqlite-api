import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'models/product.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id, product: Product): Promise<Product> {
    await this.productRepository.update(id, product);
    return this.productRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }


}
