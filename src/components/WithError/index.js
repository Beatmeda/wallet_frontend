import React from 'react';
import { string, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './utils';

function WithError(WrappedComponent) {
    function WrappedFunction({ error, classes, ...props }) {
        return error ? (
            <div className={classes.container}>
                <h2>Error: {error}</h2>
            </div>
        ) : (
            <WrappedComponent {...props} />
        );
    }

    WrappedFunction.defaultProps = {
        error: null
    };

    WrappedFunction.propTypes = {
        error: string,
        classes: object.isRequired
    };
    return withStyles(useStyles)(WrappedFunction);
}
export default WithError;