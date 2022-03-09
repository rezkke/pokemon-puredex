import axios from "axios";
import { IPokemon, ISpecies, IEvolutions } from "@features/types";

class createApiCall {
  http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      "Content-type": "application/json",
    },
  });

  async getMultiplePokemons(
    limit: number,
    offset: number
  ): Promise<IPokemon[]> {
    const { data } = await this.http.get(
      `pokemon?limit=${limit}&&offset=${offset}`
    );

    return data.results;
  }

  async getPokemon(name: string | number): Promise<IPokemon> {
    const { data } = await this.http.get(`pokemon/${name}`);

    return data;
  }

  async getPokemonSpecies(name: string | number): Promise<ISpecies> {
    const { data } = await this.http.get(`pokemon-species/${name}`);

    return data;
  }

  async getEvolutionChain(id: string | number): Promise<IEvolutions> {
    const { data } = await this.http.get(`evolution-chain/${id}`);

    return data;
  }
}

export const apiClient = new createApiCall();
