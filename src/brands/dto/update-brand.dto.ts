import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

// PartialType permite que se hereden los mismos atributos pero aplicandoles un Optional a cada uno
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
