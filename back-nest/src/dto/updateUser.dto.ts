import {IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    role?: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsOptional()
    bio?: string;

}