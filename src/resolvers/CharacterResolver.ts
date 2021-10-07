import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { getRepository } from 'typeorm';
import { Character } from '../entity/Character';

@Resolver()
export class CharacterResolver {
  @Query(() => [Character])
  async characters(): Promise<Character[]> {
    return await Character.find();
  }

  @Query(() => Character!, { nullable: true })
  async findCharacterById(
    @Arg('characterId') characterId: string,
  ): Promise<Character | undefined | null> {
    return await Character.findOne(characterId);
  }

  @Mutation(() => Character)
  async addCharacter(
    @Arg('name') name: string,
    @Arg('height') height: string,
    @Arg('mass') mass: string,
    @Arg('hair_color') hair_color: string,
    @Arg('skin_color') skin_color: string,
    @Arg('eye_color') eye_color: string,
    @Arg('birth_year') birth_year: string,
    @Arg('gender') gender: string,
    @Arg('homeworld') homeworld: string,
    @Arg('films') films: Array<string>,
    @Arg('species') species: Array<string>,
    @Arg('vehicles') vehicles: Array<string>,
    @Arg('starships') starships: Array<string>,
    @Arg('created') created: Date,
    @Arg('edited') edited: Date,
  ): Promise<Character> {
    const character = await Character.create({
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      films,
      species,
      vehicles,
      starships,
      created,
      edited,
    }).save();
    return character;
  }

  @Mutation(() => Character!, { nullable: true })
  async deleteCharacterById(
    @Arg('characterId') characterId: string,
  ): Promise<Character | undefined | null> {
    const allCharacter = await getRepository(Character);
    const character = await allCharacter.findOne(characterId);
    if (character) {
      await allCharacter.delete(characterId);
      return character;
    }
    return null;
  }

  @Mutation(() => Character!)
  async updateCharacter(
    @Arg('characterId') characterId: string,
    @Arg('name') name: string,
    @Arg('height') height: string,
    @Arg('mass') mass: string,
    @Arg('hair_color') hair_color: string,
    @Arg('skin_color') skin_color: string,
    @Arg('eye_color') eye_color: string,
    @Arg('birth_year') birth_year: string,
    @Arg('gender') gender: string,
    @Arg('homeworld') homeworld: string,
    @Arg('films') films: Array<string>,
    @Arg('species') species: Array<string>,
    @Arg('vehicles') vehicles: Array<string>,
    @Arg('starships') starships: Array<string>,
    @Arg('edited') edited: Date,
  ): Promise<Character | null> {
    let character = await Character.findOne(characterId);

    if (character) {
      character.name = name;
      character.height = height;
      character.mass = mass;
      character.birth_year = birth_year;
      character.created = character.created;
      character.edited = edited;
      character.hair_color = hair_color;
      character.skin_color = skin_color;
      character.eye_color = eye_color;
      character.gender = gender;
      character.homeworld = homeworld;
      character.films = films;
      character.species = species;
      character.vehicles = vehicles;
      character.starships = starships;
      await getRepository(Character).update(characterId, character);
      return character;
    }

    return null;
  }
}
