import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // el UsePipes se puede usar a nivel de controlador y a nievel de metodo, como a nivel global, ver main.ts
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ){}

    @Get()
    getAll(){
        return this.carService.findAll()
    }

    @Get(':id')
    getById(
        @Param('id', new ParseUUIDPipe({
            version: '4'
        })) id: string
    ){
        return this.carService.findById(id);
    }

    @Post()
    create(
        @Body() createCardDto: CreateCarDto
    ){
        return this.carService.create(createCardDto)
    }

    @Patch(':id')
    update(
        @Body() updateCarDto: UpdateCarDto,
        @Param('id', ParseUUIDPipe) id: string
    ){
        return this.carService.update(id, updateCarDto)
    }

    @Delete(':id')
    delete(
        @Param('id', ParseUUIDPipe) id: string
    ){
        return this.carService.delete(id)
    }

}
