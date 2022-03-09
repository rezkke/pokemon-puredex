export interface IPokemon {
  url: string;
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  species: {
    name: string;
    url: string;
  };
  types: {
    type: {
      name: string;
    };
    slot: number;
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface ISpecies {
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  habitat?: {
    name: string;
  };
  capture_rate: number;
  flavor_text_entries: {
    flavor_text: string;
  };
  base_happiness: number;
}

export interface IEvolutions {
  chain: IChain;
  id: number;
}

export interface IChain {
  species: {
    name: string;
    url: string;
  };
  evolves_to: IEvolutions[];
}
