import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			// width: "100%",
			zIndex: theme.zIndex.drawer + 1,
		}
	}, 
	title: {
		flexGrow: 1,
	},
}));

const TopBarNav = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
                        News
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default TopBarNav;