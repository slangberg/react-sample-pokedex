import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import {
  getEvoultions,
  getLocations,
  getPokemon,
  getSpecies,
} from "../services/PokeService";
import { populateExtraData, setError, setLoading, setPokemon } from "./global";
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
export const getPokemonThunk = createAsyncThunk(
  "getPokemonThunk",
  async (name: string, { dispatch }) => {
    dispatch(setError(false));
    try {
      dispatch(setLoading(true));
      const pokemon = await getPokemon(name);
      const species = await getSpecies(pokemon.id);
      const evoultions = await getEvoultions(species.evolution_chain.url);
      const locations = await getLocations(pokemon.location_area_encounters);
      dispatch(setPokemon(pokemon));
      dispatch(populateExtraData({ species, evoultions, locations }));
      history.push(`/moves/${pokemon.id}`);
    } catch (_error) {
      dispatch(setError(true));
    }
    dispatch(setLoading(false));
  }
);
