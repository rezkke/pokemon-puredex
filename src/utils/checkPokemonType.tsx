import { lighten } from "polished";
import * as color from "@styles/globals";

export interface IProps {
  pokemonType: string;
  light?: boolean;
}

export const checkPokemonType = (pokemonType: string, light?: boolean) => {
  switch (pokemonType) {
    case "normal":
      return light
        ? `background-color: ${lighten(0.25, color.normal)};`
        : `color: ${color.normal};`;
    case "fire":
      return light
        ? `background-color: ${lighten(0.25, color.fire)};`
        : `color: ${color.fire};`;
    case "fighting":
      return light
        ? `background-color: ${lighten(0.25, color.fighting)};`
        : `color: ${color.fighting};`;
    case "water":
      return light
        ? `background-color: ${lighten(0.2, color.water)};`
        : `color: ${color.water};`;
    case "poison":
      return light
        ? `background-color: ${lighten(0.2, color.poison)};`
        : `color: ${color.poison};`;
    case "electric":
      return light
        ? `background-color: ${lighten(0.18, color.electric)};`
        : `color: ${color.electric};`;
    case "ground":
      return light
        ? `background-color: ${lighten(0.19, color.ground)};`
        : `color: ${color.ground};`;
    case "grass":
      return light
        ? `background-color: ${lighten(0.25, color.grass)};`
        : `color: ${color.grass};`;
    case "flying":
      return light
        ? `background-color: ${lighten(0.12, color.flying)};`
        : `color: ${color.flying};`;
    case "ice":
      return light
        ? `background-color: ${lighten(0.16, color.ice)};`
        : `color: ${color.ice};`;
    case "bug":
      return light
        ? `background-color: ${lighten(0.25, color.bug)};`
        : `color: ${color.bug};`;
    case "psychic":
      return light
        ? `background-color: ${lighten(0.25, color.psychic)};`
        : `color: ${color.psychic};`;
    case "rock":
      return light
        ? `background-color: ${lighten(0.25, color.rock)};`
        : `color: ${color.rock};`;
    case "dragon":
      return light
        ? `background-color: ${lighten(0.2, color.dragon)};`
        : `color: ${color.dragon};`;
    case "ghost":
      return light
        ? `background-color: ${lighten(0.25, color.ghost)};`
        : `color: ${color.ghost};`;
    case "dark":
      return light
        ? `background-color: ${lighten(0.23, color.dark)};`
        : `color: ${color.dark};`;
    case "steel":
      return light
        ? `background-color: ${lighten(0.12, color.steel)};`
        : `color: ${color.steel};`;
    case "fairy":
      return light
        ? `background-color: ${lighten(0.04, color.fairy)};`
        : `color: ${color.fairy};`;
    default:
      return "";
  }
};
