import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withStyles} from "@material-ui/core/styles";
import {useStyles, RenderField} from '../utils';
import {bool, object, string, func} from "prop-types";
import WithError from "../WithError";
import {Field,reduxForm} from "redux-form/immutable";
import {FIELDS, VALIDATIONS} from "./constants";
import FormHelperText from "@material-ui/core/FormHelperText";

 function Form({handleSubmit,error,classes,submitting}) {
    return (
        <Container component="main" maxWidth="xs" className={classes.body}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" className={classes.title}>
                    ¿Aún no tienes cuenta con nosotros?, ¡Creala!
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Field
                        label="Documento"
                        name={FIELDS.document}
                        component={RenderField}
                        validate={VALIDATIONS[FIELDS.document]}
                    />
                    <Field
                        label="Nombres"
                        name={FIELDS.full_name}
                        component={RenderField}
                        validate={VALIDATIONS[FIELDS.full_name]}
                    />
                    <Field
                        label="Email"
                        type="email"
                        name={FIELDS.email}
                        component={RenderField}
                        validate={VALIDATIONS[FIELDS.email]}
                    />
                    <Field
                        label="Celular"
                        type="number"
                        name={FIELDS.phone}
                        component={RenderField}
                        validate={VALIDATIONS[FIELDS.phone]}
                    />
                    {error && (
                        <FormHelperText className={classes.error}>{error}</FormHelperText>
                    )}
                    <Button
                        type="submit"
                        disabled={submitting}
                        fullWidth
                        variant="contained"
                        className={classes.submit}>
                        Registrarme
                    </Button>
                </form>
            </div>
        </Container>
    );
}
Form.defaultProps = {
    error: null
}
Form.propTypes = {
    error: string,
    classes: object.isRequired,
    handleSubmit: func.isRequired,
    submitting: bool.isRequired,
}
export default WithError(withStyles(useStyles)(reduxForm()(Form)));
