const formField = (type, label) => {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList.add('input-wrapper');
    
    if (type != 'submit') {
        const fieldLabel = document.createElement('label');
        fieldLabel.setAttribute('for', label.toLowerCase());
        fieldLabel.textContent = label;
        fieldWrapper.appendChild(fieldLabel);
    }

    const field = document.createElement('input');
    field.setAttribute('type', type);
    field.setAttribute('name', label.toLowerCase());
    field.id = label.toLowerCase();
    if (type == 'submit') {
        field.setAttribute('value', 'Send');
    }
    fieldWrapper.appendChild(field);

    const form = document.getElementById('contact-form');
    form.appendChild(fieldWrapper);
}

const contact = () => {
    const info = document.createElement('div');
    info.textContent = 'We deliver on weekend mornings by specific arrangement throughout Seattle\'s Central District, Capitol Hill, and First Hill. Contact us to set up your order!';
    
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    form.id = 'contact-form';
    formContainer.appendChild(form);
    
    container.appendChild(info);
    container.appendChild(formContainer);

    const name = formField('text', 'Name');
    const email = formField('email', 'Email');
    const message = formField('text', 'Message');
    const submit = formField('submit', 'Send');
}

export default contact;