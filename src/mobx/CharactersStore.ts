import { makeAutoObservable } from 'mobx';

const apiUrl = 'https://rickandmortyapi.com/api/character';

export enum ECharacterStatus {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

export type TCharacterLocation = {
  name: string;
  url: string;
};

export enum ECharacterSpecies {
  HUMAN = 'Human',
  ALIEN = 'Alien',
}

export enum ECharacterGender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export type TCharacterType = {
  id: number;
  url: string;
  name: string;
  status: ECharacterStatus;
  image: string;
  type: string;
  species: ECharacterSpecies;
  episode: string[];
  gender: ECharacterGender;
  location: TCharacterLocation;
  origin: TCharacterLocation;
};

export type TDataType = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: TCharacterType[];
};

class CharactersStore {
  public data: TDataType | undefined;

  public isLoadingData = false;

  constructor() {
    makeAutoObservable(this);

    this.loadData(apiUrl);
  }

  public loadData(url: string | null | undefined) {
    if (url === null || !url) {
      return;
    }

    this.isLoadingData = true;

    fetch(url).then((response) => {
      response
        .json()
        .then((data) => {
          this.data = data;
        })
        .finally(() => {
          this.isLoadingData = false;
        });
    });
  }
}

export default new CharactersStore();
