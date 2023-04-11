import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuidv4(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuidv4(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuidv4(),
            brand: 'Jeep',
            model: 'Cheroke'
        }
    ]

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
}
