import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'models/product.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Nombre del archivo de la base de datos SQLite
      entities: [Product],
      synchronize: true, // Sincroniza las entidades con la base de datos (solo para desarrollo)
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
