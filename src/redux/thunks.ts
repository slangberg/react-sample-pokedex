import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getEvoultions,
  getLocations,
  getPokemon,
  getSpecies,
} from "../services/PokeService";
import { populateExtraData, setPokemon } from "./global";

export const getPokemonThunk = createAsyncThunk(
  "getPokemonThunk",
  async (name: string, { dispatch }) => {
    try {
      const pokemon = await getPokemon(name);
      const species = await getSpecies(pokemon.id);
      const evoultions = await getEvoultions(species.evolution_chain.url);
      const locations = await getLocations(pokemon.location_area_encounters);
      dispatch(setPokemon(pokemon));
      dispatch(populateExtraData({ species, evoultions, locations }));
    } catch (_error) {
      console.error(_error);
    }
  }
);
