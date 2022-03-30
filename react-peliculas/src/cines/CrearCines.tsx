import FormularioCines from "./FormularioCines";
import { cineCreacionDTO } from './cines.model';
import axios from "axios";
import { urlCines } from '../utils/endpoints';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import MostrarErrores from '../utils/MostrarErrores';

export default function CrearCines() {

    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(cine: cineCreacionDTO) {
        try {
            await axios.post(urlCines, cine);
            history.push('/cines');            
        }
        catch(error) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear cine</h3>
            <MostrarErrores errores={errores} />
            <FormularioCines
                modelo={{nombre: ''}}
                onSubmit={async valores => await crear(valores)}
            />
        </>

    )
}