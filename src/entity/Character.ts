import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Character extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  height: string;

  @Field()
  @Column()
  mass: string;
}
