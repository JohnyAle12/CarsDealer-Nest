import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
    private cars: Car[] = []

    findAll(){
        return this.cars
    }

    findById(id: string){
        const car = this.cars.find(car => car.id === id)

        if(!car){
            throw new NotFoundException(`Not Found Car ID ${id} Resource`)
        }

        return car
    }

    create(createCarDto: CreateCarDto){

        const newCar: Car = {
            id: uuidv4(),
            ...createCarDto
        }

        this.cars.push(newCar)

        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`The Car ID ${updateCarDto.id} is not valid inside the body`)

        this.cars = this.cars.map( car => {
            if(car.id === id){
                return carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
            }
            return car
        })

        return carDB;
    }

    delete(id: string){
        const carDB = this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id)
        return carDB
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }
}
