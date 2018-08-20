import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 20,
  },
  paperheader: {
    padding: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperleft: {
    padding: theme.spacing.unit * 21,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  papercontent: {
    padding: theme.spacing.unit * 23,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperfooter: {
    padding: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paperheader}>Header</Paper>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Paper className={classes.paperleft}>Left Side Menu</Paper>
        </Grid>
        <Grid item xs={9} >
          <Paper className={classes.papercontent}>Contents</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperfooter}>Footer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
