import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, usePokeDispatch, usePokeSelector } from "../redux/store";
import { getPokemonThunk } from "../redux/thunks";

export const usePageRefresh = () => {
 const { id } = useParams<{id: string}>();
 const dispatch = usePokeDispatch();
  const { currentID } = usePokeSelector((state: RootState) => ({
    currentID: state.pokemon?.id.toString() || undefined
  }));

  useEffect(() => {
    if(id !== currentID){
      dispatch(getPokemonThunk(id));
    }
  }, [id, currentID])
};
