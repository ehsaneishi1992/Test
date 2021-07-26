import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './assets/css/style';
import clsx from 'clsx';

import theme from "./theme";
import { DrawerAndAppBar } from "./components/Dashboard/DrawerAndAppBar";
import { ProductTable } from "./components/Products/ProductTable";

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      <div>
        {/* <h1>Welcome!</h1> */}
        {/* <p>This is my MUI Tailwind website!</p> */}
        <div >
          <DrawerAndAppBar title="Product" />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container maxWidth="lg" className={classes.container}>
              <ProductTable />
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
