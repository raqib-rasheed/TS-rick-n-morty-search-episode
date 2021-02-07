export type IQueryProps = {
  air_date: string;
  created: Date;
  episode: string;
  name: string;
  characters: string[];
};

export interface TQuery {
  query: {
    season: number;
    episode: number;
  };
}

export type ICharacterQueryProps = {
  air_date: string;
  created: Date;
  episode: string;
  name: string;
  characters: Character;
};

export type Character = {
  image: string;
  name: string;
}[];
