import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream, writeFileSync, writeFile } from 'fs';
import { join, resolve } from 'path';
import { CreateCategoryInput, CreateUnitInput, UploadFileInput } from 'src/types/graphql/graphql';


@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) { }


  @Query('products')
  findAll() {
    return this.productService.findAll();
  }

  @Query('product')
  findOne(@Args('id') id: number) {
    return this.productService.findOne(id);
  }

  @Query('units')
  units() {
    return this.productService.units();
  }

  @Query('categories')
  categories() {
    return this.productService.categories();
  }

  @Mutation('createProduct')
  create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }

  @Mutation('createUnit')
  createUnit(@Args('createUnitInput') createUnitInput: CreateUnitInput) {
    return this.productService.createUnit(createUnitInput);
  }

  @Mutation('createCategory')
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.productService.createCategory(createCategoryInput);
  }

  @Mutation('updateProduct')
  update(@Args('updateProductInput') updateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: number) {
    return this.productService.remove(id);
  }

  @Mutation('uploadFile')
  async uploadFile(@Args('uploadFileInput') uploadFileInput: UploadFileInput): Promise<Boolean> {
    // writeFile(`${__dirname}./uploads/${filename}`,)

    return this.productService.uploadFile(uploadFileInput)

  }
}
