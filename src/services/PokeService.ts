import axios from "axios";
import { EvoultionResponse, LocationItem, PokemonResponse, SpeciesResponse } from "../interfaces/API";

export const getPokemon = async (name: string | number) => {
  try {
    const resp = await axios.get<PokemonResponse>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return resp.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const getSpecies = async (id: number) => {
  try {
    const resp = await axios.get<SpeciesResponse>(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    return resp.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getEvoultions = async (url: string) => {
  try {
    const resp = await axios.get<EvoultionResponse>(
      url
    );
    return resp.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getLocations = async (url: string) => {
  try {
    const resp = await axios.get<LocationItem[]>(
      url
    );
    return resp.data;
  } catch (error) {
    throw error.response.data;
  }
};