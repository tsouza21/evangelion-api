type Afiliation = 'Nerv' | 'Seele' | 'Gehirn';

interface Character {
  name: string;
  romanizedName: string;
  birthdate?: Date;
  affiliations: Afiliation[];
  height?: number;
}

interface CharacterModel {
  find(): Character[];
}
