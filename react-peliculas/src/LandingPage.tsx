import { useState, useEffect } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";



export default function LandingPage () {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setPeliculas({
          enCartelera: [

          ],
          proximosEstrenos: [

          ]
        });
      }, 500);
  
      return () => clearTimeout(timerId); // para no saturar la memoria
    });
   
    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}