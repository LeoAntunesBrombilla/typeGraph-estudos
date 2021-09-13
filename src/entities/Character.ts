import { ObjectType, Field, ID } from 'type-graphql';

import { Entity, BaseEntity, ObjectIdColumn, Column } from 'typeorm';

import { ObjectID } from 'typeorm';

@ObjectType()
@Entity()
export class Character extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectID;

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
