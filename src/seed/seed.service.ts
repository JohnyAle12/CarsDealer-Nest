import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { carSeed, brandsSeed } from './data';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

    constructor(
        private readonly carsService: CarsService,
        private readonly brandsService: BrandsService
    ){}

    populateDB() {
        this.carsService.fillCarsWithSeedData(carSeed)
        this.brandsService.fillBrandsWithSeedData(brandsSeed)
        return 'Seed executed successfully';
    }
}
