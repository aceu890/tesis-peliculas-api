import { useState, useEffect } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";



export default function LandingPage () {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setPeliculas({
          enCartelera: [
            {
              id: 1,
              titulo: "Spider-Man Homecoming",
              poster:
                "https://image.tmdb.org/t/p/w300/sd1eByiFLL0arwkip6lV6l25cSj.jpg",
            },
            {
              id: 2,
              titulo: "Spider-Man 3",
              poster:
                "https://image.tmdb.org/t/p/w300/rLwhewWypBL88VFGf6haSdnNj2U.jpg",
            },
          ],
          proximosEstrenos: [
            {
              id: 3,
              titulo: "Superman Red Son",
              poster:
                "https://image.tmdb.org/t/p/w300/FVU9HZ87VfYMe5vIJvM3hFTG5i.jpg",
            },
          ],
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