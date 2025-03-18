import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Post } from "./post.schema";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column()
    bio: string;

    @Column()
    image: string;

    @Column()
    role: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
}