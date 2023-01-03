import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category, CreateCategoryInput, CreateProductInput } from "../types/graphql/graphql"
import * as path from 'path';
import { UploadFileInput, CreateUnitInput, Unit } from '../types/graphql/graphql';
// import { base64toFile } from 'src/common/base64toFile';
import { createWriteStream, fstat, readFile, unlink, writeFileSync } from 'fs';
import { PrismaService } from 'src/common/prisma/prisma.service';
@Injectable()


export class ProductService {

  constructor(private readonly _prismaService: PrismaService) { }

  async createCategory(createCategoryInput: CreateCategoryInput): Promise<Category> {

    const { name } = await createCategoryInput

    if (!name) throw new HttpException(
      `All input is required`,
      HttpStatus.BAD_REQUEST,
    )

    const oldCat = await this._prismaService.category.findFirst({ where: { cate_name: name } })

    if (oldCat) throw new HttpException(
      `Category name has ready name :${oldCat.cate_name}`,
      HttpStatus.BAD_REQUEST,
    )

    const res = await this._prismaService.category.create({ data: { cate_name: name } })

    return res as unknown as Category
  }

  async createUnit(createUnitInput: CreateUnitInput): Promise<Unit> {

    const { name } = createUnitInput

    if (!name) throw new HttpException(
      `All input is required`,
      HttpStatus.BAD_REQUEST,
    )


    if (await this._prismaService.unit.findFirst({ where: { unit_name: name } })) {
      throw new HttpException(
        `Unit has ready`,
        HttpStatus.BAD_REQUEST,
      )
    }

    return this._prismaService.unit.create({ data: { unit_name: name } }) as Unit
  }

  async units(): Promise<Unit[]> {
    const res = await this._prismaService.unit.findMany()
    return res as Unit[]
  }

  async categories(): Promise<Category[]> {
    const res = await this._prismaService.category.findMany()
    return res as unknown as Category[]
  }

  create(createProductInput: CreateProductInput) {
    console.log(createProductInput)

    // const buff = Buffer.from(createProductInput.file, 'base64')
    // fs.writeFileSync(createProductInput.file, buff)
    // console.log(buff)
    // const stream = fs.createReadStream()
    // stream.pipe(fs.createWriteStream(pathName))
    return 'This action adds a new product';
  }

  async uploadFile(uploadFileInput: UploadFileInput): Promise<Boolean> {
    const { file, fileName } = uploadFileInput
    // let convert = await this.base64toFile(file, fileName)

    if (file && fileName === null || '') {
      throw new HttpException(
        `All input is required`,
        HttpStatus.BAD_REQUEST,
      )
    }

    console.log({ file })
    if (file.match('base64;')) {
      const splitFileBase64 = file.split(";")

      const base64 = splitFileBase64[1].replace("base64,", '')

      const buff = Buffer.from(base64, 'base64')

      const ws = writeFileSync(`./uploads/${fileName}`, buff)

    } else {
      throw new HttpException(
        `File wrong type`,
        HttpStatus.BAD_REQUEST,
      )
    }
    console.log(Boolean(file.match('base64;')))


    // readFile(`./uploads/${fileName}`, (err, data) => {
    //   console.log({ err, data })
    //   if (data) {
    //     unlink(`./uploads/${fileName}`, () => { })
    //   }
    // })






    // fs.writeFileSync(fileName, buff)
    // console.log(convert)

    return false
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
