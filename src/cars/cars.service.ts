import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cheroke'
        }
    ]

    findAll(){
        return this.cars
    }

    findById(id: number){
        const car = this.cars.find(car => car.id === id)

        if(!car){
            throw new NotFoundException(`Not Found Car ID ${id} Resource`)
            // throw new HttpException('Not Found Car Resource', HttpStatus.NOT_FOUND);
        }

        return car
    }
}
