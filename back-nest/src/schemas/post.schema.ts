/*          #### MongoDB Schema ####
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
})
export class Post {
    @Prop({
        required: true,
        trim: true,
    })
    title: string;
    @Prop({
        trim: true,
        required: true,
        })
    content: string;
    @Prop({
        trim: true,
        })
    image: string;
    @Prop({
        default: true,
    })
    active: boolean;
    userId: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
 */

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.schema";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    content: string;

    @Column({ type: "varchar" , nullable: true})
    category: string; // "basura", "ecológico", etc.

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column()
    image: string;

    @Column()
    active: boolean;

   @ManyToOne(() => User, (user) => user.posts)
    user: User;
}