import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../schemas/user.schema";
import {CreateUserDto} from "../dto/createUser.dto";
import {UpdateUserDto} from "../dto/updateUser.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    findAll() {
        return this.userRepository.find();
    }

    async create(user: CreateUserDto) {
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }

    async findOne(id: number) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async deleteOne(id: number) {
        return await this.userRepository.delete(id);
    }

    async updateOne(id: number, user: UpdateUserDto) {
        await this.userRepository.update(id, user);
        return await this.findOne(id);
    }
}
