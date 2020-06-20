const FORM_NAME = 'register-user';
const FIELDS = {
    document: 'document',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
};

const fieldValidations = {
    required: value => (value == null || value === '' || !/\S/.test(value) ? 'Campo obligatorio' : undefined)
};

const VALIDATIONS = {
    [FIELDS.document]: fieldValidations.required,
    [FIELDS.full_name]: fieldValidations.required,
    [FIELDS.email]: fieldValidations.required,
    [FIELDS.phone]: fieldValidations.required
};

export {FORM_NAME,FIELDS,VALIDATIONS, fieldValidations};