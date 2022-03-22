import * as Yup from 'yup';

export default function configurarValidaciones() {
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula', function (){
        return this.test('primera-letra-mayuscula', 'la primera letra debe ser mayuscula',
        function(valor) {
            if (valor && valor.length > 0){
                const primeraLetra = valor.substring(0,1);
                return primeraLetra === primeraLetra.toUpperCase();
            }
            
            return true;
    })
  })
}