import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from "../schemas/user.schema";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import * as process from "node:process";
import {LocalStrategy} from "../strategies/local.strategy";
import {JwtStrategy} from "../strategies/jwt.strategy";

@Module({
  imports: [
      TypeOrmModule.forFeature([User]),
      PassportModule,
      JwtModule.register({
        secret: process.env.JWT_SECRET || 'supersecret',
        signOptions: { expiresIn: '1h'},
      }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})

export class AuthModule {}
