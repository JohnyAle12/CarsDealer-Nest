import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuidv4(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    }
  ]

  create({ name }: CreateBrandDto) {
    const newBrand: Brand = {
        id: uuidv4(),
        name: name.toLowerCase(),
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
    }

    this.brands.push(newBrand)

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if(!brand){
        throw new NotFoundException(`Not Found Brand ID ${id} Resource`)
    }
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map( brand => {
        if(brand.id === id){
            return brandDB = {
                ...brandDB,
                ...updateBrandDto,
                updatedAt: new Date().getTime(),
                id
            }
        }
        return brand
    })

    return brandDB;
  }

  remove(id: string) {
    const brandDB = this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id)
    return brandDB
  }
}
