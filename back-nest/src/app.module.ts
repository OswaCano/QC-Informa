import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
//import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      //MongooseModule.forRoot('mongodb://localhost/postsdb'),
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.SUPABASE_HOST,
          port: Number(process.env.SUPABASE_PORT) || 5432,
          username: process.env.SUPABASE_USER,
          password: process.env.SUPABASE_PASSWORD,
          database: process.env.SUPABASE_DB,
          autoLoadEntities: true, // Carga automática de entidades
          synchronize: true, // Solo en desarrollo, NO en producción
      }),
      PostsModule,
      UsersModule
  ],
})
export class AppModule {}
