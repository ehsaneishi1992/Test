import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './css/style';
import clsx from 'clsx';

import theme from "./theme";
import { DrawerAndAppBar } from "./components/Dashboard/DrawerAndAppBar";
import { ProductTable } from "./components/Products/ProductTable";

function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <h1>Welcome!</h1> */}
        {/* <p>This is my MUI Tailwind website!</p> */}
        <div>
          <DrawerAndAppBar title="Product" />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container maxWidth="lg" className={classes.container}>
              <ProductTable />
              {/* <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Paper className={fixedHeightPaper}>
                    </Paper>
                  </Grid>
                </Grid> */}
            </Container>
          </main>
          {/* <Button variant="contained" color="primary">
            Button
          </Button> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
