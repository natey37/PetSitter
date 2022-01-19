import { green } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
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
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 30,
    // paddingBottom: 10,
    color: '#000000',
    fontWeight: 700,
    marginTop: 30,
    textAlign: 'center',
    textShadow: '1px 1px grey',
  },
  signupContainer: {
    background: 'white',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
  },
  memberText: {
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#f14140',
  },
}));

export default useStyles;
