import characters from '../data/characters';

const characterModel: CharacterModel = {
  find(): Character[] {
    return characters;
  },
};

export default characterModel;
