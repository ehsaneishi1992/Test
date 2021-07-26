import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
// general
import { general } from "./General";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: general.colorAppBar,
        color: general.colorFont,
    },
    nested: {
        paddingLeft: theme.spacing(9),
        "&:hover": {
            backgroundColor: general.cbackgroundColorHover,
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white"
            },
        },
        borderRadius: '3px',
        height: "42px",
        width: "245px",
    },
}));

export const MainListItems = () => {
    const classes = useStyles();
    const [openUser, setOpenUser] = React.useState(false);
    const [openProduct, setOpenProduct] = React.useState(false);

    const handleClickProduct = () => {
        setOpenProduct(!openProduct);
    };

    const handleClickUser = () => {
        setOpenUser(!openUser);
    };
    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <ListItem button onClick={handleClickUser}>
                    <ListItemIcon>
                        <AssessmentIcon style={{ color: "#F9F9F9" }} />
                    </ListItemIcon>
                    <ListItemText primary="Bussines" />
                    {openUser ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openUser} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Customers" />
                        </ListItem>
                        <ListItem button className={classes.nested} >
                            <ListItemText primary="Suppliers" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Users" />
                        </ListItem>
                        <ListItem button className={classes.nested} >
                            <ListItemText primary="Certificates" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Products" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon style={{ color: "#F9F9F9" }} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </>
    );
};
