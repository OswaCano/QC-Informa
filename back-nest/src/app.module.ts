import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type: 'postgres',
          url: process.env.DATABASE_URL,
          ssl: {
            rejectUnauthorized: false, // Importante para conexiones a Supabase
          },
          autoLoadEntities: true,
          synchronize: true, // Solo en desarrollo, NO en producción
        }),
      PostsModule,
      UsersModule
  ],
})
export class AppModule {}
