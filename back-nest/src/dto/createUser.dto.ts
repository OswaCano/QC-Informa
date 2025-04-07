import {IsNotEmpty, IsString, IsOptional, IsEmail, MinLength} from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsString()
    @IsOptional()
    role?: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsNotEmpty()
    bio: string;

}