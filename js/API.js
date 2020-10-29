const url = 'http://localhost:4000/clientes';

// When you create a new customer
export const newCustomer = async customer => {
    try {
        /* 
        By Default fetch executes the GET method for obtain information. 
        As we are creating a new Customer, we will use the POST method.
        Also as we are sending data to the server, we put a body that indicates how to send 
        the content of the request to the url /clientes
        Finally we place the headers, it is the information of what type of data we are sending
        */
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'; 
    } catch (error) {
        console.log(error)
    }
}

// Get all customers
export const getCustomers = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}

// Delete Customer
export const deleteCustomer = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// Get a customer by their ID
export const getCustomer = async id => {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

// Update record
export const updateCustomer = async customer => {
    
    try {
        await fetch(`${url}/${customer.id}`, {
            method: 'PUT',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}