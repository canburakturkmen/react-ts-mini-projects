import classes from "./Pokemon.module.css";
import { Colors } from "../constants/pokemon-constants";
import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const main_types = Object.keys(Colors);
const colorList = Object.values(Colors);

type props = {
  url: string;
};

const Pokemon = (props: props) => {
  const [pokemon, setPokemon] = useState<any>(null);
  const { sendRequest } = useHttp();

  const url = props.url;
  let name = "";
  let id = "";

  let poke_types = "";
  let type: any = "";
  let src = "";
  let color: any = "#eee";

  if (pokemon !== null) {
    name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    id = pokemon.id.toString().padStart(3, "0");

    poke_types = pokemon.types.map((type: any) => type.type.name);
    type = poke_types[0];
    color = colorList[main_types.indexOf(type)];
  }

  useEffect(() => {
    sendRequest(url, {}, (data) => {
      setPokemon(data);
    });
  }, [sendRequest, url]);

  return (
    <div style={{ backgroundColor: color }} className={classes.pokemon}>
      <div className={classes["img-container"]}>
        <img src={src} alt="pokemon" />
      </div>
      <div className={classes.info}>
        <span className={classes.number}>#{id}</span>
        <h3 className={classes.name}>{name}</h3>
        <small className={classes.type}>
          Type: <span>{type}</span>
        </small>
      </div>
    </div>
  );
};

export default Pokemon;
