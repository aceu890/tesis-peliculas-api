// PÁGINA DE COMPONENTE DE LISTADO DE PELICULA

import { pelicula } from "./peliculas.model";
import PeliculaIndividual from "./PeliculaIndividual";
import css from "./ListadoPeliculas.module.css";
import Cargando from "./../utils/Cargando";
import ListadoGenerico from "./../utils/ListadoGenerico";

// CONTROLA 3 ESTADOS DE LISTADO DE PELICULAS
export default function ListadoPeliculas(props: listadoPeliculasProps) {
  return (
    <ListadoGenerico listado={props.peliculas}>
      <div className={css.div}>
        {props.peliculas?.map((pelicula) => (
          <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
        ))}
      </div>
    </ListadoGenerico>
  );
}

interface listadoPeliculasProps {
  peliculas?: pelicula[];
}
