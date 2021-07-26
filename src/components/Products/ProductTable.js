
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';

import { general } from '../Dashboard/General';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 530,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    rootGrid: {
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: "8px",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    table: {
        minWidth: 650,
    },
    tableHeaderRow: {
        backgroundColor: general.table.bGHeaderRow
    },
}));

function createData(Id, Code, Name, Supplier, CurrentVerion, Manufacturer, ApproveDate, ReviewDate, SpecificationStatus) {
    return { Id, Code, Name, Supplier, CurrentVerion, Manufacturer, ApproveDate, ReviewDate, SpecificationStatus };
}

const rows = [
    createData(1, 10, 'White Misso', 'tazaki', 3, 'Tazaki', '2021-01/21', '2021-01/22', 'Pending'),
];

export const ProductTable = (props) => {
    const classes = useStyles();

    return (
        <>
            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Business
                    </Link>
                    <Typography color="textPrimary">Product</Typography>
                </Breadcrumbs>
                <Grid container className={classes.rootGrid} spacing={2}>
                    <Grid item >
                        <Paper component="form" className={classes.root}>
                            <InputBase
                                className={classes.input}
                                placeholder="Search..."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: general.colorAppBar,
                                color: general.colorFont,
                            }}
                            startIcon={<FilterListIcon />}
                        >
                            Attribute Filters
                        </Button>
                    </Grid>
                </Grid>
                <br /><br />
                <Grid container className={classes.rootGrid} spacing={2}>
                    <Grid item xs={2}>
                        Ingredients
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={3} align="center" style={{ backgroundColor: "#FFFFFF", borderRadius: "3px" }}>
                        Expand Mode
                        <ButtonGroup variant="contained" size="small" aria-label="small outlined button group"
                            style={{ marginLeft: "35px" }}
                        >
                            <Button color="#FFFFFF">Yes</Button>
                            <Button color="secondary" >No</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={2} align="right">
                        <Button variant="outlined" color="primary"
                            style={{
                                color: general.colorBgBtn,
                            }}
                            startIcon={<AddIcon />}
                        >
                            New Product
                        </Button>
                    </Grid>
                </Grid>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow className={classes.tableHeaderRow}>
                                <TableCell>#</TableCell>
                                <TableCell align="right">Product Code</TableCell>
                                <TableCell align="right">Product Name</TableCell>
                                <TableCell align="right">Supplier</TableCell>
                                <TableCell align="right">Current Verion</TableCell>
                                <TableCell align="right">Manufacturer</TableCell>
                                <TableCell align="right">Approve Date</TableCell>
                                <TableCell align="right">Review Date</TableCell>
                                <TableCell align="right">Specification Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.Id}
                                    </TableCell>
                                    <TableCell align="right">{row.Code}</TableCell>
                                    <TableCell align="right">{row.Name}</TableCell>
                                    <TableCell align="right">{row.Supplier}</TableCell>
                                    <TableCell align="right">{row.CurrentVerion}</TableCell>
                                    <TableCell align="right">{row.Manufacturer}</TableCell>
                                    <TableCell align="right">{row.ApproveDate}</TableCell>
                                    <TableCell align="right">{row.ReviewDate}</TableCell>
                                    <TableCell align="right">{row.SpecificationStatus}</TableCell>
                                    <TableCell align="right"><MoreHorizIcon /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </>
    );
}
