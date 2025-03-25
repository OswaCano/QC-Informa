import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode} from '@nestjs/common';
import { UsersService } from "./users.service";
import { CreateUserDto } from "../dto/createUser.dto";
import { UpdateUserDto } from "../dto/updateUser.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    @Post()
    async create(@Body() body: CreateUserDto) {
        try {
            return await this.usersService.create(body);
        } catch (error) {
            if (error.code === '11000') {
                throw new ConflictException('User already exists');
            }
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteOne(@Param('id') id: number) {
        const user = await this.usersService.deleteOne(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    @Put(':id')
    async updateOne(@Param('id') id: number, @Body() body: UpdateUserDto) {
        const user = await this.usersService.updateOne(id, body);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
