import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
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
        @Param('id', ParseIntPipe) id: number
    ){
        return this.carService.findById(id);
    }

    @Post()
    create(
        @Body() car: any
    ){
        return car
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
