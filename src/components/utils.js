import Swal from 'sweetalert2';
import { SubmissionError } from 'redux-form/immutable'
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = theme => ({
    body: {
        backgroundColor: 'white',
        padding: '15px',
    },
    paper: {
        padding: '60px',
        border: 'solid gray'
    },
    h1: {
        fontFamily: 'fantasy'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#141f5f',
        color: 'white'
    },
    loading: {
        display: 'table-caption',
        textAlign: 'center'
    }
});

const RenderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <TextField
                {...input} type={type}
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
            />
            {touched &&
            ((error && <span style={{ color: 'red' }}>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const validate = validations => () => {
    const errors = {};
    Object.keys(validations).forEach(item => {
        const itemValidation = Array.isArray(validations[item])
            ? validations[item].find(val => val !== null)
            : validations[item];
        if (typeof itemValidation !== "function") {
            errors[item] = itemValidation;
        }
    });
    return errors;
};

const getSubmitInfo = data => {
    const str = JSON.stringify(data,null,2);
    return JSON.parse(str)
};

const catchFormError = error => {
    const errorMsg = error && error.response
        ? error.response.data
        && (error.response.data.error || error.response.data.message)
        : error.message;
    throw new SubmissionError({ _error: errorMsg });
};

const responseAPI = data => {
    if(data.status === 200){
        Swal.fire('Todo salío bien', data.message, 'success');
    }else{
        Swal.fire('Algo salió mal', JSON.stringify(data.message), 'error');
    }
}

export {validate, getSubmitInfo, catchFormError, useStyles, RenderField, responseAPI};