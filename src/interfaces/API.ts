export interface APIEnpointData {
  name: string;
  url: string;
}

export interface HistoryData {
  name: string;
  id: number;
}

export interface EvoultionItem {
  evolves_to?: EvoultionItem[];
  species: APIEnpointData;
}

export interface EvoultionResponse {
  chain: EvoultionItem;
}

export interface SpeciesResponse {
  id: number;
  evolution_chain: APIEnpointData;
}

export interface LocationItem {
  location_area: APIEnpointData;
}
export interface ColorItem {
  version: APIEnpointData;
}

export interface MoveItem {
  move: APIEnpointData;
}

export interface FormItem {
  form: APIEnpointData;
}

export interface AblityItem {
  ability: APIEnpointData;
}
export interface PokemonResponse {
  abilities: AblityItem[];
  game_indices: ColorItem[];
  moves: MoveItem[];
  forms: APIEnpointData[];
  types: TypeItem[];
  species: APIEnpointData;
  base_experience: number;
  location_area_encounters: string;
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface TypeItem {
  slot: number;
  type: APIEnpointData;
}
