import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
        return createCardDto
    }

    @Patch(':id')
    update(
        @Body() car: any,
        @Param('id', ParseIntPipe) id: number
    ){
        return car
    }

    @Delete(':id')
    delete(
        @Param('id', ParseIntPipe) id: number
    ){
        return true
    }

}
