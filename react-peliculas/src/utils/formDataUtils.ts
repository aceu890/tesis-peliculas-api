import { actorCreacionDTO } from "../actores/actores.model";

export function convertirActorAFormData(actor: actorCreacionDTO): FormData{
    const formData = new FormData();

    formData.append('nombre', actor.nombre);
    if (actor.biografia){
        formData.append('biografia', actor.biografia);
    }

    if (actor.fechaNacimiento){
        formData.append("fechaNacimiento", formatearFecha(actor.fechaNacimiento));  
    }

    if (actor.foto){
        formData.append("foto", actor.foto);
    }

    return formData;
}

function formatearFecha(date: Date){
    date = new Date(date);
    const formato = new Intl.DateTimeFormat("en", {
        year: 'numeric',
        month: '2-digit',
        day: "2-digit"
    });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = formato.formatToParts(date);

    return `${year}-${month}-${day}`;

}