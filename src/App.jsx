import {
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import NetPromoterScore from './components/pages/NetPromoterScore';

const theme = createTheme({
  overrides: {
    MuiFormHelperText: {
      root: {
        color: '#FF046D',
        marginLeft: '0 !important',
      },
    },
    MuiButtonBase: {
      root: {
        width: 110,
        height: 40,
      }
    },
    MuiButton: {
      contained: {
        color: '#FFFFFF',
        background: 'linear-gradient(90deg, #FB6422 0%, #FF046D 100%)',
      },
      outlined: {
        borderColor: '#333333',
        color: '#333333',
      },
      label: {
        fontSize: 14,
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 5,
      },
    },
    MuiTextField: {
      root: {
        width: '100%',
      },
    },
  },
  palette: {
    primary: {
      main: '#FF046D',
    },
    secondary: {
      main: '#FB6422',
    },
    error: {
      main: '#FF046D',
    },
    warning: {
      main: '#f17700',
    },
    info: {
      main: '#333333',
    },
    success: {
      main: '#3BB46B',
    },
    grey: {
      main: '#E5E5E5',
      secondary: '#C4C4C4',
    },
    white: {
      main: '#FFFFFF',
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: 96,
    },
    h2: {
      fontSize: 60,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      color: '#333333'
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
      color: '#333333'
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      letterSpacing: 0.6,
      fontWeight: 600,
      textTransform: 'capitalize'
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
      fontWeight: 300,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <NetPromoterScore />
  </ThemeProvider>
);

export default App;
