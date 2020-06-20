import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {withStyles} from "@material-ui/core/styles";
import {useStyles} from '../utils';
import {loadWallet, purchase, getBalance} from './utils';
import {object, string} from "prop-types";
import Swal from 'sweetalert2';
import FormHelperText from "@material-ui/core/FormHelperText";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CircularProgress from '@material-ui/core/CircularProgress';


function Home({classes, error}) {
    const [loading, setLoading] = useState(false);
    const handleGetBalance = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Consultando saldo...',
            html:
                '<input id="document" class="swal2-input" placeholder="Documento">' +
                '<input id="phone" class="swal2-input" placeholder="Celular">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('document').value,
                    document.getElementById('phone').value
                ]
            }
        })

        if (formValues) {
            setLoading(true);
            await getBalance(formValues);
            setLoading(false);
        }
    };

    const handleChargeMoney = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Recarga en proceso...',
            html:
                '<input id="document" class="swal2-input" placeholder="Documento">' +
                '<input id="phone" class="swal2-input" placeholder="Celular">' +
                '<input id="value" class="swal2-input" placeholder="Valor a recargar $">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('document').value,
                    document.getElementById('phone').value,
                    document.getElementById('value').value
                ]
            }
        })

        if (formValues) {
            setLoading(true);
            await loadWallet(formValues);
            setLoading(false);
        }
    }
    const handlePurchase = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Compra en proceso...',
            html:
                '<input id="document" class="swal2-input" placeholder="Documento">' +
                '<input id="phone" class="swal2-input" placeholder="Celular">' +
                '<input id="value" class="swal2-input" placeholder="Valor de la compra $">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('document').value,
                    document.getElementById('phone').value,
                    document.getElementById('value').value
                ]
            }
        })

        if (formValues) {
            setLoading(true);
            await purchase(formValues);
            setLoading(false);
        }
    }
    return (
        <Container component="main" maxWidth="xs" className={classes.body}>
            {loading ? (<div className={classes.loading}><CircularProgress className={classes.loading} />
            <small>Cargando...</small></div>): (
                <div className={classes.paper}>
                    <h1 className={classes.h1}>Billetera</h1>
                    <hr/>
                    <form className={classes.form}>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={handleGetBalance}
                            className={classes.submit}
                            startIcon={<SearchIcon />}
                        >
                            Consultar saldo
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={handleChargeMoney}
                            className={classes.submit}
                            startIcon={<LocalAtmIcon />}
                        >
                            Recargar billetera
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={handlePurchase}
                            className={classes.submit}
                            startIcon={<ShoppingCartIcon />}
                        >
                            Pagar
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            startIcon={<ExitToAppIcon />}
                            href="http://localhost:3000/register"
                        >
                            Registrarme
                        </Button>
                        {error && (
                            <FormHelperText className={classes.error}>{error}</FormHelperText>
                        )}
                    </form>
                </div>
            )}
        </Container>
    );
}

Home.defaultProps = {
    error: null
}

Home.propTypes = {
    error: string,
    classes: object.isRequired,
    history: object.isRequired
}
export default withStyles(useStyles)(Home);
