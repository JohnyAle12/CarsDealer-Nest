import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuidv4 } from 'uuid';

export const brandsSeed: Brand[] = [
    {
        id: uuidv4(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'Tesla',
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'BMW',
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime()
    },
]