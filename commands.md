query{
  characters {
    id
    name
    height
    mass
  }
}

query($findCharacterByIdCharacterId: String!){
  findCharacterById(characterId: $findCharacterByIdCharacterId) {
    height
  }
}

{
  "findCharacterByIdCharacterId": "613e51cb23e079482f8b426b"
}

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

{
  "deleteCharacterById": "613e8ced05853e5784809eca"
}




mutation($updateCharacterMass: String!, $updateCharacterHeight: String!, $updateCharacterName: String!, $updateCharacterCharacterId: String!){
  updateCharacter(mass: $updateCharacterMass, height: $updateCharacterHeight, name: $updateCharacterName, characterId: $updateCharacterCharacterId) {
    name
  }
}

{
  "updateCharacterMass": "80",
  "updateCharacterHeight": "190",
  "updateCharacterName": "leonardo",
  "updateCharacterCharacterId": "613e51cb23e079482f8b426b"
}
