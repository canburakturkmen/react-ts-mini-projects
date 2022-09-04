import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import classes from "./Pokedex.module.css";
import Pokemon from "./Pokemon";

const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

//TODO: Fetching should be handled with "Promise.All".
//Type assignment should be defined for response datas
//No error handling while fetching
//No loading state handled while fetching

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const { sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(pokemonListUrl, {}, (data: any) => {
      setPokemonList(data.results);
    });
  }, [sendRequest]);

  return (
    <div className={classes["poke-container"]}>
      {pokemonList.map((pokemon, idx) => (
        <Pokemon key={idx} url={pokemon.url} />
      ))}
    </div>
  );
};

export default Pokedex;
