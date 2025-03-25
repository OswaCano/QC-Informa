import {IsNotEmpty, IsString, IsOptional} from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
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