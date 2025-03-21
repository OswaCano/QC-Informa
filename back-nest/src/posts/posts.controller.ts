import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode} from '@nestjs/common';
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
    async findOne(@Param('id') id: number) {
        const post = await this.postsService.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }

    @Post()
    async create(@Body() body: CreatePostDto) {
        try {
            return  await this.postsService.create( body );
        } catch (error) {
            if (error.code === '11000') {
                throw new ConflictException('Post already exists');
            }
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteOne(@Param('id') id: number) {
        const post = await this.postsService.deleteOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }

    @Put(':id')
    async updateOne(@Param('id') id: number, @Body() body: UpdatePostDto) {
        const post = await this.postsService.updateOne(id, body);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }
}
