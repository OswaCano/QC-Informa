import {Controller, Post, Get, UseGuards, Req} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LocalGuard} from "../guards/local.guard";
import {Request} from "express";
import {JwtAuthGuard} from "../guards/jwt.guard";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService)  {
    }

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req: Request) {
        return req.user;
    }

    /*async login(@Body() payload: AuthPayloadDto) {
        const token = await this.authService.validateUser(payload);
        return { access_token: token };
    }
    Lo hace manualmente
    */

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request) {
        console.log(req.user);
        return req.user;
    }
}
