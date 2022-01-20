import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  paper: {
    backgroundColor: '#FAFAFB !important',
  },
  authWrapper: {
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 30,
    // paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    marginTop: 30,
    textAlign: 'center',
    textShadow: '1px 1px grey',
  },
  loginContainer: {
    background: 'white',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;
