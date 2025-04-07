import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
//import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      //MongooseModule.forRoot('mongodb://localhost/postsdb'),
      ConfigModule.forRoot(), //carga las variables de entorno

      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              type: 'postgres',
              host: configService.get<string>('SUPABASE_HOST'),
              port: configService.get<number>('SUPABASE_PORT', 5432),
              username: configService.get<string>('SUPABASE_USER'),
              password: configService.get<string>('SUPABASE_PASSWORD'),
              database: configService.get<string>('SUPABASE_DB'),
              entities: [__dirname + '/**/*.entity{.ts,.js}'],
              autoLoadEntities: true, // Carga automática de entidades
              synchronize: true, // Solo en desarrollo, NO en producción
          }),
      }),

      PostsModule,
      UsersModule,
      AuthModule,
  ],
})
export class AppModule {}
