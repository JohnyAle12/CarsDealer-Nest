import { IsString, MinLength } from "class-validator"

export class CreateCarDto {
    @IsString({
        message: 'La propiedad brand debe ser un string'
    })
    public readonly brand: string

    @IsString()
    @MinLength(3)
    public readonly model: string
}