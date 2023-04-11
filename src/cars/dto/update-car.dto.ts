import { IsOptional, IsString, IsUUID, MinLength } from "class-validator"

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    public readonly id?: string

    @IsString({
        message: 'La propiedad brand debe ser un string'
    })
    @IsOptional()
    public readonly brand?: string

    @IsString()
    @MinLength(3)
    @IsOptional()
    public readonly model?: string
}