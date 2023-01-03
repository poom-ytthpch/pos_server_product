import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Module({
  providers: [PrismaService, ProductResolver, ProductService]
})
export class ProductModule { }
