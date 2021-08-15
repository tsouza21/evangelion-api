export default class CharacterService {
  private characterModel: CharacterModel;

  constructor(characterModel: CharacterModel) {
    this.characterModel = characterModel;
  }

  public find(): Character[] {
    return this.characterModel.find();
  }
}
