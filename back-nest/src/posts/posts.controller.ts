import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import {CreatePostDto} from "../dto/createPost.dto";
import {UpdatePostDto} from "../dto/updatePost.dto";

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.postsService.findOne(id);
    }

    @Post()
    create(@Body() body: CreatePostDto) {
        return this.postsService.create( body );
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.postsService.deleteOne(id);
    }

    @Put(':id')
    updateOne(@Param('id') id: number, @Body() body: UpdatePostDto) {
        return this.postsService.updateOne(id, body);
    }
}
