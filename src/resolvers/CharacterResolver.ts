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

  @Mutation(() => Character!)
  async addCharacter(
    @Arg('name') name: string,
    @Arg('height') height: string,
    @Arg('mass') mass: string,
  ): Promise<Character> {
    const character = await Character.create({
      name,
      height,
      mass,
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
  ): Promise<Character | null> {
    let character = await Character.findOne(characterId);

    if (character) {
      character.name = name;
      character.height = height;
      character.mass = mass;
      await getRepository(Character).update(characterId, character);
      return character;
    }

    return null;
  }
}
