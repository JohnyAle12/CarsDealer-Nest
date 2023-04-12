import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuidv4 } from 'uuid';

export const carSeed: Car[] = [
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
    },
    {
        id: uuidv4(),
        brand: 'Bmw',
        model: 'M4s'
    },
]