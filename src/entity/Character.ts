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

  @Field()
  @Column()
  hair_color: string;

  @Field()
  @Column()
  skin_color: string;

  @Field()
  @Column()
  eye_color: string;

  @Field()
  @Column()
  birth_year: string;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column()
  homeworld: string;

  @Field(() => [String])
  @Column('text', { array: true })
  films: Array<string>;

  @Field(() => [String])
  @Column('text', { array: true })
  species: Array<string>;

  @Field(() => [String])
  @Column('text', { array: true })
  vehicles: Array<string>;

  @Field(() => [String])
  @Column('text', { array: true })
  starships: Array<string>;

  @Field()
  @Column()
  created: Date;

  @Field()
  @Column()
  edited: Date;
}
