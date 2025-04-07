import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import  {AuthPayloadDto} from "../dto/auth.dto";
import {User} from "../schemas/user.schema";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async validateUser({username, password} : AuthPayloadDto ){
        const user = await this.userRepository.findOne({ where :{ username } });

        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Contraseña incorrecta');
        }

        const payload = { id: user.id, username: user.username };
        return this.jwtService.sign(payload);
    }

}
