import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const Main = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                This is the main section.
            </Typography>
            <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Nulla aliquet porttitor lacus luctus. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Maecenas accumsan lacus vel facilisis volutpat est. Tortor dignissim convallis aenean et tortor at risus viverra. Viverra accumsan in nisl nisi scelerisque eu. Magna eget est lorem ipsum dolor sit amet consectetur. Vivamus arcu felis bibendum ut tristique. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Nec feugiat in fermentum posuere urna nec tincidunt.
            </Typography>
        </Paper>
    )
};

export default Main;