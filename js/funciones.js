export function showAlert(message) {
    const previewAlert = document.querySelector('.alert');
    const form = document.querySelector('#formulario');

    if(!previewAlert){
        const alert = document.createElement('p');
        const strong = document.createElement('strong');
        const span = document.createElement('span');

        alert.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','mx-auto','max-w-lg','mt-6','text-center','alert');

        strong.classList.add('font-bold');
        strong.textContent = '¡Error! ';

        span.classList.add('block','sm:inline');
        span.textContent = message;

        alert.appendChild(strong);
        alert.appendChild(span);

        form.appendChild(alert);

        setTimeout(()=>{
            alert.remove();
        },3000);
        
    }
}

export function validateEmpty(obj) {
    return !Object.values(obj).every(input => input !== '');
}