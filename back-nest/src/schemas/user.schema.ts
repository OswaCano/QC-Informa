import {Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert} from "typeorm";
import { Post } from "./post.schema";
import * as bcrypt from 'bcrypt';

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

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
}