
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateProductInput {
    exampleField?: Nullable<number>;
}

export class UpdateProductInput {
    id: number;
}

export class UploadFileInput {
    file?: Nullable<string>;
    fileName?: Nullable<string>;
}

export class CreateUnitInput {
    name?: Nullable<string>;
}

export class CreateCategoryInput {
    name?: Nullable<string>;
}

export class Product {
    exampleField?: Nullable<number>;
    p_id?: Nullable<string>;
    p_name?: Nullable<string>;
    p_image?: Nullable<string>;
    cate_id?: Nullable<string>;
    p_status?: Nullable<boolean>;
    unit_id?: Nullable<number>;
    unit_in_stock?: Nullable<number>;
    unit_price?: Nullable<number>;
    cost_price?: Nullable<number>;
    user_id?: Nullable<string>;
    createAt?: Nullable<Date>;
    updateAt?: Nullable<Date>;
}

export class Category {
    cate_id?: Nullable<string>;
    cate_name?: Nullable<string>;
}

export class Unit {
    unit_id?: Nullable<number>;
    unit_name?: Nullable<string>;
}

export abstract class IQuery {
    abstract units(): Nullable<Nullable<Unit>[]> | Promise<Nullable<Nullable<Unit>[]>>;

    abstract categories(): Nullable<Nullable<Category>[]> | Promise<Nullable<Nullable<Category>[]>>;

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract createUnit(createUnitInput: CreateUnitInput): Unit | Promise<Unit>;

    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract uploadFile(uploadFileInput?: Nullable<UploadFileInput>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
