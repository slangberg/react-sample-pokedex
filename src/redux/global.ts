import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EncounterItem, flattenEvoultions } from "./selectors";
import {
  APIEnpointData,
  EvoultionItem,
  EvoultionResponse,
  HistoryData,
  LocationItem,
  PokemonResponse,
  SpeciesResponse,
} from "../interfaces/API";
import { MOCK_POKEMON } from "../mocks/mock";

interface GlobalState {
  loading: boolean;
  error?: boolean;
  pokemon?: PokemonResponse;
  species?: SpeciesResponse;
  evoultions?: APIEnpointData[];
  locations?: APIEnpointData[];
  history: HistoryData[];
}

export interface PopData {
  species: SpeciesResponse;
  evoultions: EvoultionResponse;
  locations: LocationItem[];
}

const initialState: GlobalState = { loading: false, history: [] };

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon(state, action: PayloadAction<PokemonResponse>) {
      state.pokemon = action.payload;
      state.history.push({ id: action.payload.id, name: action.payload.name });
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
    populateExtraData(state, action: PayloadAction<PopData>) {
      const { species, evoultions, locations } = action.payload;
      state.species = species;
      state.evoultions = flattenEvoultions(evoultions);
      state.locations = locations.map((item) => item.location_area);
    },
  },
});

export const {
  setPokemon,
  populateExtraData,
  setLoading,
  setError
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
