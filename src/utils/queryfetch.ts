import { match } from "assert";
import axios, { AxiosResponse } from "axios";

import { IQueryProps } from "../utils/query.t";

export async function fetchData(userQuery: {
  season: number;
  episode: number;
}): Promise<any> {
  const query: string = `S0${userQuery.season}E${
    userQuery.episode > 10 ? userQuery.episode : `0${userQuery.episode}`
  }`;

  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");

  const match: IQueryProps = data.results.reduce(
    (acc: IQueryProps, crr: IQueryProps) => {
      if (crr.episode === query) {
        acc = crr;
      }
      return acc;
    },
    {}
  );

  return match;
}

export async function fetchCharacters() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return data;
}
