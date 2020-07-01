import React, {Fragment} from 'react';
import CSSBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AppRouting from './AppRouting';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#152e8e'
    },
    secondary: {
      main: '#07c6e9',
      dark: '#24b0ca'
    }
  }
})

const App = () => {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CSSBaseline />
        <ToastContainer />
        <AppRouting/>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
