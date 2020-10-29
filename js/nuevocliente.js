import { showAlert, validateEmpty } from './funciones.js'
import { newCustomer } from './API.js'

(function() {
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', validateCustomer);

    function validateCustomer(e){
        e.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        const customer = { name, email, phone, company };

        if(validateEmpty(customer)) {
            showAlert('Todos los campos son obligatorios');
            return;
        }

        newCustomer(customer);

    }

})();