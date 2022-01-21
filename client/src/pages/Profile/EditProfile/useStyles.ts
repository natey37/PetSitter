import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 50,
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'green',
    height: '100%',
    textAlign: 'center',
  },
  form: {
    width: '70%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginLeft: '15%',
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  inputs: {
    // marginTop: '1rem',
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
  },
  inputLabels: {
    marginRight: 10,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  inputFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
