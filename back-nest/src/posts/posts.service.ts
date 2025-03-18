/*  ### This is the service file for the posts module in MongoDB ###
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from "../schemas/post.schema";
import { Model } from 'mongoose';
import { CreatePostDto } from "../dto/createPost.dto";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

    findAll() {
        return this.postModel.find().exec();
    }

    async createPost(post: CreatePostDto) {
        const newPost = new this.postModel(post);
        await newPost.save();
        return newPost;
    }

    async findOne(id: string) {
        return this.postModel.findById(id).exec();
    }

    async deleteOne(id: string) {
        return this.postModel.findByIdAndDelete(id).exec();
    }

    async updateOne(id: string, post: Post) {
        return this.postModel.findByIdAndUpdate(id, post, {new: true}).exec();
    }
}
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../schemas/post.schema';
import { CreatePostDto } from "../dto/createPost.dto";
import { UpdatePostDto } from "../dto/updatePost.dto";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>,
    ) {}

    findAll() {
        return this.postRepository.find();
    }

    async create(post: CreatePostDto) {
        const newPost = this.postRepository.create(post);
        return await this.postRepository.save(newPost);
    }

    async findOne(id: number) {
        return await this.postRepository.findOne({ where: { id } });
    }

    async deleteOne(id: number) {
        return await this.postRepository.delete(id);
    }

    async updateOne(id: number, post: UpdatePostDto) {
        await this.postRepository.update(id, post);
        return await this.findOne(id);
    }
}