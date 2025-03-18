import {IsString, IsBoolean, IsOptional, IsNotEmpty} from 'class-validator';

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsBoolean()
    active: boolean;

    @IsString()
    @IsOptional()
    category?: string;
}