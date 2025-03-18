import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
//import {MongooseModule} from '@nestjs/mongoose';
//import {Post, PostSchema} from "../schemas/post.schema";
import { TypeOrmModule } from '@nestjs/typeorm';
import {Post} from "../schemas/post.schema";

@Module({
  /*imports: [
      MongooseModule.forFeature([
          {
            name: Post.name, schema: PostsSchema
          },
    ]),
  ],
  */
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})

export class PostsModule {}
