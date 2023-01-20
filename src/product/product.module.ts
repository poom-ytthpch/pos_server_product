import { Module, CacheModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaService } from 'src/common/prisma/prisma.service';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      url: "http://localhost",
      port: 6379
    }),
  ],
  providers: [PrismaService, ProductResolver, ProductService]
})
export class ProductModule { }
