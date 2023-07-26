import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from 'models/product.entity';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.appService.findOne(id);
  }

  @Post()
  create(@Body() product: Product): Promise<Product> {
    return this.appService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: Product): Promise<Product> {
    return this.appService.update(id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.appService.delete(id);
  }




}
