import { ObjectType, Field, ID } from 'type-graphql';

import { Entity, BaseEntity, ObjectIdColumn, Column } from 'typeorm';

import { ObjectId } from 'mongodb';

@ObjectType()
@Entity()
export class Character extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

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
