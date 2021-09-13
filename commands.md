mutation {
  addCharacter(
    name: "luke"
    mass: "70"
    height: "170"
  ) {
    id
    name
    mass
    height
  }
}
mutation($deleteCharacterById: String!){
  deleteCharacterById(characterId: $deleteCharacterById) {
    id
  }
}
