import { getCustomer, updateCustomer } from './API.js';
import { showAlert, validateEmpty } from './funciones.js'

(function() {

    // Fields of form
    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const companyInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametersURL = new URLSearchParams(window.location.search);

        const idCustomer = parseInt(parametersURL.get('id'));

        const customer = await getCustomer(idCustomer);
        showCustomer(customer);

        // Submit form
        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validateCustomer);
    });

    function showCustomer(customer) {
        const { name, email, phone, company, id } = customer;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        companyInput.value = company;
        idInput.value = id;
        
    }

    function validateCustomer(e) {
        e.preventDefault();
        const customer = { 
            name: nameInput.value, 
            email: emailInput.value, 
            phone: phoneInput.value, 
            company: companyInput.value, 
            id: parseInt(idInput.value) 
        };

        if(validateEmpty(customer)) {
            showAlert('Todos los campos son obligatorios');
            return;
        }

        // Rewrite the object
        updateCustomer(customer);
    }

})();