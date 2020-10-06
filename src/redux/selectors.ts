import {
  AblityItem,
  APIEnpointData,
  ColorItem,
  EvoultionItem,
  LocationItem,
  MoveItem,
  PokemonResponse,
  TypeItem,
} from "../interfaces/API";

export const cleanNames = (name: string) => {
  return name.replace(/-/gi, " ");
};

export interface EncounterItem {
  location_area: APIEnpointData;
}

export const getEncounters = (ecounters: EncounterItem[]) => {
  return ecounters.map((d: EncounterItem) => cleanNames(d.location_area.name));
};

const parseEvs = (items: EvoultionItem[]): APIEnpointData[] => {
  let names: APIEnpointData[] = [];
  items.map((item) => {
    names.push(item.species);
    if (item.evolves_to?.length) {
      names = [...names, ...parseEvs(item.evolves_to)];
    }
  });
  return names;
};
export const flattenEvoultions = (rsp: {
  chain: EvoultionItem;
}): APIEnpointData[] => {
  const { chain } = rsp;
  return parseEvs([chain]);
};


export const getTypes = (pokemon: PokemonResponse) => {
  return pokemon.types.map((d: TypeItem) => cleanNames(d.type.name));
};

export const getAbilities = (pokemon: PokemonResponse) => {
  return pokemon.abilities.map((d: AblityItem) => cleanNames(d.ability.name));
};

export const getColors = (pokemon: PokemonResponse): string[] => {
  const { game_indices } = pokemon;
  return game_indices.map((d: ColorItem) => cleanNames(d.version.name));
};

export const getMoves = (pokemon: PokemonResponse): string[] => {
  const { moves } = pokemon;
  return moves.map((d: MoveItem) => cleanNames(d.move.name));
};

export const getAPIDataNames = (data: APIEnpointData[]): string[] => {
  return data.map((d: APIEnpointData) => cleanNames(d.name));
};

export const getVarietes = (pokemon: PokemonResponse): string[] => {
  const { forms } = pokemon;
  return forms.map((d: APIEnpointData) => cleanNames(d.name));
};

export const getImage = (pokemon: PokemonResponse): string => {
  const { sprites } = pokemon;
  return sprites.other["official-artwork"].front_default;
};
